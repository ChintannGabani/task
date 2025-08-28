// frontend/src/pages/CreateTodo.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateTodo = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/todos', { title, description });
    navigate('/dashboard'); // Redirect back to todo list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Todo</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateTodo;