import React, { useState } from 'react';

export function TodoForm({ addTodo }){
  const [newTodo, setNewTodo] = useState('');

  return (
    <form onSubmit={(e) => handleSubmit(e, newTodo, setNewTodo, addTodo)}> 
      <input type="text" 
      className="input" 
      value={newTodo} 
      placeholder="Add a todo... " 
      onChange={e => setNewTodo(e.target.value)} 
      style={{textAlign:'center', width:'100%'}}/>
    </form> 
  )
}


function handleSubmit(e, newTodo, setNewTodo, addTodo) {
  e.preventDefault();
  if(!newTodo) return;
  addTodo(newTodo);

  // clear form 
  setNewTodo('');
}