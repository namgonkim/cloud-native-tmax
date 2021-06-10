import React from 'react';
import Category from '../../../db/nav.json';

export default function TabMenu({setCategoryName}) {

    const handleClick = (e) => {
        console.log(e.target.value);
        // 카테고리 명에 따라 실행하겠다
        setCategoryName(e.target.value);

    }
    
    return (
        <div className="row mb-5">
            <ul className="col-12 col-md-6 offset-md-3 nav justify-content-center">
                {
                    Category.category.map(item => (
                        <button className="btn btn-primary" key={item.id} value={item.name} onClick={handleClick}>{item.name}</button>
                    ))
                }
            </ul>
        </div>
    );
}