import React from 'react';

const DashboardSummary = () => {
  const summaryData = [
    { icon: '🐄', number: '12', label: 'Total Cattle Registered', color: '#667eea' },
    { icon: '📑', number: '8', label: 'Total Policies', color: '#28a745' },
    { icon: '✅', number: '6', label: 'Active Policies', color: '#17a2b8' },
    { icon: '❗', number: '2', label: 'Pending Claims', color: '#ffc107' }
  ];

  const recentActivity = [
    {
      type: 'policy',
      message: 'Policy #POL-2024-001 renewed successfully',
      time: '2 hours ago',
      status: 'success'
    },
    {
      type: 'claim',
      message: 'Claim #CLM-2024-003 submitted for review',
      time: '1 day ago',
      status: 'pending'
    },
    {
      type: 'cattle',
      message: 'New cattle "Lakshmi" registered',
      time: '2 days ago',
      status: 'info'
    },
    {
      type: 'payment',
      message: 'Premium payment due in 5 days',
      time: '3 days ago',
      status: 'warning'
    }
  ];

  return (
    <div>
      {/* Summary Widgets */}
      <div className="dashboard-grid">
        {summaryData.map((item, index) => (
          <div key={index} className="summary-widget" style={{ borderLeft: `4px solid ${item.color}` }}>
            <div className="widget-icon">{item.icon}</div>
            <div className="widget-number">{item.number}</div>
            <div className="widget-label">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="dashboard-card">
        <div className="card-header">
          <h3 className="card-title">📈 Recent Activity</h3>
          <button className="card-action">View All</button>
        </div>
        <div className="activity-list">
          {recentActivity.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon">
                {activity.type === 'policy' && '📋'}
                {activity.type === 'claim' && '💼'}
                {activity.type === 'cattle' && '🐄'}
                {activity.type === 'payment' && '💰'}
              </div>
              <div className="activity-content">
                <div className="activity-message">{activity.message}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
              <div className={`activity-status ${activity.status}`}>
                {activity.status === 'success' && '✅'}
                {activity.status === 'pending' && '⏳'}
                {activity.status === 'info' && 'ℹ️'}
                {activity.status === 'warning' && '⚠️'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="dashboard-card">
        <div className="card-header">
          <h3 className="card-title">⚡ Quick Actions</h3>
        </div>
        <div className="quick-actions">
          <button className="btn btn-primary">🐄 Add New Cattle</button>
          <button className="btn btn-success">💼 File a Claim</button>
          <button className="btn btn-secondary">📋 View Policies</button>
          <button className="btn btn-secondary">📞 Contact Support</button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary; 