import React, { useState } from 'react';
import Button from './Button';

function AddTodo({ onAdd }) {
  const [taskName, setTaskName] = useState('');
  const [taskDesc, setTaskDesc] = useState('');
  const [dueTime, setDueTime] = useState('');

  const submitTask = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDesc.trim() && dueTime.trim()) {
      onAdd({
        name: taskName.trim(),
        description: taskDesc.trim(),
        timeDue: dueTime.trim(),
        done: false
      });
      setTaskName('');
      setTaskDesc('');
      setDueTime('');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={submitTask}>
      <h2>Add New Task</h2>
      <div className="form-group">
        <input
          type="text"
          placeholder="Task name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Description"
          value={taskDesc}
          onChange={(e) => setTaskDesc(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Time due (e.g., 5:30 pm)"
          value={dueTime}
          onChange={(e) => setDueTime(e.target.value)}
          required
        />
      </div>
      <Button type="submit" variant="primary">
        Add Task
      </Button>
    </form>
  );
}

export default AddTodo;
