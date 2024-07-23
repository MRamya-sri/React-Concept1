import { useState } from "react";
import React from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    return (
        <>
          <h3>{count}</h3>
          <button onClick = {increment}> + </button>
          <button onClick = {decrement}> - </button>
        </>
      )
    
}


const UseState = () => {
  return (
    <>
    <h1> HOOKS </h1>
    <h1> 1. useState </h1>
    <h2> An Example to show how UseState works by counting numbers basically its tracking the app data or properties.</h2>
    <Counter/>
    </>
  )
}

export default UseState;
