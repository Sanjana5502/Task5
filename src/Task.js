// Task.js
import React from 'react';
import { useDrag } from 'react-dnd';
import './App.css';

const Task = ({ id, text }) => {
  const [, drag] = useDrag({
    type: 'TASK',
    item: { id, text },
  });

  return (
    <div ref={drag} style={{ padding: '8px', border: '1px solid #ccc', marginBottom: '8px' }}>
      {text}
    </div>
  );
};

export default Task;