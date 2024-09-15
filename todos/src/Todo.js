import React from 'react';

function Todo({ id, task, removeTodo }) {
  const handleRemove = () => removeTodo(id);

  return (
    <li>
      {task}
      <button onClick={handleRemove}>X</button>
    </li>
  );
}

export default Todo;
