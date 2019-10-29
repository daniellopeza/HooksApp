import React, { useState } from 'react';
import { NameTable } from './NameTable';
import NameTableNoHooks from './NameTableNoHooks';
import { InputForm } from './InputForm';
import { Bill } from './Bill';

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
        <div style={{padding: '5px 5px 5px 5px'}}>
          <NameTable/>
        </div>
        <div style={{padding: '5px 5px 5px 5px'}}>
          <NameTableNoHooks/> 
        </div>
        <div className="bills">
          {todos.map((todo, index) => (
            <Bill key={index} 
            index={index} 
            todo={todo} 
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            />
          ))}
          <InputForm addTodo={addTodo} />
        </div>
      </header>
    </div>
  );
}

export default App;
