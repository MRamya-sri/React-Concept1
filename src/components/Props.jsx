import React from 'react'
import Userprops from './Userprops';

/*const User = (props) => {
  return <section>
    <h1> PROPS Example </h1>
    <img src={ props.img} alt={props.name} />
    <h1> Name: {props.name} </h1> 
    <h2> Age: {props.age} </h2>
    <h3> Hobbies: {props.hobbies} </h3>
  </section> 
}*/

function Props() {
  return (
    <>

    <Userprops
      img="https://avatars.githubusercontent.com/u/125277935?v=4"
      name="Ramya Sri"
      age ="22"
      hobbies={["Coding", "Writing", "music"]}
    >

    </Userprops>

    </>
  );
};

export default Props;

//so we can create a const like that in component or can create multiple component or other component .
// let's create other component called User and import that component here.. yay!!