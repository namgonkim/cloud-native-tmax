package javaconnect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DriverTestMysql {
    public static void main(String[] args) {
        Connection con = null;
        String url = "jdbc:mysql://localhost:3306/javadb?useUnicode=true&characterEncoding=utf8";
        String user = "javauser";
        String password = "1234";
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            con = DriverManager.getConnection(url,user,password);
            System.out.println("데이터베이스에 접속하였습니다.");
        } catch (ClassNotFoundException e){
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        finally {
            try{
                if (con != null) {
                    con.close();
                }
            } catch(Exception e){}
        }
    }
}