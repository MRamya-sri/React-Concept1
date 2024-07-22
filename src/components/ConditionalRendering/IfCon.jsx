import React from 'react'

const ValidPassword = () => <h4> Valid Password </h4>
const InValidPassword = () => <h4> InvalidPassword </h4>

const Password = ({isValid}) => {
   if(isValid) {
    return <ValidPassword/>;
   }
   return <InValidPassword/>;
   //ternary
   /* return isValid ? <ValidPassword/>; <InvalidPassword/>;*/
}


const IfCon = () => {
  return (
    <>
    <h1>CONDITIONAL RENDERING </h1>
    <h2> IF CONDITIONAL RENDERING </h2>
    <h3> Example of checking whether password is valid or not by using IF conditional statement and rendering it.</h3>
    <Password isValid = {true} />
    </>
  );
};

export default IfCon;
