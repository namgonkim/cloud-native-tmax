import React, { useState } from 'react';
import FooterLogo from '../elements/ui/footer/FooterLogo';
import FooterMenuData from '../../db/footermenu.json';
import Subscribe from '../elements/ui/footer/Subscribe';
import FooterMenu from '../elements/ui/footer/FooterMenu';

export default function Footer() {

    const [newFooterMenu, setNewFooterMenu] = useState(FooterMenuData);

    return (
        <footer>
            <div className="container-fluid" style={{padding: "0"}}>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <FooterLogo/>
                            <FooterMenu
                                footerMenuList={newFooterMenu['ABOUT US']}
                                footerTitle = "ABOUT US" />
                            <FooterMenu
                                footerMenuList={newFooterMenu['USEFUL LINKS']}
                                footerTitle = "USEFUL LINKS" />
                            <FooterMenu
                                footerMenuList={newFooterMenu['FOLLOW US']}
                                footerTitle = "FOLLOW US" />
                            <Subscribe />
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}