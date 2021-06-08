import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <img src={logo} alt="logo.svg" />
      <ul>
        {/* 데이터 형식으로 작성한다고 생각하자 */}
        <li style={{fontSize:"50px", color:"red"}}>HTML</li>
        <li style={{fontSize:"50px"}}>CSS3</li>
        <li style={{fontSize:"50px"}}>JavaScript</li>
        
      </ul>
    </div>
  );
}

export default App;
