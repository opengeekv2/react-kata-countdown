const Btn = () => {
    const clickHandler = () => console.log("clicked");
    return <button onMouseOver={clickHandler}>Click me</button>
}

export default Btn;