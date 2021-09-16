package memo;

import java.util.List;

public class MemoTest {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        MemoDAO dao = new MemoDAO();

        create(dao);
        read(dao);
        update(dao);
        delete(dao);
    }

    private static void create(MemoDAO dao) {
        MemoDTO dto = new MemoDTO();
        dto.setMemonum(3);
        dto.setName("개발자");
        dto.setContent("금요일!");
        dto.setPass("1234");

        if (dao.create(dto)) {
            p("성공");
        } else {
            p("실패");
        }
    }

    private static void read(MemoDAO dao) {
        MemoDTO dto = new MemoDTO();
        int num = 2;
        dto = dao.read(num);
        if(dto != null) p("성공");
        else p("실패");
    }

    private static void update(MemoDAO dao) {
        MemoDTO dto = new MemoDTO();
        dto.setMemonum(3);
        dto.setName("백수");
        dto.setContent("ㅠㅠㅠㅠ");
        dto.setPass("12345");

        boolean flag = dao.update(dto);
        if(flag == true)  p("성공");
        else p("실패");
    }

    private static void delete(MemoDAO dao) {
        int num = 2;
        dao.delete(num);
    }

    private static void list(MemoDAO dao) {
        List<MemoDTO> list = dao.list();
        for(MemoDTO item : list){
            p(item.toString());
        }
    }

    private static void p(String string) {
        System.out.println(string);
    }
}