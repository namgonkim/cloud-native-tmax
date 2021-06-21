import React, { useState, useEffect, useRef } from 'react';
import { shuffle } from 'lodash';

export default function Whykey() {

    const inputTxt = useRef(null);

    const [userList , setUserList] = useState([
        { id : 1, name: "빌게이츠" },
        { id : 2, name: "스티브잡스" },
        { id : 3, name: "홍길동" },
        { id : 4, name: "일런머스크" }
    ]);

    const putUserList = () => {
        setUserList([
            ...userList,
            { 
                id: userList.length + 1,
                name: inputTxt.current.value,
            }
            
        ])
    }

    useEffect(()=>{
        const id = setInterval(()=>{
            const newUserList = shuffle(userList);
            setUserList(newUserList);
        }, 1000);
        return () => {
            clearInterval(id);
        };
    },[]);

    return (
        <div className="container">
            {
                userList.map((item, index) => (
                    <input 
                        key={item.id}
                        type="text" 
                        placeholder={item.name} 
                        style={{ display:"block"}}
                    />
                ))
            }
            <input type="text" ref={inputTxt} />
            <button onClick={putUserList}>Submit</button>
        </div>
    );
}