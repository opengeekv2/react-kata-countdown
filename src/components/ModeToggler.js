const ModeToggler = () => {
    let darkModeOn = false;
    const darkMode = <h1>Dark mode on</h1>;
    const lightMode = <h1>Light mode on</h1>

    const handleClick = () => {
        darkModeOn = !darkModeOn;
    }
    return (
        <div>
            { darkModeOn ? darkMode : lightMode }
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default ModeToggler;