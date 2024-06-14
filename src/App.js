import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import image from './image.png'
import Btn from "./components/Btn";
import ModeToggler from "./components/ModeToggler";

const Logo = () => <img alt="alt" src={image}></img>

function App() {
  return (
    <div>
        <Btn />
        <ModeToggler />
        <Logo />
        <Header name="Anna" color="purple" />
        <Main greet="Howdy" />
        <Sidebar greet="Howdy" />
    </div>
  );
}

export default App;
