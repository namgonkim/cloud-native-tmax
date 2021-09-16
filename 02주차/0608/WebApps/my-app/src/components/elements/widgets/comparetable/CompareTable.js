import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from '../product/Rating';

export default function CompareTable() {

    const [compareDatas, setCompareDatas] = useState([]);

    let process = require('../../../../db/myProcess.json');

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/compare`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setCompareDatas(data);
        });
    },[process.IP, process.PORT]);

    const handleDelete = (id) => {
        fetch(`http://${process.IP}:${process.PORT}/compare/${id}`, {
            method: "DELETE"
        }).then (
            alert("삭제되었습니다."),
            fetch(`http://${process.IP}:${process.PORT}/compare`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setCompareDatas(data);
            })
        )
    }

    const CompareTableInfoList = compareDatas.map((item, index) => (
        <td className="product-image-title" key={index}>
            <div className="compare-remove">
                <button value={item.id} onClick={() => handleDelete(item.id)}><i className="las la-trash"></i></button>
            </div>

            <Link className="image" to={`/productdetail/${item.id}`}><img className="img-fluid" src="assets/img/product/fashion/2.jpg" alt="" /></Link>
            <div className="product-title">
                <Link to={`/productdetail/${item.id}`}>{item.name}</Link>
            </div>
            <div className="compare-btn">
                <Link to={`/productdetail/${item.id}`}>Select Option</Link>
            </div>
        </td>
    ))

    const CompareTablePriceList = compareDatas.map((item, index) => (
        <td className="product-price" key={index}>
            <span className="amount old">${item.price}</span>
            <span className="amount">${(item.price * ((100 - item.discount) / 100)).toFixed(2)}</span>
        </td>
    ))

    const CompareTableDescList = compareDatas.map((item, index) => (
        <td className="product-desc" key={index}>
            <p>{item.shortDescription}</p>
        </td>
    ))

    const CompareTableRatingList = compareDatas.map((item, index) => (
        <td className="product-rating" key={index}>
            {item.rating && item.rating > 0 ? (
                <Rating ratingValue={item.rating} />
            ) : (
                ""
            )}
        </td>
    ))

    return (

        // {/* <!-- 메인 컨텐츠 --> */}
        <div className="compare-main-area pt-90 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="compare-page-content">
                            <div className="compare-table table-responsive">
                                <table className="table table-bordered mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="title-column">Product Info</th>
                                            
                                            { CompareTableInfoList}
                                        </tr>
                                        <tr>
                                            <th className="title-column">Price</th>
                                            
                                            {CompareTablePriceList}
                                        </tr>
                                        <tr>
                                            <th className="title-column">Description</th>
                                            {CompareTableDescList}
        
                                        </tr>
                                        <tr>
                                            <th className="title-column">Rating</th>
                                            {CompareTableRatingList}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}