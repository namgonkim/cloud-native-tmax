import React from 'react';
import AboutUs from '../elements/ui/footer/AboutUs';
import FollowUs from '../elements/ui/footer/FollowUs';
import FooterLogo from '../elements/ui/footer/FooterLogo';
import Subscribe from '../elements/ui/footer/Subscribe';
import UsefulLinks from '../elements/ui/footer/UsefulLinks';

export default function Footer() {
    return (
        <footer>
            <div className="container-fluid" style={{padding: "0"}}>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <FooterLogo/>
                            <AboutUs/>
                            <UsefulLinks/>
                            <FollowUs/>
                            <Subscribe/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
}