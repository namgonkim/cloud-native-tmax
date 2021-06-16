import { Fragment, useState } from "react";
import ColorAndSize from './ColorAndSize';
import AddBuyAndCart from './AddBuyAndCart';

export default function ProDetRgtMiddle({data}) {

    const [setColor, newSetColor] = useState('');
    const [setSize, newSetSize] = useState('');
    
    return (
        <Fragment>
            <ColorAndSize 
                data = {data}
                setColor = {newSetColor}
                setSize = {newSetSize} />
            <AddBuyAndCart
                data = {data}
                setColor = {setColor}
                setSize = {setSize} />
        </Fragment>
    
    );
}