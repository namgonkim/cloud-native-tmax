import { useState, useEffect } from 'react';

export default function Brand() {

    const [brandData, setBrandData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3030/brand")
        .then(res => {
            return res.json();
        })
        .then(data => {
            setBrandData(data);
        })
    },[]);

    const brandDataList = brandData.map(item => (
            // {/* <!-- 요소 --> */}
            <div className="col-12 col-md-3" key={item.id}>
                <div className="row">
                    <div className="col-12 col-sm-4 brandImg">
                        <i className={item.img}></i>
                    </div>
                    <div className="col-12 col-sm-8">
                        <p className="brandTitle">{item.name}</p>
                        <p className="brandTxt">{item.content}</p>
                    </div>
                </div>
            </div>
            // {/* <!-- 요소 끝--> */}
    )).slice(0,4);

    return (
        <>
        {/* <!-- 콘텐츠 --> */}
        <section id="brand">
            <div className="container">
                <div className="row">

                    {brandDataList}                   
                   
                </div> 
                {/* <!-- row end --> */}
            </div>
            {/* <!-- container end --> */}
        </section>
        {/* <!-- #brand end --> */}
        </>
    );
}