import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import blogData from '../../../../db/blog.json';

export default function BlogView() {

    const [newData, setNewData] = useState(blogData);

    const blogDataList = newData.map(item => (
        // {/* <!-- blog item--> */}
        <div className="col-12 col-md-4 mb-4" key={item.id}>
            <Link to={`${item.url}/${item.id}`}>
                {/* <div className="blogImg" style={{backgroundImage:`url(${item.image})`, backgroundSize:"cover"}}></div> */}
                <div className="blogImgBox">
                    <img className="blogImg" src={item.image} alt=""/>
                </div>
            </Link>
            
                <div className="blogTxt">
                    <Link to={`/blogDetail/${item.id}`}>
                        <p className="blogTitle">{item.title}</p>
                    </Link>
                    <Link to={`${item.authorUrl}/${item.author}`}>
                        <p className="blogAuth">by {item.author}</p>
                    </Link>
                </div>
            
        </div>
        // {/* <!-- item end --> */}
    )).slice(0,3);

    return (
        <div className="row mt-5">
            {blogDataList}
        </div>
    );
}