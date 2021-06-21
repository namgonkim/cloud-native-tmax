import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Rating from '../../ui/Rating';

export default function ProductView({categoryName, sliceNumber, columNumber}){

    let process = require('../../../../myProcess.json');

    const [newData, setnewData] = useState([]);
    

    useEffect(() => {
        fetch(`http://${process.IP}:${process.PORT}/product/`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setnewData(data);
            console.log(data);
        })
        
    },[process.IP, process.PORT]);

    const searchData = categoryName
    ? newData.filter(
        item => item.category.filter(single => single === categoryName)[0]
      )
    : newData;

    const handleDelete = (id) => {
        fetch(`http://${process.IP}:${process.PORT}/wish/${id}`,{
            method: "DELETE"
        }).then(
            alert("삭제되었습니다.")
        )
    }

    const handlePutCompareList = (id) => {

        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
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
            })
        }).then(
            alert("success")
        )

    }

    const handlePutWishList = (id) => {
        
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
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
        }).then(
            alert("success")
        )
    }
    
    const productList = searchData.map((item, index) => (
        
        <div className={`col-xl-${columNumber} col-md-6 col-lg-${columNumber} col-sm-6`} key={item.id}>
        <div className="product-wrap mb-25">
            <div className="product-img">
                <Link to={`/productdetail/${item.id}`}>
                    <img className="default-img" src="assets/img/product/fashion/8.jpg" alt="" />
                    <img className="hover-img" src="/assets/img/product/fashion/6.jpg" alt="" />
                </Link>
                <div className="product-img-badges">
                    {
                        item.discount > 0 ? <span className="pink">{item.discount}%</span> : ''
                    }
                    {
                        item.new ? <span className="purple">new</span> : ''
                    }
                </div>
                <div className="product-action">
                    <div className="pro-same-action pro-wishlist">
                        <button
                            value={item.id}
                            onClick={() => handlePutWishList(item.id)}
                        >
                            <i className="las la-bookmark"></i>
                        </button>
                    </div>
                    <div className="pro-same-action pro-cart">
                        <button disabled="" className="active">Buy</button>
                    </div>
                    <div className="pro-same-action pro-quickview">
                        <button 
                            className="" 
                            title={item.id} 
                            onClick={() => handlePutCompareList(item.id)} 
                            value={item.id}
                        >
                            <i className="las la-eye"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="product-content text-center">
                <h3><Link to={`/productdetail/${item.id}`}>{item.name}</Link></h3>
                <div className="product-rating">
                    {item.rating && item.rating > 0 ? (
                        <Rating ratingValue={item.rating} />
                    ) : (
                    ""
                    )}
                </div>
                <div className="product-price">
                    <span>{item.price}</span> 
                    <span className="old">{(item.price * ((100+item.discount)/100)).toFixed(2)}</span>
                </div>
            </div>
        </div>
    </div>
        

    )).slice(0,sliceNumber);

    

    return(
        <div className="row mt-5">
            {productList}
        </div>
        
    );
}