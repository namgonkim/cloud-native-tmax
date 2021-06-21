import React from 'react'; 
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/pages/Home/Home';
import Cart from './components/pages/cart/Cart';
import Compare from './components/pages/compare/Compare';
import Wishlist from './components/pages/wishlist/Wishlist';
import ProductDetail from './components/pages/ProductDetail/ProductDetail';
import ProductList from './components/pages/productlist/ProductList';
import Features from './components/pages/Features/Features';
import MyAccount from './components/pages/myaccount/MyAccount';
import Test from './components/pages/Test/Test';
import ReduxSample from './components/pages/reduxsample/ReduxSample';
import "./assets/css/mystyle.css";
import "./assets/css/style.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap.css";
import "./assets/css/googlefont.css";
import "./assets/icons8/css/line-awesome.min.css";
import ToTop from "./utilities/ToTop";
import { Provider } from 'react-redux';
import store from './redux/store';

 
function App() {

  return (
    <BrowserRouter>
      <ToTop>
      <Switch>
        
        <Route exact path="/"><Home/></Route>
        <Route exact path="/compare"><Compare/></Route> 
        <Route exact path="/cart"><Cart/></Route>
        <Route exact path="/wishlist"><Wishlist/></Route>
        <Route exact path="/features"><Features/></Route>
        <Route exact path="/productdetail/:id"><ProductDetail/></Route>
        <Route exact path="/productlist"><ProductList/></Route>
        <Route exact path="/productlist"><ProductList/></Route>
        <Route exact path="/myaccount"><MyAccount/></Route>
        <Route exact path="/test"><Test/></Route>
        <Provider store={store}>
          <Route exact path="/reduxsample"><ReduxSample/></Route>
        </Provider>
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;
