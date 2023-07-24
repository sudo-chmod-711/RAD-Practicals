import React from 'react';

const todosList = [
    'Learn React',
    'Build a project',
    'Go for a walk',
    'Do some exercises',
    'Join a music class',
    'Read a novel',
];

const TodoList = () => {
  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todosList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

