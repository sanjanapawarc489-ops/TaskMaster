import React, { useState, useEffect } from 'react';
import TaskForm from './Components/Taskform';
import TaskList from './Components/Tasklist';
import ProgressTracker from './Components/Progresstracker';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (index) => {
    setTasks((prevTasks) =>
      prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
  };

  const clearTasks = () => {
    setTasks([]);
  };

  // Add theme state at the top of your App component
const [isDarkMode, setIsDarkMode] = useState(false);

const toggleTheme = () => {
  setIsDarkMode(!isDarkMode);
};

// Inside your App component:
const [currentDateTime, setCurrentDateTime] = useState(new Date());

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentDateTime(new Date());
  }, 1000);
  return () => clearInterval(timer);
}, []);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <header className="app-header">
        <div>
        <h1>TaskMaster</h1>
        <p className="app-subtitle">Your Friendly Task Manager</p>
        {/* Date and Time Display */}
        <div className="date-time-display">
            {currentDateTime.toLocaleDateString()} - {currentDateTime.toLocaleTimeString()}
        </div>
        </div>
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main className="app-main">
        <TaskForm addTask={addTask} />
        <ProgressTracker tasks={tasks} />
        <TaskList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
        {tasks.length>0 && (<button className="clear-btn" onClick={clearTasks}>Clear All Tasks</button>)}
      </main>
    </div>
  );
}