package javaconnect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class InsertDB {

    public static void main(String[] args) {
        Connection con = null;
        Statement stmt = null;
        String url = "jdbc:mysql://localhost:3306/javadb?useUnicode=true&characterEncoding=utf8";
        String user = "javauser";
        String password = "1234";
        String driver = "com.mysql.cj.jdbc.Driver";

        // Mysql Driver Connect
        try {
            Class.forName(driver);

        } catch (ClassNotFoundException e){
            e.printStackTrace();
        }
        // Mysql DataBase Connect & Execute & Manage
        try {
            con = DriverManager.getConnection(url, user, password);
            stmt = con.createStatement(); // 전송 객체

            StringBuffer sql = new StringBuffer();
            sql.append("INSERT INTO address(name, handphone, address)");
            sql.append("VALUES('개발자7', '000-123-1234', '대한민국');");

            int cnt = stmt.executeUpdate(sql.toString());
            System.out.println("레코드 " + cnt +"개가 추가 되었습니다.");
        }
        catch (SQLException e) {
            e.printStackTrace();
        }
        // Mysql Connect Close
        finally {
            // Statement Close
            try{
                if(stmt != null)
                    stmt.close();
            } catch (SQLException e){
                e.printStackTrace();
            }
            // Connect Close
            try{
                if(con != null)
                    con.close();
            } catch (SQLException e){
                e.printStackTrace();
            }
        }
    }
}
