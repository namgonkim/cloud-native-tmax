import Nav from '../elements/ui/Nav';
import Banner from '../elements/ui/Banner';

export default function Header() {
    return (
        <>
        <div className="container-fluid" style={{padding: "0px"}}>
            <Nav />
            <Banner />
        </div>
        </>
    );
}