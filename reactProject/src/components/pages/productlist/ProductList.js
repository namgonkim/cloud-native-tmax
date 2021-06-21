import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import Bread from '../../elements/ui/Bread';
import SideBar from '../../elements/widgets/productlist/SideBar';
import Shop from '../../elements/widgets/productlist/Shop';

import React, {useState} from 'react';

export default function ProductList() {

    const [categoryName, setCategoryName] = useState("");

    return(
        <>
        <Header/>
        <Bread
            productName = "SHOP"
        />
        <div className="shop-area pt-95 pb-100">
            <div className="container">
                <div className="row">
                    <SideBar 
                        setCategoryName = {setCategoryName}
                    />
                    <Shop
                        categoryName = {categoryName}
                    />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
}