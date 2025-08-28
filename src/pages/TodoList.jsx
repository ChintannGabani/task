// frontend/src/pages/TodoList.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get('http://localhost:5000/api/todos');
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <Link to="/dashboard/create">
        <button>Create New Todo</button>
      </Link>
      <ul className="todo-list"> {/* Use external class */}
        {todos.map((todo) => (
          <li key={todo._id} className="todo-item" style={{ borderColor: todo.completed ? 'green' : 'red' }}> {/* Inline style */}
            <div>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
            </div>
            <div>
              <Link to={`/dashboard/edit/${todo._id}`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => deleteTodo(todo._id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;