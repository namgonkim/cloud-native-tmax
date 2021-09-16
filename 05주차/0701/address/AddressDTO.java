package address;

public class AddressDTO {
    private int addressnum;
    private String name;
    private String handphone;
    private String address;
    public AddressDTO() {
        super();
        // TODO Auto-generated constructor stub
    }

    public AddressDTO(int addressnum, String name, String handphone, String address) {
        super();
        this.addressnum = addressnum;
        this.name = name;
        this.handphone = handphone;
        this.address = address;
    }

    @Override
    public String toString() {
        return "AddressDTO [addressnum=" + addressnum + ", name=" + name + ", handphone=" + handphone + ", address="
                + address + "]";
    }

    public int getAddressnum() {
        return addressnum;
    }

    public void setAddressnum(int addressnum) {
        this.addressnum = addressnum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getHandphone() {
        return handphone;
    }

    public void setHandphone(String handphone) {
        this.handphone = handphone;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
}