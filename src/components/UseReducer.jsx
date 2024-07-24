import { useReducer } from "react";

import React from 'react'

const UseReducer = () => {
  const[state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
    <h2> 3. useReducer </h2>
    <h2> {state.count} </h2>
      <button onClick={()=>dispatch({type:"increment"})}>+</button>
      <button onClick={()=>dispatch({type:"decrement"})}>-</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
    </>
  );
};

const initialState = {count:0};

const reducer = (state, action) => {
    switch(action.type){
        case "increment":
            return{
                ...state,
                count: state.count+1,
            };
        case "decrement":
            return{
                ...state,
                count: state.count-1,
            };
        case "reset":
            return{
                ...state,
                count:0,
            };
        default:
            return state;
    };
};

export default UseReducer;
