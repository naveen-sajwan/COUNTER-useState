import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue] = useState(0);


  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };



  return(
    <>
      <section style={{margin:'4rem 0',border:'1px solid grey',height:'600px',padding:'25px',background:'lightgrey'}}>
        <h2>regular Counter</h2>
        <h1>{value}</h1>
        <button className='btn' onClick={()=> setValue(value-1)}>decrease</button>
        <button className='btn' onClick={()=> setValue(0)}>reset</button>
        <button className='btn' onClick={()=> setValue(value+1)}>increase</button>
      </section>
        <br/>
        <br/><br/>
        <section>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button type='button' className='btn' onClick={complexIncrease}>lazy increase</button>
        </section>
      
    </>

    )
};
export default UseStateCounter;
