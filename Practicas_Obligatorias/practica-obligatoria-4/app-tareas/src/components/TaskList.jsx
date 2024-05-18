import React from 'react';

function TaskList({ tasks, toggleTaskCompletion, deleteTask }) {
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li 
          key={index} 
          className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'list-group-item-secondary' : ''}`}
        >
          <span
            style={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
            onClick={() => toggleTaskCompletion(index)}
          >
            {task.text}
          </span>
          <button 
            className="btn btn-danger btn-sm"
            onClick={() => deleteTask(index)}
          >
            Borrar
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;