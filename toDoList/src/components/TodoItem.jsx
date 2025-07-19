import React from 'react';
import Button from './Button';

function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div className={`todo-item ${todo.done ? 'completed' : ''}`}>
      <div className="todo-content">
        <div className="todo-main">
          <h3 className={todo.done ? 'strikethrough' : ''}>{todo.name}</h3>
          <p className="todo-description">{todo.description}</p>
          <small className="todo-time">Due: {todo.timeDue}</small>
        </div>
        <div className="todo-actions">
          <Button 
            onClick={() => onToggle(todo.name)}
            variant={todo.done ? 'secondary' : 'success'}
            className="toggle-btn"
          >
            {todo.done ? 'Undo' : 'Complete'}
          </Button>
          <Button 
            onClick={() => onDelete(todo.name)}
            variant="danger"
            className="delete-btn"
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
