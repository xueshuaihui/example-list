import { useEffect, useState } from "react";

const effect = () => {
    const [num, setnum] = useState(0);
    let timer: any;
    useEffect(() => {
        timer =  setInterval(() => {
            setnum(num+1);
        }, 1000)
    }, []);
    return (
        <div>
            <h1>{num}</h1>
        </div>
    )
}

export default effect;