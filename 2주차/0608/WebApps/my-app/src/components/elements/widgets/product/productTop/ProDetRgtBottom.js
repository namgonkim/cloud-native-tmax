import { Fragment, useState } from "react";
import { Link } from 'react-router-dom';

export default function ProDetRgtBottom({data}) {

    const setCategories = data.category ?
                            data.category.map((item,index) => (
                            <li key={index}><Link to="/shop-grid-standard">{item}</Link></li>
                            )) : <li>No Category</li> ;

    console.log(setCategories)

    const setTags = data.tag ?
                        data.tag.map((item, index) => (
                            <li key={index}><Link to="/shop-grid-standard">{item}</Link></li>
                        )) : <li>No Tag</li>


    return(
        <Fragment>
            <div className="pro-details-meta">
                <span>Categories :</span>
                <ul>
                    {
                        setCategories
                    }
                </ul>
            </div>
            <div className="pro-details-meta">
                <span>Tags :</span>
                <ul>
                    {
                        setTags
                    }
                </ul>
            </div>
            <div className="pro-details-social">
                <ul>
                    <li><a href="//facebook.com"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="//naver.com"><i className="fab fa-line"></i></a></li>
                    <li><a href="//twitter.com"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
        </Fragment>
    );
}