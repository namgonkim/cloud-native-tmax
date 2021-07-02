package memo;

public class MemoDTO {
    private int memonum;
    private String name;
    private String content;
    private String pass;

    public MemoDTO() {
        super();
    }

    public MemoDTO(int memonum, String name, String content, String pass) {
        super();
        this.memonum = memonum;
        this.name = name;
        this.content = content;
        this.pass = pass;
    }

    public String toString() {
        return "MemoDTO [Memonum=" + memonum + ", name=" + name + ", content=" + content + ", pass="
                + pass + "]";
    }

    public int getMemonum() {
        return memonum;
    }

    public void setMemonum(int memonum) {
        this.memonum = memonum;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

}

