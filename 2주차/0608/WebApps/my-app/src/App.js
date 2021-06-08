import React from 'react';
import Subject from './components/Subject';
import Navigation from './components/Navigation';
import Content from './components/Content';
import './App.css';

function App() {

  // 화면에 출력되는 부분.
  return (
    <div style={{margin: "20px"}}>
     {/* 컴포넌트는 다음과 같이 가져와야 한다. */}
      <Subject
        name="NamgonKim"
        address="Korea, Seoul"
      >
        010-XXXX-XXXX
      </Subject>
      <Navigation />
      <Content></Content>

    </div>
  );
}
// App.js를 다른곳에서 import할 수 있도록 export했다.(모듈화)
export default App;
