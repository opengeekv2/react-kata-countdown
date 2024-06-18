import './App.css';
import {useState} from "react";
import {Button, Grid} from "@mui/material";

function App() {
    const mainContainerStyles = {minWidth: '100vw', minHeight: '100vh' };
    const numberStyles = {margin: 'auto', textAlign: 'center', verticalAlign: 'middle', fontSize: '16em', minHeight: '90vh' };
    const buttonStyles = {textAlign: 'center'};
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
        <Grid container style={mainContainerStyles}>
            <Grid xs={12} style={numberStyles}>
                <p>{time}</p>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button onClick={substractTime}>-</Button>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button disabled={!startEnabled} onClick={start}>start</Button>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button onClick={addTime}>+</Button>
            </Grid>
        </Grid>
    </>
  );
}

export default App;
