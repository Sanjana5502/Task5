import React, { useState } from 'react';
import Task from './Task';
import { useDrop } from 'react-dnd';
import './App.css';

const TaskList = ({ title, tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const [{ isOver }, drop] = useDrop({
    accept: 'TASK',
    drop: (item) => handleDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const handleDrop = (item) => {
    const updatedTasks = taskList.filter((task) => task.id !== item.id); // Remove dropped task from the original list
    setTaskList([...updatedTasks, { id: item.id, text: item.text }]); // Add dropped task to the new list
  };

  return (
    <div ref={drop} style={{ width: '200px', padding: '16px', border: '1px solid #ccc', marginRight: '16px', backgroundColor: isOver ? 'lightgray' : 'white' }}>
      <h2>{title}</h2>
      {taskList.map((task) => (
        <Task key={`${title}_${task.id}`} {...task} />
      ))}
    </div>
  );
};

export default TaskList;