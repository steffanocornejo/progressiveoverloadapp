import './App.css';
import Countdown from "react-countdown";
function App() {
  return (
    <div className="center-screen">
      <p className="title"> Time Until Code for Change</p>
      <Countdown className="timer" date={'2024-02-15T09:00:00'}/>
    </div>
  );
}

export default App;
