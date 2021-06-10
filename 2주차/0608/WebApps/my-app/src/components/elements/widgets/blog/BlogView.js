import React from 'react';

export default function BlogView() {
    return (
        <div className="row mt-5">
            {/* <!-- blog item--> */}
            <div className="col-12 col-md-4 mb-4">
                <div className="blogImg"></div>
                <div className="blogTxt">
                    <p className="blogTitle">A guide to latest trends</p>
                    <p className="blogAuth">by admin</p>
                </div>
            </div>
            {/* <!-- item end --> */}
        </div>
    );
}