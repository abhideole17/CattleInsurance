import React, { useState } from 'react';

const Notifications = () => {
  const [selectedNotification, setSelectedNotification] = useState(null);
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 'NOT-001',
      type: 'policy',
      title: 'Policy Approved',
      message: 'Your policy POL-2024-004 for cattle Sita has been approved successfully.',
      time: '2 hours ago',
      status: 'unread',
      priority: 'high',
      action: 'View Policy'
    },
    {
      id: 'NOT-002',
      type: 'claim',
      title: 'Claim Status Updated',
      message: 'Your claim CLM-2024-003 has been reviewed and is under processing.',
      time: '1 day ago',
      status: 'read',
      priority: 'medium',
      action: 'View Claim'
    },
    {
      id: 'NOT-003',
      type: 'payment',
      title: 'Premium Payment Due',
      message: 'Premium payment of ₹2,500 for policy POL-2024-001 is due in 5 days.',
      time: '2 days ago',
      status: 'unread',
      priority: 'high',
      action: 'Pay Now'
    },
    {
      id: 'NOT-004',
      type: 'vet',
      title: 'Vet Visit Scheduled',
      message: 'Dr. Sharma will visit your farm on March 20, 2024 for routine checkup.',
      time: '3 days ago',
      status: 'read',
      priority: 'medium',
      action: 'View Details'
    },
    {
      id: 'NOT-005',
      type: 'cattle',
      title: 'New Cattle Registered',
      message: 'Cattle "Lakshmi" has been successfully registered with tag CT-001.',
      time: '1 week ago',
      status: 'read',
      priority: 'low',
      action: 'View Cattle'
    },
    {
      id: 'NOT-006',
      type: 'system',
      title: 'System Maintenance',
      message: 'Scheduled maintenance on March 25, 2024 from 2:00 AM to 4:00 AM.',
      time: '1 week ago',
      status: 'read',
      priority: 'low',
      action: 'Learn More'
    }
  ];

  const getNotificationIcon = (type) => {
    const icons = {
      policy: '📋',
      claim: '💼',
      payment: '💰',
      vet: '👨‍⚕️',
      cattle: '🐄',
      system: '⚙️'
    };
    return icons[type] || '📢';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      high: '#e74c3c',
      medium: '#f39c12',
      low: '#95a5a6'
    };
    return colors[priority] || '#95a5a6';
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'all') return true;
    if (filter === 'unread') return notification.status === 'unread';
    return notification.type === filter;
  });

  const handleNotificationClick = (notification) => {
    setSelectedNotification(notification);
  };

  const handleMarkAsRead = (notificationId) => {
    // In a real app, this would update the notification status
    alert(`Marking notification ${notificationId} as read...`);
  };

  const handleAction = (notification) => {
    alert(`Performing action: ${notification.action} for ${notification.id}`);
  };

  return (
    <div>
      <div className="dashboard-card">
        <div className="card-header">
          <h3 className="card-title">🔔 Notifications</h3>
          <div className="notification-actions">
            <button className="card-action">Mark All Read</button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="notification-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All ({notifications.length})
          </button>
          <button 
            className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
            onClick={() => setFilter('unread')}
          >
            Unread ({notifications.filter(n => n.status === 'unread').length})
          </button>
          <button 
            className={`filter-btn ${filter === 'policy' ? 'active' : ''}`}
            onClick={() => setFilter('policy')}
          >
            Policies
          </button>
          <button 
            className={`filter-btn ${filter === 'claim' ? 'active' : ''}`}
            onClick={() => setFilter('claim')}
          >
            Claims
          </button>
          <button 
            className={`filter-btn ${filter === 'payment' ? 'active' : ''}`}
            onClick={() => setFilter('payment')}
          >
            Payments
          </button>
        </div>

        {/* Notifications List */}
        <div className="notifications-list">
          {filteredNotifications.length === 0 ? (
            <div className="no-notifications">
              <p>No notifications found.</p>
            </div>
          ) : (
            filteredNotifications.map((notification) => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.status}`}
                onClick={() => handleNotificationClick(notification)}
              >
                <div className="notification-icon">
                  {getNotificationIcon(notification.type)}
                </div>
                <div className="notification-content">
                  <div className="notification-header">
                    <h4>{notification.title}</h4>
                    <div className="notification-meta">
                      <span className="notification-time">{notification.time}</span>
                      <span 
                        className="priority-indicator"
                        style={{ backgroundColor: getPriorityColor(notification.priority) }}
                      ></span>
                    </div>
                  </div>
                  <p className="notification-message">{notification.message}</p>
                  <div className="notification-actions">
                    <button 
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAction(notification);
                      }}
                    >
                      {notification.action}
                    </button>
                    {notification.status === 'unread' && (
                      <button 
                        className="btn btn-secondary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleMarkAsRead(notification.id);
                        }}
                      >
                        Mark Read
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Notification Details Modal */}
      {selectedNotification && (
        <div className="modal-overlay" onClick={() => setSelectedNotification(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {getNotificationIcon(selectedNotification.type)} {selectedNotification.title}
              </h3>
              <button 
                className="modal-close"
                onClick={() => setSelectedNotification(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="notification-detail">
                <div className="notification-detail-meta">
                  <span className="notification-time">{selectedNotification.time}</span>
                  <span 
                    className="priority-badge"
                    style={{ backgroundColor: getPriorityColor(selectedNotification.priority) }}
                  >
                    {selectedNotification.priority.charAt(0).toUpperCase() + selectedNotification.priority.slice(1)} Priority
                  </span>
                </div>
                <div className="notification-detail-message">
                  {selectedNotification.message}
                </div>
                <div className="notification-detail-type">
                  <strong>Type:</strong> {selectedNotification.type.charAt(0).toUpperCase() + selectedNotification.type.slice(1)}
                </div>
                <div className="notification-detail-status">
                  <strong>Status:</strong> {selectedNotification.status.charAt(0).toUpperCase() + selectedNotification.status.slice(1)}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedNotification(null)}>
                Close
              </button>
              <button 
                className="btn btn-primary"
                onClick={() => handleAction(selectedNotification)}
              >
                {selectedNotification.action}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notifications; 