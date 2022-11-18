import React ,{useState} from 'react'

const  UseStateBasics = () => {

 const [text,setText] = useState('Naveen Sajwan');

 const handleClick = () => {
  if (text==='Naveen Sajwan') {
    setText('Naveen Singh Sajwan');
  }
  else{
    setText('Naveen Sajwan');
  }
 }

  return (
    <>
    <div>
    <h1>UseState - Basics</h1>
    <h2>{text}</h2>
    <button type='button' className='btn' onMouseOver={handleClick}>change title</button>
    </div>
    </>
  );
}

export default UseStateBasics; 
