import React from 'react';
import productData from '../../../../db/products.json';
import Rating from './Rating';

export default function ProductView() {

    const productList = productData.map(item => (

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