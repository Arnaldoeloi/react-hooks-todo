import React, { useState } from 'react';
import './App.css';

function Todo({ todo, index }){

  const toggleTodo = (todo) => {
    todo.isCompleted= !todo.isCompleted;
    console.log(todo)
  };

  return(
    <div className="todo">
      <p><input type="checkbox" name="" id="" onChange={() => toggleTodo(todo)}/> {todo.text}</p>
      </div>
  );

}

function TodoForm({addTodo}){
  const [inputValue, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!inputValue) return; 
    addTodo(inputValue); //call the parent func addTodo
    setValue(''); //clear the input field
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add Todo..." className="input" value={inputValue} onChange={e => setValue(e.target.value)}/>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false,
    },
    {
      text: 'Find a girlfriend',
      isCompleted: false,
    },
    {
      text: 'Build a random app.',
      isCompleted: false,
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
