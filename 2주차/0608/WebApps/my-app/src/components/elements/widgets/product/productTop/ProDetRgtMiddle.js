import { Fragment } from "react";
import ColorAndSize from './ColorAndSize';
import AddBuyAndCart from './AddBuyAndCart';

export default function ProDetRgtMiddle({data}) {
    return (
        <Fragment>
            <ColorAndSize 
                data = {data}/>
            <AddBuyAndCart />
        </Fragment>
    
    );
}