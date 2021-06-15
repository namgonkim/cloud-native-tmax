export default function AddBuyAndCart() {
    
    return(
        <div className="pro-details-quality">
            <div className="cart-plus-minus">
                <button className="dec qtybutton">-</button>
                <input className="cart-plus-minus-box" type="text" readOnly="" value="1"/>
                <button className="inc qtybutton">+</button>
            </div>
            <div className="pro-details-cart btn-hover">
                <button> Add To Cart </button>
            </div>
            
            <div className="pro-details-cart btn-hover ml-0"> 
                <a href="//www.amazon.com" rel="noopener noreferrer" target="_blank">Buy Now</a>
            </div>
            
            <div className="pro-details-wishlist">
                <button className="" title="Add to wishlist">
                    <i className="las la-bookmark"></i>
                </button>
            </div>
            <div className="pro-details-compare">
                <button className="" title="Add to compare">
                    <i className="las la-random"></i>
                </button>
            </div>
        </div>
    );
}