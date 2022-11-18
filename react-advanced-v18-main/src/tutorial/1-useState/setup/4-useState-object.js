import React, { useState } from 'react';

const UseStateObject = () => {
  const [name,setName] = useState('peter');
  const [age,setAge] = useState(24)

  const [message,setMessage] = useState('hello React JS :}')





  const change = () => {
    // if(message==='hello React JS :}'){
    //   setPerson({...person,message:'hello world'});
    // }
    // else{
    //   setPerson({...person,message:'hello React JS :}'});
    // }
    if(message==='hello React JS :}'){
      setMessage('hello world');
    }
    else{
      setMessage('hello React JS :}');
    }
    
  }


  return(
    <>
      <h3>{name} is my best friend.</h3>
      <h3>he is {age} years old.</h3>
      <br/>
      <h3>{message}</h3>
      <button type='button' className='btn' onClick={change}>change-Message >></button>
    </>
    );

};

export default UseStateObject;
