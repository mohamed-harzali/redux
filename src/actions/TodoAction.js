import {ADD_TODO,DELETE_TODO,TOGGLE,EDIT, FILTER_TODO} from './Types'
import { v4 as uuidv4 } from 'uuid';
import Todo from '../redux/components/Todo';


 export const addTodo=(newTodo)=>{
    return{
        type:ADD_TODO,
        payload:{...newTodo,id:uuidv4(),isDone:false}
        
    }
}   
export const deleteTodo=(id)=>{
    return{
        type:DELETE_TODO,
        payload:id
    }
}
export const toggleTodo=(id)=>{
    return{
    type:TOGGLE,
    payload:id
    }
}
export const editTodo=(todo)=>{
    return{
        type:EDIT,
        payload:todo,
    }
}
 export const filterTodo=(filter)=>{
        return{
            type:FILTER_TODO,
            payload:filter
        }
    }
