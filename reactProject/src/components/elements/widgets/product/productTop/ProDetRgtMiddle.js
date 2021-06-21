import { Fragment, useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import ColorAndSize from './ColorAndSize';
import AddBuyAndCart from './AddBuyAndCart';

export default function ProDetRgtMiddle() {

    const { id } = useParams();

    const [ varData, setVardata ] = useState([]);
    const [ color, setColor ] = useState("");
    const [ size, setSize] = useState("");

    var process = require('../../../../../myProcess.json');

    useEffect(()=>{
        fetch(`http://${process.IP}:${process.PORT}/product/${id}`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            setVardata(data);
            console.log(data.variation);
        });
    },[process.IP, process.PORT, id]);
    
    return (
        <Fragment>
            <ColorAndSize 
                vData = {varData.variation}
                setColor = {setColor}
                setSize = {setSize}
            />
            <AddBuyAndCart 
                data = {varData}
                color = {color}
                size = {size}
            /> 
        </Fragment>
    
    );
}