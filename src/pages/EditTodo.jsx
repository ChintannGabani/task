// frontend/src/pages/EditTodo.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditTodo = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  console.log("🚀 ~ EditTodo ~ title:", title)
  const [description, setDescription] = useState('');
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTodo = async () => {
      const res = await axios.get(`http://localhost:5000/api/todos/${id}`);
      console.log("🚀 ~ fetchTodo ~ res:", res)
      setTitle(res.data.title);
      setDescription(res.data.description);
      setCompleted(res.data.completed);
    };
    fetchTodo();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/todos/${id}`, { title, description, completed });
    navigate('/dashboard'); // Redirect back to todo list
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Todo</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
      <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
      <label>
        Completed:
        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
      </label>
      <button type="submit">Update</button>
    </form>
  );
};

export default EditTodo;