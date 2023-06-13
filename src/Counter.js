import React from 'react'
import { useState } from 'react'


const Counter = () => {
    //js code..
const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Counter</h1>
        
        <p>You have clicked {count} times</p>
        <button onClick={() => setCount(+1)} >Click me</button>
    </div>
  )
}

export default Counter