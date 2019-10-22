import React from 'react';

// {} to take props
export function Todo({ todo, index, completeTodo, removeTodo  }) {
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : '', display:'flex', }}>
      {`${(index + 1)}: ${todo.text}`}
      <button className="button" style={{margin:'0px 0px 0px auto'}} onClick={ () => completeTodo(index)}> Paid </button>
      <button className="button" onClick={ () => removeTodo(index)}> X </button>
    </div>
  );
}