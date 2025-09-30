import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="p-4 bg-gray-100 flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/post-item">Post Item</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
