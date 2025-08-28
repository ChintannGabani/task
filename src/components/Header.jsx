// frontend/src/components/Header.jsx
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#007bff', color: 'white' }}> {/* Inline styles */}
      <h1>Todo Dashboard</h1>
      {user && (
        <div>
          <span>{user.name} ({user.email})</span>
          <button onClick={logout} style={{ marginLeft: '10px' }}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;