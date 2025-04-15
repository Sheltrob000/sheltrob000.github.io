import {useState} from "react";

const ClickCounter = () => {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }
    return(
        <>
            <button onClick={handleClick}>button yay</button>
            <p>the count id {count}</p>

        </>
    )

};

export default ClickCounter;