import React, { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

const App = () => {
 const [tasks, setTasks] = useState([]);

 const addTask = (title) => {
    const newTasks = [...tasks, { title, status: 'Not Started', id: Date.now() }];
    setTasks(newTasks);
 };

 const startTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: 'In Progress' } : task));
 };

 const completeTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, status: 'Completed' } : task));
 };

 return (
    <div className="app-container">
      <div className='form-section'>
        <h1 className="main-heading">Task Manager</h1>
        <TaskForm addTask={addTask} />
      </div>
      <TaskList tasks={tasks} startTask={startTask} completeTask={completeTask} />
    </div>
 );
};

export default App;
