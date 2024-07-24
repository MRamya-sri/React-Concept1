// first app and function component 
//function App() {
  //return (
   //<h1> first app and component function </h1>
  ///);
//};

// class component
//import { Component } from "react";
//class App extends Component{
  //  render(){
    //    return <h2> This is Class component.</h2>
    //}
//}
//export default App;


import React from 'react';
import Add from './components/Add';
import Another from './components/Another';
import Lists from './components/Lists';
import Props from './components/Props';
import IfCon from './components/ConditionalRendering/IfCon'
import AndCon from './components/ConditionalRendering/AndCon';
import './components/app.css';
import Event from './components/Event';
import UseState from './components/UseState';
import UseEffect from './components/UseEffect';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <>
      <h1> WELCOME TO REACT DEV'S</h1>
      <h1> React contents </h1>
      <h2>First app and component function</h2>
      <Add />
      <Another/>
      <Lists/>
      <Props/>
      <IfCon/>
      <AndCon/>
      <Event/>
      <UseState/>
      <UseEffect/>
      <UseReducer/>
      <UseRef/>
      <AppRouter/>
    </>
  );
}

export default App;