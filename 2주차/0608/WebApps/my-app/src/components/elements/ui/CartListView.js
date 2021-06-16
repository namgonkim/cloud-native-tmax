import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CartListView({data}) {

    const [count, setCount] = useState(data.qty);

    return (
        <tr>
            <td className="product-thumbnail">
                <Link to={`/productdetail/${data.id}`}><img className="img-fluid" src={data.image[0]} alt="" /></Link>
            </td>
            <td className="product-name">
                <Link to="/product/2">{data.name}</Link>
                <div className="cart-item-variation">
                    <span>Color: {data.color}</span>
                    <span>Size: {data.size}</span>
                </div>
            </td>
            <td className="product-price-cart">
                <span className="amount old">${data.price}</span>
                <span className="amount">${(data.price * ((100 - data.discount) / 100)).toFixed(2)}</span>
            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <button className="dec qtybutton">-</button>
                    <input className="cart-plus-minus-box" type="text" readOnly="" value={count} />
                    <button className="inc qtybutton">+</button>
                </div>
            </td>
            <td className="product-subtotal">${data.price * count}</td>
            <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
        </tr>

    );
}