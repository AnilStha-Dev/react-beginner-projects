import React from 'react';
import { useState } from 'react'

function Counter() {
    const [state, setState]=useState(50);

    const decrementHandler=(e)=>{
      setState(state-1);
    }
    const incrementHandler=(e)=>{
      setState(state+1);
    }
  
    return (
      <>
       <button onClick={decrementHandler}>-</button>
       <span>{state}</span>
       <button onClick={incrementHandler}>+</button>
      </>
    )
}

export default Counter;