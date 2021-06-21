import React, {useState} from 'react';

export default function SideCategoryList({data, setCategoryName}) {

    const [chk, setChk] = useState(false)

    const handleCheck = (name) => {
        setChk(!chk)
        setCategoryName(name)
    }

    return(
        <li>
            <div className="sidebar-widget-list-left">
                <button onClick={()=>handleCheck(data.name)}><span className={chk ? "mark" : "checkmark"}></span>{data.name}</button>
            </div>
        </li>
    );
}