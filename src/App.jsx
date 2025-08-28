// frontend/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import TodoList from './pages/TodoList';
import CreateTodo from './pages/CreateTodo';
import EditTodo from './pages/EditTodo';

function App() {
  return (
    <AuthProvider> {/* Wrap app with Auth context */}
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Protected routes under /dashboard */}
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route index element={<TodoList />} /> {/* Default to TodoList */}
            <Route path="create" element={<CreateTodo />} />
            <Route path="edit/:id" element={<EditTodo />} />
          </Route>
          <Route path="/" element={<Login />} /> {/* Redirect to login */}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;