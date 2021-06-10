import React from 'react';
import TabButton from '../../elements/ui/TabButton';
import Title from '../../elements/ui/Title';
import ProductView from '../../elements/widgets/product/ProductView';

export default function Deal() {
    return (
        <section id="deal">
            <div className="container">
                <Title name="DAILY DEALS!"/>
                <TabButton/>
                <ProductView/>
            </div>
        </section>
    );
}