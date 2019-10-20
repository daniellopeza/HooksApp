import React from 'react';

// {} to take props
export function Todo({ todo, index, completeTodo, removeTodo  }) {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : '', display:'flex'}}>
      {`${(index + 1)}: ${todo.text}`}
      <button className="button" onClick={ () => completeTodo(index)}> Complete </button>
      <button className="button" onClick={ () => removeTodo(index)}> X </button>
    </div>
  );
}