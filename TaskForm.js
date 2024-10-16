import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !description) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        const newTask = {
            id: Date.now(),
            name,
            description,
            completed: false
        };
        addTask(newTask);
        setName('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Nom de la tâche" 
                required 
            />
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Description de la tâche" 
                required 
            />
            <button type="submit">Ajouter Tâche</button>
        </form>
    );
};

export default TaskForm;
