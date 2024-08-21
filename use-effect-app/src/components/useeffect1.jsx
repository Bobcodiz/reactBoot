import {useEffect, useState} from "react";


export default function useEffect1() {
    let initialcount = 0;
    const [count,setCount] =  useState(initialcount);

    const updateCount =(e)=>{
        setCount([...count,e.target.value],prevCount=>prevCount+1)
    }
    useEffect(()=>{})

    return (
        <div>
            <button onClick={()=> updateCount()}>count{count}</button>
        </div>
    )
}