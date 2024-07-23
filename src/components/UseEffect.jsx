
import React from 'react'
import { useEffect, useState } from "react";


const Effect = () => {
    const [value, setValue] = useState(0);

    //side effect by changing document title everytime we click on button and as well as normal increment that we usually do using useState.
    useEffect(()=>{
        document.title = `Increment(${value})`;
    })

    return (
        <>
        <h2>{value}</h2>
        <button onClick = {()=> setValue(value+1)}>CLICK ME TO SEE THE INCREMENT AND SIDE EFFECT ON TITLE OF DOC (UseEffect)</button>
        </>
    )
}



const UseEffect = () => {
  return (
    <>
      <h2>2. UseEffect</h2>
      <h3> side effect by changing document title everytime we click on button and as well as normal increment that we usually do using useState. </h3>
      <Effect/>
    </>
  )
}

export default UseEffect
