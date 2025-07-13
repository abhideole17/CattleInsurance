import React, { useState } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const switchToSignup = () => setCurrentPage('signup');
  const switchToLogin = () => setCurrentPage('login');
  
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('login');
  };

  // If authenticated, show dashboard
  if (isAuthenticated) {
    return <Dashboard onLogout={handleLogout} />;
  }

  // Show login/signup pages
  return (
    <div className="App">
      {currentPage === 'login' ? (
        <LoginPage onSwitchToSignup={switchToSignup} onLogin={handleLogin} />
      ) : (
        <SignupPage onSwitchToLogin={switchToLogin} onSignup={handleLogin} />
      )}
    </div>
  );
}

export default App;
