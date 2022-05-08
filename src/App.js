import './App.css';
import ToDoList from './ToDoList.js';
import {useState} from 'react';
import ToDo from './ToDo.js';

function App() {

    const [todos, setTodos] = useState([])

    const addTask = (userInput) => {
      if(userInput){
        const newItem = {
          id: Math.random().toString(36).substr(2,9),
          task: userInput,
          complete : false
        }
        setTodos([...todos, newItem])
      }
    }
    const removeTask = (id) => {
      setTodos([...todos.filter((todo)=> todo.id != id) ])
    }

    const handleToggle = (id) => {
      setTodos([
        ...todos.map((todo) => 
          todo.id===id ? { ...todo, complete: !todo.complete} : {...todo}
        )
      ])
    }


    return (
        <div className="App">
            <header>
                <h1>Список задач: {
                    todos.length
                } </h1>
            </header>
            <ToDoList addTask= {addTask}/>
            {todos.map((todo)=>{
              return (
                <ToDo
                todo = {todo}
                keys = {todo.id}
                ToggleTask =  {handleToggle}
                removeTask = {removeTask}
                />
              )
            })}
        </div>
    );
}

export default App;
