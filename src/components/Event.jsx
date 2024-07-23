import React from 'react'

const Button = () => {
    const handleClick = () => {
        alert("YOU CLICK EVENT LISTENERS.. HAHA")
    }

    return <button onClick={handleClick}>Click Me</button>
}


const Event = () => {
  return (
    <>
    <h1> EVENT LISTENERS </h1>
    <Button/>
    </>
  )
}

export default Event
