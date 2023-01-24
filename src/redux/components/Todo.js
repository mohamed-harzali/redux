import React from 'react'
import Button from 'react-bootstrap/Button';
import{useDispatch} from "react-redux"
import { useState } from 'react';
import { deleteTodo } from '../../actions/TodoAction';
import{toggleTodo,editTodo}from  "../../actions/TodoAction"

const Todo = ({el}) => {
  const [todoUpd,setTodoUpd]= useState(el)
  
  
  
  const dispatch = useDispatch()
  const romoveTodo=()=>{
    dispatch(deleteTodo (el.id))
  }
const handletoggle=()=>{
  dispatch(toggleTodo(el.id))
}
const handleEdit=()=>{
  dispatch (editTodo(todoUpd))
}

  return (
    <div>
      
        <hr></hr>
        <input type="checkbox" onClick={handletoggle} />
       <h1 style={{textDecoration:el.isDone ? "line-through": "none"}}> {el.descreption}</h1>
       <Button onClick={romoveTodo} variant ="success">delete</Button> <br></br>
       <input types="text" value={todoUpd.descreption} onChange={(e)=>setTodoUpd({...todoUpd,descreption:e.target.value})}/>
       <Button onClick={handleEdit}>update</Button>
       

        <hr></hr>
      
    </div>
  )
}

export default Todo
