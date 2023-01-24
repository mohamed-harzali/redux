import React, { useState } from 'react'
import {useDispatch}from'react-redux'
import {addTodo}from"../../actions/TodoAction"



  const AddTodo = () => {
  const dispatch =useDispatch()   
const [input,setInput]=useState({
descreption:""
})
const AddNewTodo=()=>{
    dispatch(addTodo(input))
}


  return (
    <div>
      <input type={'text'} placeholder='write your new task...' onChange={(e)=>setInput({descreption:e.target.value})}/>
      <button className='Addtask' onClick={AddNewTodo}>Addtask</button>
      

    </div>
  )
}

export default AddTodo
