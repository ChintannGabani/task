// frontend/src/pages/Dashboard.jsx
import { Outlet } from "react-router-dom";
import "../styles/dashboard.css"; // Import external dashboard CSS
import Header from "../components/header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {" "}
      {/* Use external class */}
      <Sidebar />
      <div className="content" style={{ backgroundColor: "#fff" }}>
        {" "}
        {/* Inline style example */}
        <Header />
        <Outlet /> {/* Render child routes like TodoList, CreateTodo, etc. */}
      </div>
    </div>
  );
};

export default Dashboard;
