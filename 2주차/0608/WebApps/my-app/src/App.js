import React from 'react';
import Header from './components/layout/Header';
import './assets/css/mystyle.css';
import Brand from './components/elements/widgets/brand/Brand';
import Deal from './components/pages/deal/Deal';
import Footer from './components/layout/Footer';
import Blog from './components/pages/blog/Blog';

function App() {

  // 화면에 출력되는 부분.
  return (
    <div id="wrap">
      <Header />
      <Brand />

      <Deal />
      <Blog />

      <Footer/>      
    </div>
  );
}
// App.js를 다른곳에서 import할 수 있도록 export했다.(모듈화)
export default App;
