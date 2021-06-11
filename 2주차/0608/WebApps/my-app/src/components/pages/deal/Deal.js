import React, { useState } from 'react';
import TabMenu from '../../elements/ui/TabMenu';
import Title from '../../elements/ui/Title';
import ProductView from '../../elements/widgets/product/ProductView';

export default function Deal() {

    // 텝 메뉴별(카테고리별) product 리스트 뽑기
    const [ categoryName, setCategoryName ] = useState("fashion");
    console.log(categoryName);

    return (
        <section id="deal">
            <div className="container">
                <Title name="DAILY DEALS!"/>
                <p name={categoryName}></p>
                <TabMenu 
                setCategoryName={setCategoryName}
                categoryName={categoryName}/>
                <ProductView categoryName={categoryName}/>
            </div>
        </section>
    );
}