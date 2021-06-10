import React, { useState } from 'react';
import menuData from '../../../db/nav.json';

export default function Icon() {

    const menuList = menuData.sidemenu.map(item => (
        <li key={item.id} className="nav-link px-2">
            <a href={item.url}>
            <i className={item.name}></i>
            </a>
        </li>
    ))

    return (
            <div className="col-md-2">
                <ul className="nav justify-content-end px-4">
                    {menuList}
                </ul>
            </div>
    );
}