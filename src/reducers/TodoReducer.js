import {ADD_TODO,DELETE_TODO,TOGGLE,EDIT,FILTER_TODO} from'../actions/Types'

const initState={
    filter:'all',
    todos:[
        {id:1,descreption:"List Task",isDone:false},
        {id:2,descreption:"Task",isDone:false}
    ]
}

const TodoReducer=( state=initState,{type,payload} )=>{
    switch (type) {
        case ADD_TODO:
            return{
             ...state,
            todos:[...state.todos,payload]
             
            }
            case DELETE_TODO :
            return{
                ...state,
                todos:state.todos.filter(elm=>elm.id!==payload)

            }
            case TOGGLE:
                return{
               ...state,
               todos:state.todos.map(elm=>elm.id===payload?{...elm,isDone:!elm.isDone}:elm)
            
                }
                
               case EDIT:
                 
               return{...state,
                todos:state.todos.map(elm=>elm.id===payload .id ? payload :elm)
            }
             case FILTER_TODO:
                 
            return{...state, filter:payload
         }
         

        default:
        return state
    }
    
}
export default TodoReducer