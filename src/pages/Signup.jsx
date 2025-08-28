// frontend/src/pages/Signup.jsx
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(name, email, password);
      navigate('/login'); // Redirect to dashboard after signup
    } catch (error) {
      alert('Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '50px' }}> {/* Inline style */}
      <h2>Signup</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;