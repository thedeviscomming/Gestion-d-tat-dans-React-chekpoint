import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem 
                    key={task.id} 
                    task={task} 
                    updateTask={updateTask} 
                    deleteTask={deleteTask} 
                    toggleTaskCompletion={toggleTaskCompletion} 
                />
            ))}
        </ul>
    );
};

export default TaskList;
