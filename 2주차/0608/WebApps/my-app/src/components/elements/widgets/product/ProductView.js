import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function ProductView({ categoryName }) {

    const [newData, setNewData] = useState([]);
    let process = require('../../../../db/myProcess.json');

    // useEffect()는 페이지가 랜더링되고 난 이후(페이지 로딩 끝) 어떤 동작이 발생하거나, 
    // 발생하지 않더라도 내장되어 있는 함수에 의해서 필요한 기능을 수행한다.
    useEffect(() => {
        // 1.호출: 해당 url에 있는 모든 값을 호출 
        fetch("http://localhost:3030/product")
            .then(res => {
                // 2.변경: 응답된 데이터(response)를 반환 [JSON 서버를 받기 위해 JSON 데이터 처리]
                return res.json();
            })
            .then(data => {
                // 3. 저장: 그리고 그 데이터를 newData로 저장
                setNewData(data);
            })
            // 데이터를 정상적으로 불러오지 못하면 error
            .catch(error => console.log(error));
        // []의 의미: 한번만 동작하겠다는 인배열
    }, []);

    // 받아온 데이터를 필터링하는데 category가 배열로 되어있음.
    // 그래서 category의 배열 데이터를 가지고 한번더 필터링 해서 categoryName과 같은 것을 찾도록 한다.
    const searchData = categoryName ?
        newData.filter(
            product => product.category.filter(single => single === categoryName)[0]
        ) : newData;


    const handleClick = (id) => {
        alert(id + "를 위시리스트에 저장합니다.");
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

    const handleCompareClick = (id) => {
        alert(id + "를 Compare에 저장합니다.");
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
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
        }).then(
            alert("success")
        )
    }

    const productList = searchData.map(item => (
        <div className="col-xl-3 col-md-6 col-lg-3 col-sm-6 " key={item.id}>
            <div className="product-wrap mb-25">
                <div className="product-img">
                    <Link to={`/productdetail/${item.id}`}>
                        <img className="default-img" src="assets/img/product/fashion/8.jpg" alt="" />
                        <img className="hover-img" src="/assets/img/product/fashion/6.jpg" alt="" />
                    </Link>
                    <div className="product-img-badges">
                        {/* 리액트 자바스크립트 구문 */}
                        {/* 디스카운트가 0보다 크면 입력 */}
                        {
                            item.discount > 0 ? (<span className="pink">-{item.discount}</span>) : ('')
                        }
                        {/* 신규 아이템이면 입력 */}
                        {
                            item.new ? (<span className="purple">new</span>) : ('')
                        }
                        {/* <span className="purple">new</span> */}
                    </div>
                    <div className="product-action">
                        <div className="pro-same-action pro-wishlist">
                            <button className="" title="Add to wishlist" onClick={() => handleClick(item.id)}><i className="las la-bookmark"></i></button>
                        </div>
                        <div className="pro-same-action pro-cart">
                            <button disabled="" className="active">Out of Stock</button>
                        </div>
                        <div className="pro-same-action pro-quickview">
                            <button title="Quick View" onClick={() => handleCompareClick(item.id)}><i className="las la-eye"></i></button>
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
                        <span>{(item.price * ((100 - item.discount) / 100)).toFixed(2)}</span>
                        <span className="old">{item.price}</span>
                    </div>
                </div>
            </div>
        </div>
    )).slice(0, 10);

    return (
        <div className="row mt-5">
            {productList}
        </div>
    );
}