import { Fragment } from "react";
import Rating from '../Rating';

export default function ProDetRgtTop({data}) {
    console.log(data.rating)
    return (
        <Fragment>
            <h2>{data.name}</h2>
            <div className="product-details-price">
                <span>{data.price}$</span>
            </div>
            <div className="pro-details-rating-wrap">
                {data.rating && data.rating > 0 ? 
                ( <Rating ratingValue={data.rating} /> ) : ('')
                }
                
            </div>
            <div className="pro-details-list">
                <p>{data.shortDescription}</p>
            </div>
        </Fragment>
    );
}