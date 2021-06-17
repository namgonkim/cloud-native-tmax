import React from 'react';
import { Link } from 'react-router-dom';

export default function BreadCrumb({productId, productName}) {
    return (
        <div className="breadcrumb-area pt-35 pb-35 bg-gray-3">
            <div className="container">
                <div className="breadcrumb-content text-center">
                    <span>
                        <span>
                            <Link to="/" aria-current="page" className="active">Home</Link>
                            <span>/</span>
                        </span>
                        <span>{productName}</span>
                    </span>
                </div>
            </div>
        </div>
    );
}