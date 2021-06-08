import React, { useState, Fragment } from 'react';

function Navigation() {
    
    let [urlName, setUrlName] = useState(['https://www.naver.com', 'https://google.com']);
    const [count, setCount] = React.useState('');

    const handlerClick = (event) => {
        console.log(event.target.value);
        setCount(count + 1);
    }

      return(
        // 되도록이면 fragment를 사용해 감싸주도록 한다.
        <Fragment>
            <nav>
                <ul>
                    <li>{count}</li>
                    <li><a href="#" onClick={handlerClick}>HTML</a></li>
                    <li><a href={urlName[1]}>CSS</a></li>
                    <li><a href="3.html">JavaScript</a></li>
                </ul>
            </nav>
            <p> </p>
        </Fragment>
      );

  }

export default Navigation;