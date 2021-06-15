  
import React from 'react'; 
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './components/pages/home/Home';
import ProductDetail from './components/pages/productDetail/ProductDetail';
import Features from './components/pages/features/Features';
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
        <Route exact path="/features"><Features/></Route>
        <Route exact path="/productdetail/:id"><ProductDetail/></Route>
       
        
      </Switch>
      </ToTop>
    </BrowserRouter>
  );
}

export default App;