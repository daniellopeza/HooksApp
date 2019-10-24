import React from 'react';
import './Bills.css';

// {} to take props
export function Todo({ todo, index, completeTodo, removeTodo  }) {
  return (
    <div className="bill" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
        {`${(index + 1)}: ${todo.text}`}
      <div>
        <button className="button" onClick={ () => completeTodo(index)}> Paid </button>
        <button className="button" onClick={ () => removeTodo(index)}> X </button>
      </div>
    </div>
  );
}