// frontend/src/components/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar"> {/* Use external class */}
      <h2>Menu</h2>
      <ul>
        <li><Link to="/dashboard">Todo List</Link></li>
        <li><Link to="/dashboard/create">Create Todo</Link></li>
        {/* Add more static menu items as needed */}
        <li>Settings (Static)</li>
        <li>Profile (Static)</li>
      </ul>
    </div>
  );
};

export default Sidebar;