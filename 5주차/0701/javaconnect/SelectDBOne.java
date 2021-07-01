package javaconnect;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class SelectDBOne {
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
            con = DriverManager.getConnection(url,user,password);
            stmt = con.createStatement();


            StringBuffer sql = new StringBuffer();
            sql.append("    SELECT addressnum, name, handphone, address     ");
            sql.append("    FROM address WHERE addressnum=4     ");

            //쿼리를 실행하여 레코드 집합을 rs 객체로 저장합니다.
            rs = stmt.executeQuery(sql.toString());
            //레코드가 있으면 true를 리턴하고
            //첫번째 레코드로 이동
            if(rs.next()){
                int addressnum = rs.getInt("addressnum");  //컬럼명 명시
                String name = rs.getString("name");
                String handphone = rs.getString(3); // 세번째 문자열 컬럼
                String address = rs.getString(4);
                System.out.println("번호: " + addressnum);
                System.out.println("성명: " + name);
                System.out.println("전화번호: " + handphone);
                System.out.println("주소: " + address);
            }
        } catch(SQLException e) {
            System.out.println("SQLException: " + e.getMessage());
        } finally{
            try{
                if (rs != null){
                    rs.close();
                }
            }catch(Exception e){
                e.printStackTrace();
            }
            try{
                if (stmt != null){
                    stmt.close();
                }
            }catch(Exception e){
                e.printStackTrace();
            }
            try{
                if (con != null){
                    con.close();
                }
            }catch(Exception e){
                e.printStackTrace();
            }
        }
    }

}