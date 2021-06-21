import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import ProductTop from '../../elements/widgets/product/productTop/ProductTop'

export default function ProductDetail() {

    const { id } = useParams();
    const [ productData , setProductData ] = useState([]);

    let process = require('../../../myProcess.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setProductData(data);
            console.log(data);
        });
    },[process.IP, process.PORT, id]);

    return (
        <Fragment>
            <Header/>
            <Bread
                productId = {productData.id}
                productName = {productData.name}
                productUrl = {`/productdetail/${productData.id}`}
            />
            <ProductTop/>
            {/*<ProductBottom/>*/}
            <Footer/>
        </Fragment>
    );
}