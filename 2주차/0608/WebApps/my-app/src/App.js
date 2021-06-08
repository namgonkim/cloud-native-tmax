import './App.css';
// import logo from './logo.svg';
import React, { Component } from 'react';

// 기본 형태는 알고 있어야 한다.
class Subject extends Component {
  render() {
    return(
      <header>
          <h1>React App</h1>
      </header>
    );
  }
}

class Navigation extends Component {
  render() {
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Article extends Component {
  render() {
    return(
      <article>
        <h2>HTML?</h2>
        <p>HTML이 가장 시웠어요. 리액트 써보시면 좋아요</p>
      </article>
    );
  }
}

function App() {

  // 화면에 출력되는 부분.
  return (
    <div>
     {/* 컴포넌트는 다음과 같이 가져와야 한다. */}
      <Subject></Subject>
      <Navigation></Navigation>
      <Article></Article>
    </div>
  );
}
// App.js를 다른곳에서 import할 수 있도록 export했다.(모듈화)
export default App;
