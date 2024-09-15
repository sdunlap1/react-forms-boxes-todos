import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

function NewTodoForm({ addTodo }) {
  const [task, setTask] = useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (task.trim() === '') {
      alert("Task can't be empty!");
      return;
    }
    addTodo({ task, id: uuid() });
    setTask(''); // Reset input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input
        id="task"
        name="task"
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
