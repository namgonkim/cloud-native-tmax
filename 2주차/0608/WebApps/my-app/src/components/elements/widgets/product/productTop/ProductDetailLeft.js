import { useState } from "react";

export default function ProductDetailLeft({productData}) {

    const [imgData, setImgData] = useState(productData);
    
    return(
        <div className="col-lg-6 col-md-6">
            <div className="product-large-image-wrapper">
                <div className="swiper-container swiper-container-fade swiper-container-initialized swiper-container-horizontal">
                    <div className="swiper-wrapper" style={{transitionDuration: "0ms"}}>
                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{width: "570px", opacity: "1"}}>
                            <div className="react_lightgallery_item">
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" ><i className="fas fa-expand"></i></button>
                            </div>
                            <div className="single-image">
                                <img src={productData.image && productData.image[0]} className="img-fluid" alt=""/>
                            </div>
                        </div>
                    </div>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
            <div className="product-small-image-wrapper mt-15">
                <div className="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode">
                    <div className="swiper-wrapper">
                        
                        {
                            productData.image &&
                            productData.image.map((item, index) => (
                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{ width: "135px", marginRight: "10px"}}>
                                    <div className="single-image" key={index}>
                                        <img src={item} className="img-fluid" alt=""/>
                                    </div>
                                </div>
                            )).slice(0, productData.image.length -1)
                        }
                            

                    </div>
                    <button className="swiper-button-next ht-swiper-button-nav" tabIndex="0" aria-label="Next slide"><i className="fas fa-chevron-right"></i></button>
                    <button className="swiper-button-prev ht-swiper-button-nav" tabIndex="0" aria-label="Previous slide"><i className="fas fa-chevron-left"></i></button>
                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                </div>
            </div>
        </div>
    );
}