import './App.css';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
          GitHub Codespaces <span className="heart">♥️</span> React
        </p>
        <p className="small">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </p>
      <Router>
      <div>
      <Link to="/login">
        <button type="button">Login</button>
      </Link>
      <Link to="/register">
        <button type="button">Register</button>
      </Link>
    </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={
          <PrivateRoute>
          <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </Router>
        </header>
    </div>
    
  );
}

export default App;
