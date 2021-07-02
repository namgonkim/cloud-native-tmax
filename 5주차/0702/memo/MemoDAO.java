package memo;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import utility.DBClose;
import utility.DBOpen;

public class MemoDAO {

    public boolean create(MemoDTO dto) {
        boolean flag = false;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        StringBuffer sql = new StringBuffer();

        sql.append("INSERT INTO MEMO(NAME, CONTENT, PASS) ");
        sql.append(" VALUES( ? , ? , ? )");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setString(1, dto.getName());
            pstmt.setString(2, dto.getContent());
            pstmt.setString(3, dto.getPass());

            int cnt = pstmt.executeUpdate();

            if (cnt > 0) flag = true;


        } catch (SQLException e) {
// TODO Auto-generated catch block
            e.printStackTrace();
        }finally {
            DBClose.close(con, pstmt);
        }

        return flag;
    }

    /**
     * 1건의 데이터 읽어오기
     * @param memonum
     * @return MemoDTO
     */
    public MemoDTO read(int memonum) {
        MemoDTO dto = null;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        StringBuffer sql = new StringBuffer();

        sql.append("SELECT * FROM MEMO WHERE memonum = ? ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setInt(1, memonum);
            rs = pstmt.executeQuery();
            if(rs.next()) {
                dto = new MemoDTO();
                dto.setMemonum(rs.getInt("memonum"));
                dto.setName(rs.getString("name"));
                dto.setContent(rs.getString("content"));
                dto.setPass(rs.getString("pass"));
            }

        } catch (SQLException e) {
// TODO Auto-generated catch block
            e.printStackTrace();
        }finally {
            DBClose.close(con, pstmt, rs);
        }

        return dto;
    }

    /**
     * 레코드 수정
     * @param dto
     * @return boolean
     */
    public boolean update(MemoDTO dto) {
        boolean flag = false;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        StringBuffer sql = new StringBuffer();

        sql.append("UPDATE MEMO SET NAME = ?, CONTENT = ?, PASS = ? WHERE MEMONUM = ? ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setString(1, dto.getName());
            pstmt.setString(2, dto.getContent());
            pstmt.setString(3, dto.getPass());
            pstmt.setInt(4, dto.getMemonum());

            int cnt = pstmt.executeUpdate();
            if (cnt > 0) flag = true;
        } catch (SQLException e) {
// TODO Auto-generated catch block
            e.printStackTrace();
        }finally {
            DBClose.close(con, pstmt);
        }
        return flag;
    }


    /**
     * 레코드 삭제
     * @param memonum
     * @return boolean
     */
    public boolean delete(int memonum) {
        boolean flag = false;
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        StringBuffer sql = new StringBuffer();

        sql.append("DELETE FROM MEMO WHERE MEMONUM = ? ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            pstmt.setInt(1, memonum);

            int cnt = pstmt.executeUpdate();
            if (cnt > 0) flag = true;
        } catch (SQLException e) {
// TODO Auto-generated catch block
            e.printStackTrace();
        }finally {
            DBClose.close(con, pstmt);
        }
        return flag;
    }

    /**
     * 전체 데이터 읽어오기
     * @return boolean
     */
    public List list(){
        List list = new ArrayList();
        Connection con = DBOpen.open();
        PreparedStatement pstmt = null;
        ResultSet rs = null;
        StringBuffer sql = new StringBuffer();

        sql.append("SELECT * FROM MEMO ORDER BY memonum DESC ");

        try {
            pstmt = con.prepareStatement(sql.toString());
            rs = pstmt.executeQuery();
            while(rs.next()) {
                MemoDTO dto = new MemoDTO();
                dto.setMemonum(rs.getInt("memonum"));
                dto.setName(rs.getString("name"));
                dto.setContent(rs.getString("content"));
                dto.setPass(rs.getString("pass"));
                list.add(dto);
            }

        } catch (SQLException e) {
// TODO Auto-generated catch block
            e.printStackTrace();
        }finally {
            DBClose.close(con, pstmt, rs);
        }
        return list;
    }
}
