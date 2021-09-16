import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../../layout/Header';
import BreadCrumb from '../../elements/ui/BreadCrumb';
import WishTable from '../../elements/widgets/wishtable/WishTable';
import Footer from '../../layout/Footer';

export default function WishList() {
    return (
        <Fragment>
            <Header />
            <BreadCrumb
                productName="WishList" />
            <WishTable/>
            <Footer />
        </Fragment>

    );
}