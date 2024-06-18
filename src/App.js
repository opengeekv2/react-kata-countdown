import './App.css';
import {useState} from "react";

function App() {
    const [time, setTime] = useState(0);
    const [startEnabled, setStartEnabled] = useState(true);

    const addTime = () => setTime(time+1)
    const substractTime = () => {
        if (time > 0) setTime(time-1);
    }

    const start = () => {
        setStartEnabled(false);
        const intervalId = setInterval(() => {
            setTime((time) => {
                if (time > 0) return time - 1;
                clearInterval(intervalId);
                setStartEnabled(true);
                return time;
            });
        }, 1000);
    }

  return (
    <>
        <section>
            {time}
        </section>
        <section>
            <button onClick={substractTime}>-</button>
            <button disabled={!startEnabled} onClick={start}>start</button>
            <button onClick={addTime}>+</button>
        </section>
    </>
  );
}

export default App;
