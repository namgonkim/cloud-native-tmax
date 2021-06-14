import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

export default function ProductView({categoryName}) {
    
    const [newData, setNewData] = useState([]);

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
    },[]);

    // 받아온 데이터를 필터링하는데 category가 배열로 되어있음.
    // 그래서 category의 배열 데이터를 가지고 한번더 필터링 해서 categoryName과 같은 것을 찾도록 한다.
    const searchData = categoryName ? 
                        newData.filter(
                            product => product.category.filter(single => single === categoryName)[0]
                        ) : newData;


    const productList = searchData.map(item => (
            <div key={item.id} className="col-12 col-md-3 mb-4">
                <Link to={`/productdetail/${item.id}`}><div className="productImg"></div></Link>
                <p className="productTitle">{item.name}</p>
                <p className="productScore">
                    {/* a 이면서 b일떄 ? true : false */}
                    {(item.rating && item.rating > 0) ? 
                        (
                            <Rating ratingValue={item.rating} />
                        ) : ("")
                    }
                </p>
                <p className="productPrice">${(item.price * (1 - item.discount/100)).toFixed(2)}<span id="pr">${item.price}</span> <span id="dis">{item.discount}%</span></p>
            </div>
    )).slice(0,10);

    return (
        <div className="row mt-5">
            {productList}
        </div>
    );
}