import React, { useState } from 'react';

export default function FooterMenu({footerMenuList,footerTitle}) {

    const [newList, setNewList] = useState(footerMenuList);
    const menuList = newList.map(item => (
        <li key={item.id}><a href="none">{item.name}</a></li>
    ))

    return (
        <div className="col-12 col-md-2">
            <p className="menuTitle">{footerTitle}</p>
            <ul>
                {menuList}
            </ul>
        </div>
    );
}