import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ProRating = ({ ratingValue }) => {
    let rating = []
    
    for(let i=0;i< 5;i++){
        rating.push(<i className="far fa-star" key={i}></i> );
    }
    if(ratingValue && ratingValue > 0) {
        for(let i=0;i<ratingValue-1;i++){
            rating[i] = <i className="fas fa-star" key={i}></i>; 
        }
    }
    return <Fragment>{rating}</Fragment>
};

ProRating.propTypes = {
    ratingValue : PropTypes.number
};

export default ProRating;