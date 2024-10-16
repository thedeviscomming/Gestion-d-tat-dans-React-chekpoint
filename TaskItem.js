import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedName, setUpdatedName] = useState(task.name);
    const [updatedDescription, setUpdatedDescription] = useState(task.description);

    const handleUpdate = (e) => {
        e.preventDefault();
        updateTask(task.id, { ...task, name: updatedName, description: updatedDescription });
        setIsEditing(false);
    };

    return (
        <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {isEditing ? (
                <form onSubmit={handleUpdate}>
                    <input 
                        type="text" 
                        value={updatedName} 
                        onChange={(e) => setUpdatedName(e.target.value)} 
                    />
                    <input 
                        type="text" 
                        value={updatedDescription} 
                        onChange={(e) => setUpdatedDescription(e.target.value)} 
                    />
                    <button type="submit">Sauvegarder</button>
                    <button onClick={() => setIsEditing(false)}>Annuler</button>
                </form>
            ) : (
                <>
                    <h3 onClick={() => toggleTaskCompletion(task.id)}>{task.name}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => setIsEditing(true)}>Modifier</button>
                    <button onClick={() => {
                        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
                            deleteTask(task.id);
                        }
                    }}>Supprimer</button>
                </>
            )}
        </li>
    );
};

export default TaskItem;
