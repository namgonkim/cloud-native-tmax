import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Headers from '../../layout/Header';
import BreadCrumb from '../../elements/ui/BreadCrumb';
import ProductTop from '../../elements/widgets/product/productTop/ProductTop';
import Footer from '../../layout/Footer';


export default function ProductDetail() {

    let process = require('../../../db/myProcess.json');

    // 파라미터를 가져온다. 주소를 보낼때 사용했던 파라미터와 동일해야 한다.
    const { id } = useParams();
    
    // 데이터를 담을 자리
    const [productData, setProductData] = useState([]);
    // 데이터 get
    useEffect(() => {
        fetch(`http://${process.IP}:${process.Port}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProductData(data);
        });
    },[id]);

    console.log(productData);

    return (
        <Fragment>
            <Headers/>

            <BreadCrumb 
                productId = {productData.id}
                productName = {productData.name}
                productUrl = {`/productdetail/${productData.id}`}
            />

            <ProductTop 
                productData = {productData}
            />
            {/* <ProductBottom /> */}

            <Footer/>      
        </Fragment>
    );
}