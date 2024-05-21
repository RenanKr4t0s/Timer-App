import { useState } from "react";


function App() {
  let now = new Date().toLocaleTimeString();
  const [time, setTime]=useState(now);

  function updateTime(){
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  setInterval(updateTime,1000)

  return (
    <div className="container">
      <h2>{time}</h2>
      <button onClick={updateTime}>Atualizar</button>
    </div>
  );
}

export default App;
