import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Headers from '../../layout/Header';
import BreadCrumb from '../../elements/ui/BreadCrumb';
import CompareTable from '../../elements/widgets/comparetable/CompareTable';
import Footer from '../../layout/Footer';

export default function Compare() {
    return (
        <Fragment>
            <Headers />
            <BreadCrumb
                productName="Compare" />
            <CompareTable/>
            <Footer />
        </Fragment>
    );
}