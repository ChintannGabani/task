import { Outlet, Link } from 'react-router-dom';

const MainLayout = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{
        width: '250px',
        backgroundColor: '#2d3748',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>Todo App</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Link to="/" style={{
              display: 'block',
              padding: '10px',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#4a5568'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >Todo List</Link>
          </li>
        </ul>
        <button
          className="button button-danger"
          onClick={handleLogout}
          style={{ marginTop: 'auto' }}
        >Logout</button>
      </div>
      {/* Main Content */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <header style={{
          backgroundColor: '#007bff',
          color: 'white',
          padding: '15px 20px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <h1 style={{ fontSize: '24px', margin: 0 }}>My Todo App</h1>
        </header>
        <main style={{ padding: '20px', flex: 1, backgroundColor: '#f0f2f5' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;