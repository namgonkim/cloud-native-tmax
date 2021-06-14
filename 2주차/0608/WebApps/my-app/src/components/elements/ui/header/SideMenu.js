export default function SideMenu() {
    return (
        <div className="col-xl-2 col-lg-2 col-md-6 col-8">
            <div className="header-right-wrap ">
                <div className="same-style header-search d-none d-lg-block">
                    <button className="search-active"><i className="las la-search"></i></button>
                    <div className="search-content">
                        <form action="#">
                            <input type="text" placeholder="Search" />
                            <button className="button-search"><i className="las la-search"></i></button>
                        </form>
                    </div>
                </div>
                <div className="same-style account-setting d-none d-lg-block">
                    <button className="account-setting-active"><i className="las la-user-circle"></i></button>
                    <div className="account-dropdown">
                        <ul>
                            <li><a href="/login-register">Login</a></li>
                            <li><a href="/login-register">Register</a></li>
                            <li><a href="/my-account">my account</a></li>
                        </ul>
                    </div>
                </div>
                <div className="same-style header-compare">
                    <a href="/compare"><i className="las la-random"></i><span className="count-style">1</span></a>
                </div>
                <div className="same-style header-wishlist">
                    <a href="/wishlist"><i className="las la-bookmark"></i><span className="count-style">2</span></a>
                </div>
                <div className="same-style cart-wrap d-none d-lg-block">
                    <button className="icon-cart"><i className="las la-shopping-bag"></i><span className="count-style">0</span></button>
                    <div className="shopping-cart-content">
                        <p className="text-center">No items added to cart</p>
                    </div>
                </div>
                <div className="same-style cart-wrap d-block d-lg-none">
                    <a className="icon-cart" href="/cart"><i className="las la-shopping-bag"></i><span className="count-style">0</span></a>
                </div>
                <div className="same-style mobile-off-canvas d-block d-lg-none">
                    <button className="mobile-aside-button"><i className="las la-bars"></i></button>
                </div>
            </div>
        </div>
    );
}