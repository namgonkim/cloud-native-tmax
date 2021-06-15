import ProductDetailLeft from './ProductDetailLeft';
import ProductDetailRight from './ProductDetailRight';

export default function ProductTop({productData}) {
    return (
        <div className="shop-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <ProductDetailLeft 
                        productData = {productData}/>
                    <ProductDetailRight 
                        productData = {productData}
                    />
                </div>
            </div>
        </div>

    );
}