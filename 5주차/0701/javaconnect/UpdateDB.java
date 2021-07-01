package javaconnect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
public class UpdateDB {
    public static void main(String args[]) {
        String url = "jdbc:mysql://localhost:3306/javadb?useUnicode=true&characterEncoding=utf8";
        String user = "javauser";
        String password = "1234";
        String driver = "com.mysql.cj.jdbc.Driver";
        Connection con = null;
        Statement stmt = null;
        try {
            Class.forName(driver);
        } catch(Exception e) {
            System.err.print(e.toString());
        }
        try {
            con = DriverManager.getConnection(url,user,password);
            stmt = con.createStatement();

            StringBuffer sql = new StringBuffer();
            sql.append("    UPDATE address SET handphone='777-777-7777',    ");
            sql.append("        address='캐나다' WHERE addressnum=4    ");

            int ret = stmt.executeUpdate(sql.toString());
            System.out.println("레코드 " + ret + "개가 수정되었습니다.");
        } catch(SQLException e) {
            System.out.println("SQLException: " + e.getMessage());
        } finally{
            try{
                if ( stmt != null){ stmt.close(); }
            }catch(Exception e){}
            try{
                if ( con != null){ con.close(); }
            }catch(Exception e){}
        }
    }
}