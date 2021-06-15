export default function ColorAndSize({data}) {

    return(
        <div className="pro-details-size-color">
            <div className="pro-details-color-wrap">
                <span>Color</span>
                <div className="pro-details-color-content">
                    {/* 동적 할당 - 1 컬러당 여러 사이즈 */}
                    {
                        data.variation && data.variation.map((item, index) => (
                            <label key={index} className={"pro-details-color-content--single " + (item.color) } >
                                <input type="radio" name="product-color" value={item.color} checked="" />
                                <span className="checkmark"></span>
                            </label>
                        ))
                    }
                </div>
                
            </div>


            <div className="pro-details-size">
                <span>Size</span>
                <div className="pro-details-size-content">
                    <label className="pro-details-size-content--single">
                        <input type="radio" value="x" checked=""/>
                        <span className="size-name">x</span>
                    </label>
                </div>
            </div>


        </div>
    );
}