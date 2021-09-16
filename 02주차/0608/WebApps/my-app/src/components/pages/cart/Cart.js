import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../../layout/Header';
import BreadCrumb from '../../elements/ui/BreadCrumb';
import CartTable from '../../elements/widgets/carttable/CartTable';
import Footer from '../../layout/Footer';

export default function Cart() {

    return(
        <Fragment>
            <Header />
            <BreadCrumb productName="Cart" />
            <CartTable />
            <Footer />
        </Fragment>
    );
}