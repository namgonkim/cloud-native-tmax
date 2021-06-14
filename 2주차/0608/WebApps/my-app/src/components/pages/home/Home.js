import React, {Fragment} from 'react';
import Headers from '../../layout/Header';
import Banner from '../../elements/ui/Banner';
import Footer from '../../layout/Footer';
import Brand from '../../elements/widgets/brand/Brand';
import Deal from '../deal/Deal';
import Blog from '../blog/Blog';

export default function Home() {
    return (
        <Fragment>
            <Headers/>
            <Banner />
            <Brand />
            <Deal />
            <Blog />
            <Footer/>      
        </Fragment>
    );
}