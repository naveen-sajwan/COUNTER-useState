import React from 'react';
import { data } from '../../../data';

const UseArray = () => {
  const [people,setPeople] = React.useState(data);
  
const removeAll = () => {
  setPeople([]);
} 

const removeItem = (id) => {
  let newPeople = people.filter((person) => person.id !== id);
  setPeople(newPeople);
} 


  return(
    <>
  {people.map((person) => {
    const {id,name} = person;

    return (
      <div key={id} className='item'>
        <h4>{id}{') '}{name}</h4>
        <button type='button' onClick={()=>removeItem(id)}>remove</button>
      </div>
      )

  })}
  <button type='button' className="btn" onClick={removeAll}>Clear All >>></button>
    </> 
  );
};

export default UseArray;
