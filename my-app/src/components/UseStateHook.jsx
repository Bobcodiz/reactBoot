import { useState } from "react";
import { Button, Container } from "react-bootstrap";


export default function UseStateHook(){
    const [count,setCount] = useState(0)

    return(
    <>
        <Container>
            <Button onClick={()=>setCount (count+ 1)}>count{count}</Button>
        </Container>
    </>)
}