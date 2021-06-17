import { Fragment } from "react";
import Header from "../../layout/Header";
import BreadCrumb from "../../elements/ui/BreadCrumb";
import Footer from "../../layout/Footer";
import SideBar from "../../elements/widgets/productlist/SideBar";
import Shop from "../../elements/widgets/productlist/Shop";

export default function ProductList() {
    return(
        <Fragment>
        <Header/>
        <BreadCrumb
            productName = "SHOP"
        />
        <div class="shop-area pt-95 pb-100">
            <div class="container">
                <div class="row">
                    <SideBar />
                    <Shop />
                </div>
            </div>
        </div>

        <Footer/>
        </Fragment>
    );
}