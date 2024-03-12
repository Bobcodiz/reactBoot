import React, { useState } from 'react'
import { Button ,Stack} from 'react-bootstrap'

function UseStateTwo() {
    const initial = 0
    const [count,setCount] = useState(initial)

    const Increase = () =>{
        for(let i = 0;i < 5; i++){
            setCount(prev => prev + 1)
        }
    }
  return (
    <div>
        count:{countTempl}
        <Stack direction='horizontal'>
            <Button onClick={()=>setCount(prev=>prev+1)}>Increment</Button>
            <Button onClick={()=>setCount(prev=>prev - 1)}> Decrement</Button>
            <Button onClick={Increase}>Increment Five</Button>
        </Stack>
        <Stack>
            <div>
                <h1></h1>
            </div>
        </Stack>
    </div>
  )
}

export default UseStateTwo