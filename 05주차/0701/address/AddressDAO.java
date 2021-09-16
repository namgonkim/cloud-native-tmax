package address;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import utility.DBClose;
import utility.DBOpen;

public class AddressDAO {
    public boolean create(AddressDTO dto) {

        boolean flag = false;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        StringBuffer sql = new StringBuffer();
        sql.append("   INSERT INTO address(NAME, handphone, address)   ");
        sql.append("   VALUES(?,?,?)   ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setString(1, dto.getName());
            pstmt.setString(2, dto.getHandphone());
            pstmt.setString(3, dto.getAddress());

            int cnt = pstmt.executeUpdate();
            if (cnt > 0)
                flag = true;
            System.out.println("레코드 " + cnt + "개가 추가 되었습니다.");

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            DBClose.close(con, pstmt);
        }
        return flag;
    }
}