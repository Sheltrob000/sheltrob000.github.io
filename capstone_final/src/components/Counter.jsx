import {useState} from "react";

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return(
        <>
            <button onClick={handleClick} className={"counter"}>show excitment</button>
            <p>you are {count}x excited</p>
            <p>yes this value represents nothing</p>
            <p>but its fun though</p>

        </>
    )

};

export default ClickCounter;