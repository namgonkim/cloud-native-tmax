import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Headers from '../../layout/Header';
import BreadCrumb from '../../elements/ui/BreadCrumb';
import Deal from '../deal/Deal';
import Footer from '../../layout/Footer';


export default function ProductDetail() {

    // 파라미터를 가져온다. 주소를 보낼때 사용했던 파라미터와 동일해야 한다.
    const { p_id } = useParams();
    // 데이터를 담을 자리
    const [productData, setProductData] = useState([]);
    // 데이터 get
    useEffect(() => {
        fetch(`http://localhost:3030/product/${p_id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProductData(data);
        });
    },[p_id]);

    console.log(productData);

    return (
        <Fragment>
            <Headers/>

            <BreadCrumb />

            <ProductTop productImg={productData.productImg}/>
            <ProductBottom />

            <Footer/>      
        </Fragment>
    );
}