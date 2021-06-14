import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {

    const [menuData, setMenuData] = useState([]);   // 메뉴 데이터 값 

    useEffect(() => {
        fetch("http://localhost:3030/menu")         // 호출
        .then(res => {
            return res.json();                      // json 변경
        })
        .then(data => {
            setMenuData(data);                      // 저장
        })

    },[]);

    const menuList = menuData.map(item => {
        // 하부 메뉴인 child가 없으면, 그냥 실행
        if (!item.children) {
            return (
                <li key={item.id} className="px-4">
                    <Link to={item.url}>{item.name}</Link>
                </li>
            );
        }
        // 하부 메뉴가 있으면, 하부 메뉴까지 호출 후 실행
        else {
            return (
                <li key={item.id} className="px-4">
                    <Link to={item.url}>{item.name}<i className="fa fa-angle-down"></i></Link>
                    <ul className="mega-menu">
                        <li>
                            <ul>
                                {
                                    item.children.map(subitem => (
                                        <li key={subitem.id}>
                                            <Link to={subitem.url}>{subitem.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </li>
            );
        }
    })

    return (
        <div className="col-xl-8 col-lg-8 d-none d-lg-block">
        <div className=" main-menu  ">
            <nav>
                <ul>
                    {menuList}
                </ul>
            </nav>
        </div>
    </div>
    );
}