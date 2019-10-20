import React, { useState } from 'react';

export function TodoForm({ addTodo }){
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!newTodo) return;
    addTodo(newTodo);

    // clear form 
    setNewTodo('');
  }

  return (
    <form onSubmit={handleSubmit}> 
      <input type="text" 
      className="input" 
      value={newTodo} 
      placeholder="Add a todo... " 
      onChange={e => setNewTodo(e.target.value)} 
      style={{textAlign:'center', width:'100%'}}/>
    </form> 
  )
}