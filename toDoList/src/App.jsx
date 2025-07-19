import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import initialTodoData from './components/toDoListData.js';

// Footer component defined inline to avoid import problems
function Footer({ totalTasks, completedTasks }) {
  return (
    <footer className="footer">
      <p>
        Tasks completed: {completedTasks} / {totalTasks}
      </p>
      
    </footer>
  );
}

function App() {
  const [todos, setTodos] = useState(initialTodoData);

  const handleToggleTodo = (todoName) => {
    setTodos(todos.map(todo =>
      todo.name === todoName
        ? { ...todo, done: !todo.done }
        : todo
    ));
  };

  const handleDeleteTodo = (todoName) => {
    setTodos(todos.filter(todo => todo.name !== todoName));
  };

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
// Calculate completed and total tasks
  const completedTasks = todos.filter(todo => todo.done).length;
  const totalTasks = todos.length;

  return (
    <div className="app">
      <Header />
      
      <main className="main-content">
        <AddTodo onAdd={handleAddTodo} />
        
        <div className="todo-list">
          <h2>Your Tasks</h2>
          {todos.length === 0 ? (
            <p className="no-tasks">No tasks yet. Add one above!</p>
          ) : (
            todos.map((todo, index) => (
              <TodoItem
                key={`${todo.name}-${index}`}
                todo={todo}
                onToggle={handleToggleTodo}
                onDelete={handleDeleteTodo}
              />
            ))
          )}
        </div>
      </main>

      <Footer totalTasks={totalTasks} completedTasks={completedTasks} />
    </div>
  );
}

export default App;