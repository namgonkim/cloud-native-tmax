package utility;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBOpen {
    // 이 영역은 한번만 이루어진다.
    // 매번 DB 커넥션 객체를 생성할 때마다 드라이버 매니저를 만들어 줄 필요가 없음.
    static {
        try {
            Class.forName(Constant.DRIVER);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
    }

    public static Connection open() {
        Connection con = null;
        // 연결 객체 만들어서 connection에 담아주면 된다.
        try {
            con = DriverManager.getConnection(Constant.URL, Constant.USER, Constant.PASSWORD);
        } catch (SQLException e){
            e.printStackTrace();
        }
        return con;
    }
}
