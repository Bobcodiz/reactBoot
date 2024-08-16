import {useState} from "react";

export const Counter = () => {
    const initialState = 0;
    const [count, setCount] = useState(initialState);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
    }

    const double = () => {
        setCount(prevCount => prevCount * 2);
    }
    return(
        <div>
            <p>My counter problem</p>
            <p>Count : {count}</p>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={double}>Double</button>
            </div>
        </div>
    )
}

