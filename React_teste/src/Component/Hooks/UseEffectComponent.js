import React, { useState } from 'react'
import EditInPlace from '../EditInPlace/EditInPlace';
import {  Button, Input } from 'react-uikit';
//https://www.youtube.com/watch?v=9xhKH43llhU&list=PLN3n1USn4xlmyw3ebYuZmGp60mcENitdM
const UseEffectComponent = () => {
  const [name, setName] = useState('Name');
  const [number, setNumber] = useState(0);

  return (
    <>
      <EditInPlace value={name} onChangeValue={setName} />
      <Button variant="secondary" onClick={() => setNumber(number => number + 1)} >Click-me</ Button>
      <div>{number}</div>

      <Input.Textarea defaultValue={number} />
      
    </>
  );
}

export default UseEffectComponent

