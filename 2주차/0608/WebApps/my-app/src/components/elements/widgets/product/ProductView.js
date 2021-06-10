import React from 'react';

export default function ProductView() {

    return (
        <div className="row mt-5">
            {/* <!-- product item--> */}
            <div className="col-12 col-md-3 mb-4">
                <div className="productImg"></div>
                <p className="productTitle">Lorem ipsum jacket</p>
                <p className="productScore"><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i><i className="far fa-star"></i></p>
                <p className="productPrice">$10.47<span>$17.45</span></p>
            </div>
        </div>
    );
}