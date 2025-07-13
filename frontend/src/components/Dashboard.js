import React, { useState } from 'react';
import './Dashboard.css';
import MyPolicies from './dashboard/MyPolicies';
import MyCattle from './dashboard/MyCattle';
import FileClaim from './dashboard/FileClaim';
import InsurancePlans from './dashboard/InsurancePlans';
import Notifications from './dashboard/Notifications';
import DashboardSummary from './dashboard/DashboardSummary';

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('summary');

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'summary':
        return <DashboardSummary />;
      case 'policies':
        return <MyPolicies />;
      case 'cattle':
        return <MyCattle />;
      case 'claims':
        return <FileClaim />;
      case 'plans':
        return <InsurancePlans />;
      case 'notifications':
        return <Notifications />;
      default:
        return <DashboardSummary />;
    }
  };

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>🐄 Farmer Dashboard</h1>
          <p>Welcome back, Farmer!</p>
        </div>
        <div className="header-right">
          <button className="notification-btn">
            🔔 <span className="notification-badge">3</span>
          </button>
          <div className="user-menu">
            <img 
              src="https://via.placeholder.com/40x40/667eea/ffffff?text=F" 
              alt="Farmer" 
              className="user-avatar"
            />
            <div className="user-info">
              <span className="user-name">Farmer Name</span>
              <span className="user-role">Premium Member</span>
            </div>
            <button className="logout-btn" onClick={handleLogout}>
              🚪 Logout
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="dashboard-nav">
        <button 
          className={`nav-item ${activeTab === 'summary' ? 'active' : ''}`}
          onClick={() => setActiveTab('summary')}
        >
          📊 Dashboard
        </button>
        <button 
          className={`nav-item ${activeTab === 'policies' ? 'active' : ''}`}
          onClick={() => setActiveTab('policies')}
        >
          ✅ My Policies
        </button>
        <button 
          className={`nav-item ${activeTab === 'cattle' ? 'active' : ''}`}
          onClick={() => setActiveTab('cattle')}
        >
          🐄 My Cattle
        </button>
        <button 
          className={`nav-item ${activeTab === 'claims' ? 'active' : ''}`}
          onClick={() => setActiveTab('claims')}
        >
          💼 File a Claim
        </button>
        <button 
          className={`nav-item ${activeTab === 'plans' ? 'active' : ''}`}
          onClick={() => setActiveTab('plans')}
        >
          📦 Insurance Plans
        </button>
        <button 
          className={`nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          🔔 Notifications
        </button>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard; 