import React, { useState,useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export const Input = ({placeHolder}) => {
const inputRef = useRef(null);
const[name, setName]=useState("");

const handleChange =(e) =>{
setName(e.target.value);
}
// const handleClick =() =>{
//   inputRef.current.focus();
// }
  return (
   
        <input type='text' onChange={handleChange} className='bg-transparent text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease placeholder:text-slate-400 text-slate-700 focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow' placeholder={placeHolder}/>

  )
}

export default Input