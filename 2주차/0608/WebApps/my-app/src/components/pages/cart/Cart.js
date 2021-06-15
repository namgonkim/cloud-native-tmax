import React, { Fragment, useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Headers from '../../layout/Header';
import BreadCrumb from '../../elements/ui/BreadCrumb';
import Footer from '../../layout/Footer';

export default function Cart() {
    return (
        <Fragment>
            <Headers />
            <BreadCrumb
                productName="Cart" />

            {/* <!-- 메인 컨텐츠 --> */}
            <div className="cart-main-area pt-90 pb-100">
                <div className="container">
                    <h3 className="cart-page-title">Your cart items</h3>
                    <div className="row">
                        <div className="col-12">
                            <div className="table-content table-responsive cart-table-content">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th>Product Name</th>
                                            <th>Unit Price</th>
                                            <th>Qty</th>
                                            <th>Subtotal</th>
                                            <th>action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="product-thumbnail">
                                                <a href="/product/2"><img className="img-fluid" src="assets/img/product/fashion/2.jpg" alt="" /></a>
                                            </td>
                                            <td className="product-name">
                                                <a href="/product/2">Lorem ipsum coat</a>
                                                <div className="cart-item-variation">
                                                    <span>Color: blue</span>
                                                    <span>Size: x</span>
                                                </div>
                                            </td>
                                            <td className="product-price-cart">
                                                <span className="amount old">$18.50</span>
                                                <span className="amount">$15.72</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="cart-plus-minus">
                                                    <button className="dec qtybutton">-</button>
                                                    <input className="cart-plus-minus-box" type="text" readOnly="" value="1" />
                                                    <button className="inc qtybutton">+</button>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">$15.72</td>
                                            <td className="product-remove"><button><i className="fa fa-times"></i></button></td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="/product/2"><img className="img-fluid" src="assets/img/product/fashion/2.jpg" alt="" /></a></td>
                                            <td className="product-name">
                                                <a href="/product/2">Lorem ipsum coat</a>
                                                <div className="cart-item-variation">
                                                    <span>Color: blue</span>
                                                    <span>Size: m</span>
                                                </div>
                                            </td>
                                            <td className="product-price-cart">
                                                <span className="amount old">$18.50</span>
                                                <span className="amount">$15.72</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="cart-plus-minus">
                                                    <button className="dec qtybutton">-</button>
                                                    <input className="cart-plus-minus-box" type="text" readonly="" value="2" />
                                                    <button className="inc qtybutton">+</button>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">$31.44</td>
                                            <td className="product-remove">
                                                <button><i className="fa fa-times"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="/product/3"><img className="img-fluid" src="assets/img/product/fashion/3.jpg" alt="" /></a></td>
                                            <td className="product-name">
                                                <a href="/product/3">Lorem ipsum jacket</a>
                                                <div className="cart-item-variation">
                                                    <span>Color: white</span>
                                                    <span>Size: x</span>
                                                </div>
                                            </td>
                                            <td className="product-price-cart">
                                                <span className="amount old">$17.45</span>
                                                <span className="amount">$10.47</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="cart-plus-minus">
                                                    <button className="dec qtybutton">-</button>
                                                    <input className="cart-plus-minus-box" type="text" readonly="" value="1" />
                                                    <button className="inc qtybutton">+</button>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">$10.47</td>
                                            <td className="product-remove">
                                                <button><i className="fa fa-times"></i></button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="product-thumbnail"><a href="/product/4"><img className="img-fluid" src="assets/img/product/fashion/4.jpg" alt="" /></a></td>
                                            <td className="product-name">
                                                <a href="/product/4">Lorem ipsum fashion coat</a>
                                                <div className="cart-item-variation">
                                                    <span>Color: blue</span>
                                                    <span>Size: x</span>
                                                </div>
                                            </td>
                                            <td className="product-price-cart">
                                                <span className="amount">$15.50</span>
                                            </td>
                                            <td className="product-quantity">
                                                <div className="cart-plus-minus">
                                                    <button className="dec qtybutton">-</button>
                                                    <input className="cart-plus-minus-box" type="text" readonly="" value="1" />
                                                    <button className="inc qtybutton">+</button>
                                                </div>
                                            </td>
                                            <td className="product-subtotal">$15.50</td>
                                            <td className="product-remove">
                                                <button><i className="fa fa-times"></i></button>
                                            </td>
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
                                <div className="cart-clear">
                                    <button>Clear Shopping Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="cart-tax">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gray">Estimate Shipping And Tax</h4>
                                </div>
                                <div className="tax-wrapper">
                                    <p>
                                        Enter your destination to get a shipping estimate.
                                    </p>
                                    <div className="tax-select-wrapper">
                                        <div className="tax-select">
                                            <label>* Country</label>
                                            <select className="email s-email s-wid">
                                                <option>Bangladesh</option>
                                                <option>Albania</option>
                                                <option>Åland Islands</option>
                                                <option>Afghanistan</option>
                                                <option>Belgium</option>
                                            </select>
                                        </div>
                                        <div className="tax-select">
                                            <label>* Region / State</label>
                                            <select className="email s-email s-wid">
                                                <option>Bangladesh</option>
                                                <option>Albania</option>
                                                <option>Åland Islands</option>
                                                <option>Afghanistan</option>
                                                <option>Belgium</option>
                                            </select>
                                        </div>
                                        <div className="tax-select">
                                            <label>* Zip/Postal Code</label>
                                            <input type="text" />
                                        </div>
                                        <button className="cart-btn-2" type="submit">Get A Quote</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="discount-code-wrapper">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gray">Use Coupon Code</h4>
                                </div>
                                <div className="discount-code">
                                    <p>Enter your coupon code if you have one.</p>
                                    <form>
                                        <input type="text" required="" name="name" />
                                        <button className="cart-btn-2" type="submit">Apply Coupon</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="grand-totall">
                                <div className="title-wrap">
                                    <h4 className="cart-bottom-title section-bg-gary-cart">Cart Total</h4>
                                </div>
                                <h5>Total products <span>$73.13</span></h5>
                                <h4 className="grand-totall-title">Grand Total <span>$73.13</span></h4>
                                <a href="/checkout">Proceed to Checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </Fragment>

    );
}