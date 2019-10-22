import React, { useState } from 'react';
import { Bills } from './Bills';
import { NameTable } from './NameTable';
import { TodoForm } from './TodoForm';
import { Todo } from './Todo';
import './Bills';

// using functional components instead of classes
function App() {
  // todos is a state variable, setTodos is a method to update the state 
  const [todos, setTodos] = useState([
    {
      text: 'Rent',
      isCompleted: false
    },
    {
      text: 'Car Payment',
      isCompleted: false
    },
    {
      text: 'Food',
      isCompleted: false
    }
  ]);

  // update state using method 
  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <NameTable/>
        </div>
        <div className="bills">
          <p>
            {todos.map((todo, index) => (
              <Todo key={index} 
              index={index} 
              todo={todo} 
              completeTodo={completeTodo}
              removeTodo={removeTodo}
              />
            ))}
          <TodoForm addTodo={addTodo} />
        </p>
        </div>
      </header>
    </div>
  );
}

export default App;
