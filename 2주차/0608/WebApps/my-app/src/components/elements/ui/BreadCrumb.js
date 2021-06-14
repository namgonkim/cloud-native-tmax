import React from 'react';

export default function BreadCrumb() {
    return (
        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <span>
                        <span><a aria-current="page" className="active" href="/">Home</a><span>/</span></span>
                        <span to="/product/9">Shop Product</span>
                    </span>
                </div>
            </div>
        </div>
    );
}