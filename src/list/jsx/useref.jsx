import { useRef } from "react";

const Getdom = ( ) => {
    const mydom = useRef(null);
    const handleClick = () => {
        mydom.current.style.color = "red";
    }
    return (
        <div>
            <h1 ref={mydom} onClick={handleClick}>Hello</h1>
        </div>
    )
}
export default Getdom;
