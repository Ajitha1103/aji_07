import React, { useState } from 'react'
export default function Sample4()
{
    const[input,setInput]=useState("");
    const[output,setOutput]=useState("");

    function handleChange(event)
    {
        setInput(event.target.value);
    }
    function handleClick()
    {
        setOutput(input);
        setInput("");
    }
  return (
    <div className='day4'>
      <p>Enter the name of favourite fruit:</p>
    <form>
    <br></br>
    <p>Name</p>
    <input type="text" placeholder='enter the name' onChange={handleChange} value={input} ></input>
    <p>Select category:</p>
       <select name="fruit"  >
       <input  type='text' placeholder='fruits' ></input>
       <option value="fruits">Orange</option>
       <option value="fruits">Apple</option>
       <option value="fruits">Banana</option>
       <option value="fruits">Pineapple</option>
       <option value="fruits">Jackfruit</option>
       
       </select>
    
    </form>
    
    <button id='button' onClick={handleClick} >SUBMIT</button>
    <h1>Hello {output} </h1>  
    </div>
  )
}