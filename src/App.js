import './App.css';
import {useState} from "react";
import {Button, Grid} from "@mui/material";

const addTime = (setTime) => {
    setTime((time) => time + 1);
}
const substractTime = (setTime) => {
    setTime((time) => {
        if (time > 0) return time - 1;
        return time;
    });
}

const startCountdown = (setTime, setControlsEnabled) => {
    setControlsEnabled(false);
    const intervalId = setInterval(() => {
        setTime((time) => {
            if (time > 0) return time - 1;
            clearInterval(intervalId);
            setControlsEnabled(true);
            return time;
        });
    }, 1000);
}

function App() {
    // Stryker disable next-line all
    const mainContainerStyles = {minWidth: '100vw', minHeight: '100vh' };
    // Stryker disable next-line all
    const numberStyles = {margin: 'auto', textAlign: 'center', verticalAlign: 'middle', fontSize: '16em', minHeight: '90vh' };
    // Stryker disable next-line all
    const buttonStyles = {textAlign: 'center'};
    const [time, setTime] = useState(0);
    const [controlsEnabled, setControlsEnabled] = useState(true);

    const addTimeHandler = () => addTime(setTime);
    const substractTimeHandler = () => substractTime(setTime);
    const startHandler = () => startCountdown(setTime, setControlsEnabled);

  return (
    <>
        <Grid container style={mainContainerStyles}>
            <Grid xs={12} style={numberStyles}>
                <p>{time}</p>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button disabled={!controlsEnabled} onClick={substractTimeHandler}>-</Button>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button disabled={!controlsEnabled} onClick={startHandler}>start</Button>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button disabled={!controlsEnabled} onClick={addTimeHandler}>+</Button>
            </Grid>
        </Grid>
    </>
  );
}

export default App;
