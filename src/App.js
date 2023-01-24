import './App.css';
import {useSelector,useDispatch} from 'react-redux'
import TodoList from './redux/components/TodoList';
import AddTodo from './redux/components/AddTodo';
import Button from 'react-bootstrap/Button';
import { filterTodo } from './actions/TodoAction';

function App() {


const allTodos = useSelector(state => state.TodoReducer.todos)
const todoFiltred = useSelector(state=> state.TodoReducer.filter)
const dispatch = useDispatch()

  return (
    <div className="App">
      <header className="App-header">
        <AddTodo/>
      <Button variant="warning" onClick={()=>dispatch(filterTodo('all'))}>All</Button>{' '}
      <Button variant="danger"onClick={()=>dispatch(filterTodo(true))}>Done</Button>{' '}
      <Button variant="info"onClick={()=>dispatch(filterTodo(false))}>Not Done</Button>{' '}
      <TodoList allTodos={ todoFiltred ===  'all' ? allTodos : allTodos.filter(el => el.isDone === todoFiltred )}/>


      </header>
    </div>
  );
}

export default App;
