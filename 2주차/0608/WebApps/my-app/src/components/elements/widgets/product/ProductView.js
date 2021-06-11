import React, { useState } from 'react';
import productData from '../../../../db/products.json';
import Rating from './Rating';

export default function ProductView({categoryName}) {
    
    const [newData, setNewData] = useState(productData);
    //console.log(newData);
    //console.log(categoryName);

    // 받아온 데이터를 필터링하는데 category가 배열로 되어있음.
    // 그래서 category의 배열 데이터를 가지고 한번더 필터링 해서 categoryName과 같은 것을 찾도록 한다.
    const searchData = categoryName ? 
                        newData.filter(
                            product => product.category.filter(single => single === categoryName)[0]
                        ) : newData;

    //console.log(searchData);

    const productList = searchData.map(item => (
            <div key={item.id} className="col-12 col-md-3 mb-4">
                <div className="productImg"></div>
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
    )).slice(0,20);

    return (
        <div className="row mt-5">
            {productList}
        </div>
    );
}