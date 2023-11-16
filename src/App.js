// App.js
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskList from './TaskList';
import './App.css';

const App = () => {
  const tasks = [
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' },
    { id: 4, text: 'Task 4' },
    { id: 5, text: 'Task 5' },
    { id: 6, text: 'Task 6' },
    { id: 7, text: 'Task 7' },
    { id: 8, text: 'Task 8' },
    { id: 9, text: 'Task 9' },
    { id: 10, text: 'Task 10' },
  ];
  const taskLists = [
    { title: 'Unplanned', tasks: tasks },
    { title: 'Today', tasks: [] },
    { title: 'Tomorrow', tasks: [] },
    { title: 'This Week', tasks: [] },
    { title: 'Next Week', tasks: [] },
  ];
  return (
    <div className='App'>
      <h2>Task 5: Drag & Drop Task List</h2>
        <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex' }}>
        {taskLists.map((list, index) => (
          <TaskList key={index} {...list} />
        ))}
      </div>
    </DndProvider>
    </div>
  );
};

export default App;