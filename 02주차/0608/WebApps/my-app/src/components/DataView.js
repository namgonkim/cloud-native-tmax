import React, { Fragment, useState } from "react";
import data from '../db/data.json';

export default function DataView() {
    
    console.log(data);
    const day = 1;
    const [newData, setNewData] = useState(data);
    const searchData = newData.words.filter( word => word.day === day);
    return (
        <Fragment>
            <ul>
                {
                    newData.days.map(item => (
                        <li key={item.id}>DAY : {item.day} / Id : {item.id}</li>
                    ))
                }
            </ul>

            <table>
                {
                    searchData.map(item => (
                        <tr key={item.id}>
                            <td>{item.eng}</td>
                            <td>{item.kor}</td>
                        </tr>
                    ))
                }
                
            </table>
        </Fragment>
    );
}