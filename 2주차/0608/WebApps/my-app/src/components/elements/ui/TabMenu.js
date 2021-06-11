import React, {useState} from 'react';
import Category from '../../../db/nav.json';

export default function TabMenu({categoryName, setCategoryName}) {

    // useState를 활용해 버튼이나 탭과 같은 메뉴의 클래스 속성을 바꿔준다.
    const [ select, setSelect ] = useState(true);
    const [ active, setActive ] = useState(false);

    const handleClick = (e) => {
        //console.log(e.target.value);
        // 카테고리 명에 따라 실행하겠다
        setCategoryName(e.target.value);
        // 해당되는 메뉴의 속성을 바꾼다.
        active ? setSelect(true) : setSelect(false);
    }
    
    return (
        <div className="row mb-5">
            <div className="col-12 col-md-6 offset-md-3 nav nav-tabs justify-content-center" id="nav-tab" role="tablist">
                {
                    Category.category.map(item => (
                        <button className ={active ? "nav-link active" : "nav-link"} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected={select} key={item.id} value={item.name} onClick={handleClick}>{item.name}</button>
                    ))
                }
            </div>
        </div>
    );
}