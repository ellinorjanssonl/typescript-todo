import React from 'react';
import TodoList from '../components/ToDoList';

const TodoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-green-100 p-4">
      <TodoList />
    </div>
  );
};

export default TodoPage;
