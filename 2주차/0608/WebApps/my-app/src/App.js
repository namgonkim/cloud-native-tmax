import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Features from './components/pages/features/Features';
import './assets/css/mystyle.css';
// import './assets/css/layout.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/googlefont.css';
import './assets/icons8/css/line-awesome.min.css';

function App() {

  // 화면에 출력되는 부분.
  return (
    // 각각의 브라우저에서 여기 적힌 페이지로 분기를 하겠다.
    <BrowserRouter>
      <Switch>
        {/* path = 이동할 페이지를 설정한다 / 명확한 주소를 설정하려면 exact를 추가로 넣어준다 */}
        <Route exact path="/"><Home/></Route>
        <Route exact path="/features"><Features/></Route>
        <Route exact path="/productdetail/:id"></Route>
        <Route exact path="/pricing"></Route>
        <Route exact path="/faqs"></Route>
        <Route exact path="/about"></Route>
      </Switch>
    </BrowserRouter>
  );
}
// App.js를 다른곳에서 import할 수 있도록 export했다.(모듈화)
export default App;
