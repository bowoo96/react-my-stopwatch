import React, { useState } from 'react';
import Control from "./components/Control";
import TimeContent from "./components/TimeContent";


function App() {
  // conrtol에서 받아온 milisecond 증가 값을 state에 넣어줌
  const [timeData, setTimeData] = useState("");

  // conrtol에서 받아온 milisecond 증가 값
  const timer = (data) => {
    setTimeData(data);
  }

  return (
    <div className="App">
      <TimeContent enteredTime={timeData}/>
      <Control enteredTimer={timer} />
    </div>
  );
}

export default App;
