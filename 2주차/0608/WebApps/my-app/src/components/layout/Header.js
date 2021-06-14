import Nav from '../elements/ui/header/Nav';
import Banner from '../elements/ui/Banner';
import HeaderTop from '../elements/ui/header/HeaderTop';

export default function Header() {
    return (
        <header className="header-area clearfix">
            <HeaderTop />
            <Nav />
            <Banner />
        </header>
    );
}