import './App.css';
import {useState} from "react";
import {Button, Grid} from "@mui/material";

function App() {
    // Stryker disable next-line all
    const mainContainerStyles = {minWidth: '100vw', minHeight: '100vh' };
    // Stryker disable next-line all
    const numberStyles = {margin: 'auto', textAlign: 'center', verticalAlign: 'middle', fontSize: '16em', minHeight: '90vh' };
    // Stryker disable next-line all
    const buttonStyles = {textAlign: 'center'};
    const [time, setTime] = useState(0);
    const [controlsEnabled, setControlsEnabled] = useState(true);

    const addTime = () => setTime(time+1)
    const substractTime = () => {
        if (time > 0) setTime(time-1);
    }
    const start = () => {
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

  return (
    <>
        <Grid container style={mainContainerStyles}>
            <Grid xs={12} style={numberStyles}>
                <p>{time}</p>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button disabled={!controlsEnabled} onClick={substractTime}>-</Button>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button disabled={!controlsEnabled} onClick={start}>start</Button>
            </Grid>
            <Grid xs={4} style={buttonStyles}>
                <Button disabled={!controlsEnabled} onClick={addTime}>+</Button>
            </Grid>
        </Grid>
    </>
  );
}

export default App;
