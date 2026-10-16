import React, { useState } from 'react';

export default function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [category, setCategory] = useState('General');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({ text: task.trim(), priority, category, completed: false });
      setTask('');
      setPriority('Medium');
      setCategory('General');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
        />
        <button type="submit" className="add-btn">
          Add Task
        </button>
      </div>

      <div className="select-group">
        <div className="select-wrapper">
          <label>Priority</label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="select-wrapper">
          <label>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </select>
        </div>
      </div>
    </form>
  );
}