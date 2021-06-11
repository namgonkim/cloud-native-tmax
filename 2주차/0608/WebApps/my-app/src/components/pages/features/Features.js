import React from 'react';
import Footer from '../../layout/Footer';
import Nav from '../../elements/ui/Nav';
import Brand from '../../elements/widgets/brand/Brand';

export default function Features() {
    return (
        <div id="wrap">
            <div className="container-fluid" style={{padding: "0px"}}>
                <Nav/>
            </div>
            <Brand />
            <Footer/>      
        </div>
    );
}