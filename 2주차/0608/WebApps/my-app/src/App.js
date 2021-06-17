  
import React from 'react'; 
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/pages/home/Home';
import ProductDetail from './components/pages/productDetail/ProductDetail';
import Features from './components/pages/features/Features';
import WishList from './components/pages/wishlist/WishList';
import Cart from './components/pages/cart/Cart';
import Compare from './components/pages/compare/Compare';
import ProductList from './components/pages/productlist/ProductList';
import "./assets/css/mystyle.css";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";
import ToTop from "./util/ToTop";

 
function App() {

  return (
    <BrowserRouter>
      <ToTop>
      <Switch>
        
        <Route exact path="/"><Home/></Route>
        <Route exact path="/compare"><Compare/></Route>
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/wishlist"><WishList/></Route>
        <Route exact path="/features"><Features/></Route>
        <Route exact path="/productdetail/:id"><ProductDetail/></Route>
        <Route exact path="/productlist"><ProductList/></Route>
        
        
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;