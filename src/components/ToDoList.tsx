import React, { useState } from 'react';

interface Todo {
  done: any;
  id: number;
  task: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim()) {
      const newTask: Todo = { id: Date.now(), task: newTodo };
      setTodos([newTask, ...todos]); 
      setNewTodo('');
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const doneTodo = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    }));
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-3xl font-light mb-4">Todo List</h2>
      <div className="mb-4 flex">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
          className="border p-2 flex-grow mr-2"
        />
        <button
          onClick={addTodo}
          className="bg-green-500 text-white p-2 rounded"
        >
          Add
        </button>
      </div>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-2 border-b"
          >
            {todo.task}
            <button
              onClick={() => removeTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
            <button onClick={() => doneTodo(todo.id)}>
              {todo.done ? 'Check!' : 'Done?'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
