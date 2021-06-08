import React, { useState } from 'react';

// 리스트 형식이 아닌 여러개의 데이터들을 받아올 수 있다.
export default function Subject(data, props, number) {

    const [good, setGood] = useState(0);

    const handlerClick = (e) => {
        setGood(good + 1);
    }

    return(
        <header>
            <h1>React App</h1>
            <h2>{props.name} <span onClick={handlerClick} value="1">좋아요</span>{good}</h2>
            <h2>{props.address}</h2>
            <p>Phone Number: {props.children}</p>

        </header>
    );
}