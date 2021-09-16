import React, { useState } from 'react';
import TabMenu from '../../elements/ui/TabMenu';
import Title from '../../elements/ui/Title';
import ProductView from '../../elements/widgets/product/ProductView';

export default function Deal(props) {

    // 텝 메뉴별(카테고리별) product 리스트 뽑기
    const [ categoryName, setCategoryName ] = useState("fashion");
    // console.log(categoryName);
    let sliceNumber = 12; // 슬라이스 개수
    let columNumber = 3; // 컬럼 개수

    return (
        <section id="deal">
            <div className="container">
                <Title name="DAILY DEALS!"/>
                <h5>{categoryName}</h5>
                <TabMenu 
                    setCategoryName={setCategoryName}
                    categoryName={categoryName}/>
                <ProductView 
                    categoryName={categoryName}
                    sliceNumber={sliceNumber}
                    columNumber={columNumber}/>
            </div>
        </section>
    );
}