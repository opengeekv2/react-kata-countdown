import './App.css';
import {useState} from "react";

function App() {
    const [time, setTime] = useState(0);

    const addTime = () => setTime(time+1)
    const substractTime = () => {
        if (time > 0) setTime(time-1)
    }
  return (
    <>
        <section>
            {time}
        </section>
        <section>
            <button onClick={addTime}>+</button>
            <button onClick={substractTime}>-</button>
        </section>
    </>
  );
}

export default App;
