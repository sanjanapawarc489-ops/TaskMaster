import React from 'react';

export default function TaskList({ tasks, updateTask, deleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks yet! Add one above to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <div
          key={index}
          className={`task-card ${task.completed ? 'is-completed' : ''}`}
        >
          <div className="task-content">
            <span className="task-title">{task.text}</span>
            <div className="task-meta">
              <span className={`badge priority-${task.priority.toLowerCase()}`}>
                {task.priority}
              </span>
              <span className="badge category-badge">{task.category}</span>
            </div>
          </div>

          <div className="task-actions">
            <button
              onClick={() => updateTask(index)}
              className={`btn ${task.completed ? 'btn-undo' : 'btn-complete'}`}
            >
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              onClick={() => deleteTask(index)}
              className="btn btn-delete"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}