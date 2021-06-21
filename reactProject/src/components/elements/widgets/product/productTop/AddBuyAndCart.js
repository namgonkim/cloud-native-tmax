import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

export default function AddBuyAndCart({data, color, size}) {

    let process = require('../../../../../myProcess.json');

    const [count, setCount] = useState(1);
    const [sideMenuCartDatas, setSideMenuCartDatas] = useState([]);

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/sidemenu/5`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setSideMenuCartDatas(data);
            console.log(data);
        });
    },[process.IP, process.PORT]);

    const handleCountAdd = () => {
        setCount(count+1);
    }

    const handleCountDec = () => {
        count > 1 ? setCount(count-1) : alert("최소 수량은 1개 입니다.")
    }


    const handlePutCompareList = () => {

        fetch(`http://${process.IP}:${process.PORT}/compare`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                image: data.image,
                price: data.price,
                discount: data.discount,
                shortDescription: data.shortDescription,
                rating : data.rating,
            }),
        }).
        then(
            alert("success")
        )

    }

    const handlePutWishList = () => {

        fetch(`http://${process.IP}:${process.PORT}/wish`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                image: data.image,
                price: data.price,
                discount: data.discount
            }),
        }).
        then(
            alert("success")
        )

    }


    const handlePutCartList = () => {

        fetch(`http://${process.IP}:${process.PORT}/cart`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: data.id,
                name: data.name,
                image: data.image,
                price: data.price,
                discount: data.discount,
                qty : count,
                color: color,
                size: size
            }),
        }).
        then(
            alert("success"),
            fetch(`http://${process.IP}:${process.PORT}/sidemenu/5`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: sideMenuCartDatas.id,
                    name: sideMenuCartDatas.name,
                    url: sideMenuCartDatas.url,
                    count: sideMenuCartDatas.count+1
                }),
            })
            
        )

    }

    
    return(
        <div className="pro-details-quality">
            <div className="cart-plus-minus">
                <button className="dec qtybutton" onClick={()=>handleCountDec()}>-</button>
                <input className="cart-plus-minus-box" type="text" readonly="" value={count}/>
                <button className="inc qtybutton" onClick={()=>handleCountAdd()}>+</button>
            </div>
            <div className="pro-details-cart btn-hover">
                <button onClick={()=> handlePutCartList()}> Add To Cart </button>
            </div>
            
            <div className="pro-details-cart btn-hover ml-0"> 
                <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank">Buy Now</a>
            </div>
            
            <div className="pro-details-wishlist">
                <button className="" title="Add to wishlist" onClick={()=> handlePutWishList()}>
                    <i className="las la-bookmark"></i>
                </button>
            </div>
            <div className="pro-details-compare">
                <button className="" title="Add to compare" onClick={()=> handlePutCompareList()}>
                    <i className="las la-random"></i>
                </button>
            </div>
        </div>
    );
}