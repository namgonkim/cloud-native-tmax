import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Headers from '../../layout/Header';
import BreadCrumb from '../../elements/ui/BreadCrumb';

import Footer from '../../layout/Footer';

export default function WishList() {
    return (
        <Fragment>
            <Headers />
            <BreadCrumb
                productName="WishList" />

            {/* <!-- 메인 컨텐츠 --> */}
            <div className="cart-main-area pt-90 pb-100">
                <div className="container">
                    <h3 className="cart-page-title">Your wishlist items</h3>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-content table-responsive cart-table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th>Add To Cart</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-thumbnail"><a href="/product/2"><img className="img-fluid" src="assets/img/product/fashion/2.jpg" alt="" /></a></td>
                                            <td className="product-name text-center"><a href="/product/2">Lorem ipsum coat</a></td>
                                            <td className="product-price-cart"><span className="amount old">$18.50</span><span className="amount">$15.72</span></td>
                                            <td className="product-wishlist-cart"><a href="/product/2">Select option</a></td>
                                            <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="/product/3"><img className="img-fluid" src="assets/img/product/fashion/3.jpg" alt="" /></a></td>
                                            <td className="product-name text-center"><a href="/product/3">Lorem ipsum jacket</a></td>
                                            <td className="product-price-cart"><span className="amount old">$17.45</span><span className="amount">$10.47</span></td>
                                            <td className="product-wishlist-cart"><a href="/product/3">Select option</a></td>
                                            <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="/product/4"><img className="img-fluid" src="assets/img/product/fashion/4.jpg" alt="" /></a></td>
                                            <td className="product-name text-center"><a href="/product/4">Lorem ipsum fashion coat</a></td>
                                            <td className="product-price-cart"><span className="amount">$15.50</span></td>
                                            <td className="product-wishlist-cart"><a href="/product/4">Select option</a></td>
                                            <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cart-shiping-update-wrapper">
                                <div className="cart-shiping-update">
                                    <a href="/shop-grid-standard">Continue Shopping</a>
                                </div>
                                <div className="cart-clear"><button>Clear Wishlist</button></div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <Footer />
        </Fragment>

    );
}