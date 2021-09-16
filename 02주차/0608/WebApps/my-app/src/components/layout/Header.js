import Nav from '../elements/ui/header/Nav';
import HeaderTop from '../elements/ui/header/HeaderTop';

export default function Header() {
    return (
        <header className="header-area clearfix">
            <HeaderTop />
            <Nav />
        </header>
    );
}