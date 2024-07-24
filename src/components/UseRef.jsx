import React from 'react'
import { useRef } from 'react';


const UseRef = () => {
  const inputElement = useRef(null);
  
  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "React";
  }

  return (
    <>
      <h2> 4. UseRef </h2>
      <input type="text" ref={inputElement} />
      <button onClick = {() => focusInput()}>Focus & write React</button>
    </>
  )
}

export default UseRef
