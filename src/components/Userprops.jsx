import React from 'react'

const Userprops = (props) => {
    return (
    <section>
      <h1> PROPS Example </h1>
      <img src={ props.img} alt={props.name} />
      <h3> Name: {props.name} </h3> 
      <h3> Age: {props.age} </h3>
      <h3> Hobbies: {props.hobbies} </h3>
      
    </section> 
    );
  };

  /*or*/
// we can enter all parameter that mentioning Props components rather than using direct props

  /*const Userprops = ({img, name, hobbies}) => {
    return (
    <section>
      <h1> PROPS Example </h1>
      <img src={img} alt={name} />
      <h1> Name: {name} </h1> 
      <h2> Age: {age} </h2>
      <h3> Hobbies: {hobbies} </h3>
    </section> 
    );
  };*/

  
  export default Userprops;