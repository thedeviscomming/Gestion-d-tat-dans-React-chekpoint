import React, { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    const [tasks, setTasks] = useState([]);

    // Charger les tâches du localStorage
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    // Mettre à jour le localStorage lorsque les tâches changent
    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (id, updatedTask) => {
        const updatedTasks = tasks.map(task => (task.id === id ? updatedTask : task));
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="App">
            <h1>Liste de Tâches</h1>
            <TaskForm addTask={addTask} />
            <TaskList 
                tasks={tasks} 
                updateTask={updateTask} 
                deleteTask={deleteTask} 
                toggleTaskCompletion={toggleTaskCompletion} 
            />
        </div>
    );
};

export default App;
