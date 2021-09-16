package javaconnect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
public class SelectDB {
    public static void main(String args[]) {
        String url = "jdbc:mysql://localhost:3306/javadb?useUnicode=true&characterEncoding=utf8";
        String user = "javauser";
        String password = "1234";
        String driver = "com.mysql.cj.jdbc.Driver";

        Connection con = null;
        Statement stmt = null;
        ResultSet rs = null; // sql 조회 결과를 저장하는 result Set
        try {
            Class.forName(driver);
        } catch(java.lang.ClassNotFoundException e) {
            System.err.print("ClassNotFoundException: ");
            System.err.println(e.getMessage());
        }
        try {
            con = DriverManager.getConnection(url,user, password);
            stmt = con.createStatement();

            StringBuffer sql = new StringBuffer();
            sql.append("    SELECT addressnum, name, handphone, address    ");
            sql.append("    FROM address ORDER BY addressnum DESC     ");

            rs = stmt.executeQuery(sql.toString());
            while(rs.next()){
                int addressnum = rs.getInt(1);  //첫번째 컬럼
                String name = rs.getString(2);  //두번째 컬럼
                String handphone = rs.getString("handphone");//컬럼명 명시
                String address = rs.getString("address");

                System.out.println("번호: " + addressnum);
                System.out.println("성명: " + name);
                System.out.println("전화번호: " + handphone);
                System.out.println("주소: " + address);
                System.out.println("-----------------------");
            }
        } catch(SQLException e) {
            System.out.println("SQLException: " + e.getMessage());
        } finally{
            try{
                if ( rs != null){ rs.close(); }
            }catch(Exception e){}
            try{
                if ( stmt != null){ stmt.close(); }
            }catch(Exception e){}
            try{
                if ( con != null){ con.close(); }
            }catch(Exception e){}
        }
    }
}