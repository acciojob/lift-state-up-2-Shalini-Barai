import React,{useState} from 'react'
import Parent from './Parent';

const Child = () => {
    const [write,setWrite]=useState("");

    function handleChange(e){
        setWrite(e.target.value);
    }
  return (
    <div className='child'>
        <Parent child={write}/>
      <h1>Child Component</h1>
      <input type="text" onChange={handleChange}/>
      
    </div>
  )
}

export default Children