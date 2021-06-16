import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AddBuyAndCart({ data, color, size }) {

    const [count, setCount] = useState(1);


    const handleCountAdd = () => {
        setCount(count + 1);
    }

    const handleCountMinus = () => {
        count > 0 ?
            setCount(count - 1) : alert("0");
    }

    let process = require('../../../../../db/myProcess.json');

    const { id } = useParams();

    const handleCartClick = (id) => {
        alert(id + "를 카트에 저장합니다.");
        alert(color);

        fetch(`http://${process.IP}:${process.PORT}/cart`, {
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
                color: color,
                size: "",
                qty: count
            }),
        })
            .then(
                alert("success")
            )
    }

    const handleWishClick = () => {
        alert(id + "를 위시리스트에 저장합니다.");
        fetch(`http://${process.IP}:${process.PORT}/wish/`,{
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
            })
        .then(
            alert("success")
        )
    }

    const handleCompareClick = () => {
        fetch(`http://${process.IP}:${process.PORT}/compare/`,{
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
                    rating: data.rating
                }),
            })
        .then(
            alert("success")
        )
    }

    return (
        <div className="pro-details-quality">
            <div className="cart-plus-minus">
                <button className="dec qtybutton" onClick={() => handleCountMinus()}>-</button>
                <input className="cart-plus-minus-box" type="text" value={count} />
                <button className="inc qtybutton" onClick={() => handleCountAdd()}>+</button>
            </div>
            <div className="pro-details-cart btn-hover">
                <button onClick={() => handleCartClick(id)}> Add To Cart </button>
            </div>

            <div className="pro-details-cart btn-hover ml-0">
                <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank">Buy Now</a>
            </div>

            <div className="pro-details-wishlist">
                <button className="" title="Add to wishlist" onClick={() => handleWishClick()}>
                    <i className="las la-bookmark"></i>
                </button>
            </div>
            <div className="pro-details-compare">
                <button className="" title="Add to compare" onClick={() => handleCompareClick()}>
                    <i className="las la-random"></i>
                </button>
            </div>
        </div>
    );
}