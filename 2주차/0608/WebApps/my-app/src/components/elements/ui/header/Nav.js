import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import Menu from './Menu';
import SideMenu from './SideMenu';
import MobileMenu from './MobileMenu';


export default function Nav() {

    const [scroll, setScroll] = useState(0);

    // 스크롤이 발생하면 해당 이벤트를 실행
    useEffect(() => {
        
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    // y축으로 스크롤하는 것을 인식하겠다.
    const handleScroll = () => {
        setScroll(window.scrollY);
    }

    return (
        <div className={
            scroll ? "header-padding-1 sticky-bar header-res-padding clearfix stick"
            : "header-padding-1 header-res-padding clearfix stick"
            }>
            <div className="container-fluid">
                <div className="row">
                    <Logo />
                    <Menu />
                    <SideMenu />
                </div>
            </div>
            <MobileMenu />
        </div>
    );
}