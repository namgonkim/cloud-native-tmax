import React, { useState, Fragment } from 'react';

function Navigation() {
    
    const [urlName, setUrlName] = useState([
        '네이버',
        '다음',
        '페이스북',
        '인스타그램',
        '카카오톡',
        '라인'
    ]);

      return(
        // 되도록이면 fragment를 사용해 감싸주도록 한다.
        <Fragment>
            <nav>
                <ul>
                    {
                        urlName.map((item, index) => {
                            return(
                                <li key={index}>{item}</li>
                            );
                        })
                    }
                </ul>
            </nav>
        </Fragment>
      );

  }

export default Navigation;