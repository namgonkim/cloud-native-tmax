
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

export default function TestListView({data, setTestDatas}) {

    const [count, setCount] = useState(data.qty);

    const handleCountAdd = () => {
        setCount(count + 1);
    }

    const handleCountDec = () => {
        count > 1 ? setCount(count - 1) : alert("최소 수량은 1개 입니다.")
    }

    let process = require('../../../myProcess.json');

    const handleDelete = (id) => {

        fetch(`http://${process.IP}:${process.PORT}/test/${id}`, {
            method: "DELETE"
        }).then(
            alert("삭제 되었습니다!"),
            fetch(`http://${process.IP}:${process.PORT}/test`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setTestDatas(data);
                })
        )

    }

    return (
        <tr key={data.id}>
            <td className="product-name text-center">
                <Link to={`/productdetail/${data.id}`}>{data.name} : {data.id}</Link>
            </td>
            <td className="product-quantity">
                <div className="cart-plus-minus">
                    <button className="dec qtybutton" onClick={() => handleCountDec()}>-</button>
                    <input className="cart-plus-minus-box" type="text" readonly="" value={count} />
                    <button className="inc qtybutton" onClick={() => handleCountAdd()}>+</button>
                </div>
            </td>
            <td className="product-price-cart">
                <span className="amount old">{((data.price * count).toFixed(2) * ((100 + data.discount) / 100)).toFixed(2)}</span>
                <span className="amount">{(data.price * count).toFixed(2)}</span>
            </td>
            <td className="product-wishlist-cart"><Link to={`/productdetail/${data.id}`}>Select option</Link></td>
            <td className="product-remove"><button onClick={() => handleDelete(data.id)}><i className="fa fa-times"></i></button></td>
        </tr>
    );
}