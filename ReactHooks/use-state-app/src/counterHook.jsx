import {useState} from "react";

function CounterHook () {
    const initial = 0;
    const [count, setCount] = useState(initial);
    const [color, setColor] = useState("Blue")

    const increment5 = () => {
        for (let i = 0;i < 5; i++){
            setCount(prevCount => prevCount + i);
        }
    }

    return(
        <>
            <button onClick={() => setCount(prevCount =>prevCount + 1)}>Press: {count}</button>
            <button onClick={() => setCount(prevCount => prevCount -1)}>Press: {count}</button>
            <button onClick={() => setCount(initial)}>reset</button>
            <div className="card">
                <button onClick={() => setColor("red")}>Color:{color}</button>
            </div>
            <div className="card">
                <button onClick={increment5}>add 5:{count}</button>
            </div>
        </>
    )

}

export default CounterHook;