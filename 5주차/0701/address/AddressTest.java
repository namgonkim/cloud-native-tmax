package address;

public class AddressTest {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        AddressDAO dao = new AddressDAO();

        create(dao);
    }

    private static void create(AddressDAO dao) {
        AddressDTO dto = new AddressDTO();
        dto.setName("김길동");
        dto.setHandphone("010-1234-5556");
        dto.setAddress("경기도 화성시");

        if (dao.create(dto )) {
            p("성공");
        } else {
            p("실패");
        }
    }

    private static void p(String string) {
        System.out.println(string);
    }

}