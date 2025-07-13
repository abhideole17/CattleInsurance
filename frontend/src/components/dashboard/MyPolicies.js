import React, { useState } from 'react';

const MyPolicies = () => {
  const [selectedPolicy, setSelectedPolicy] = useState(null);

  const policies = [
    {
      id: 'POL-2024-001',
      cattleTag: 'CT-001',
      breed: 'Holstein Friesian',
      planName: 'Premium Cattle Care',
      validityPeriod: 'Jan 1, 2024 - Dec 31, 2024',
      status: 'active',
      premium: '₹2,500/month',
      coverage: '₹50,000'
    },
    {
      id: 'POL-2024-002',
      cattleTag: 'CT-002',
      breed: 'Jersey',
      planName: 'Basic Cattle Protection',
      validityPeriod: 'Mar 1, 2024 - Feb 28, 2025',
      status: 'active',
      premium: '₹1,800/month',
      coverage: '₹35,000'
    },
    {
      id: 'POL-2024-003',
      cattleTag: 'CT-003',
      breed: 'Gir',
      planName: 'Premium Cattle Care',
      validityPeriod: 'Dec 1, 2023 - Nov 30, 2024',
      status: 'expired',
      premium: '₹2,500/month',
      coverage: '₹50,000'
    },
    {
      id: 'POL-2024-004',
      cattleTag: 'CT-004',
      breed: 'Sahiwal',
      planName: 'Basic Cattle Protection',
      validityPeriod: 'Apr 15, 2024 - Apr 14, 2025',
      status: 'pending',
      premium: '₹1,800/month',
      coverage: '₹35,000'
    }
  ];

  const getStatusBadge = (status) => {
    const statusClasses = {
      active: 'status-badge status-active',
      expired: 'status-badge status-expired',
      pending: 'status-badge status-pending'
    };
    return statusClasses[status] || 'status-badge';
  };

  const handleViewDetails = (policy) => {
    setSelectedPolicy(policy);
  };

  const handleRenewPolicy = (policyId) => {
    alert(`Renewing policy ${policyId}...`);
  };

  const handleDownloadPDF = (policyId) => {
    alert(`Downloading PDF for policy ${policyId}...`);
  };

  return (
    <div>
      <div className="dashboard-card">
        <div className="card-header">
          <h3 className="card-title">✅ My Policies</h3>
          <button className="card-action">📋 View All Policies</button>
        </div>
        
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Policy ID</th>
              <th>Cattle Tag/Breed</th>
              <th>Plan Name</th>
              <th>Validity Period</th>
              <th>Premium</th>
              <th>Coverage</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {policies.map((policy) => (
              <tr key={policy.id}>
                <td>
                  <strong>{policy.id}</strong>
                </td>
                <td>
                  <div>
                    <strong>{policy.cattleTag}</strong>
                    <br />
                    <small>{policy.breed}</small>
                  </div>
                </td>
                <td>{policy.planName}</td>
                <td>{policy.validityPeriod}</td>
                <td>{policy.premium}</td>
                <td>{policy.coverage}</td>
                <td>
                  <span className={getStatusBadge(policy.status)}>
                    {policy.status.charAt(0).toUpperCase() + policy.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="btn btn-secondary"
                      onClick={() => handleViewDetails(policy)}
                      style={{ marginRight: '8px', padding: '6px 12px', fontSize: '12px' }}
                    >
                      👁️ View
                    </button>
                    {policy.status === 'active' && (
                      <button 
                        className="btn btn-success"
                        onClick={() => handleDownloadPDF(policy.id)}
                        style={{ marginRight: '8px', padding: '6px 12px', fontSize: '12px' }}
                      >
                        📄 PDF
                      </button>
                    )}
                    {policy.status === 'expired' && (
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleRenewPolicy(policy.id)}
                        style={{ padding: '6px 12px', fontSize: '12px' }}
                      >
                        🔄 Renew
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Policy Details Modal */}
      {selectedPolicy && (
        <div className="modal-overlay" onClick={() => setSelectedPolicy(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Policy Details - {selectedPolicy.id}</h3>
              <button 
                className="modal-close"
                onClick={() => setSelectedPolicy(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="policy-details">
                <div className="detail-row">
                  <strong>Policy ID:</strong> {selectedPolicy.id}
                </div>
                <div className="detail-row">
                  <strong>Cattle Tag:</strong> {selectedPolicy.cattleTag}
                </div>
                <div className="detail-row">
                  <strong>Breed:</strong> {selectedPolicy.breed}
                </div>
                <div className="detail-row">
                  <strong>Plan Name:</strong> {selectedPolicy.planName}
                </div>
                <div className="detail-row">
                  <strong>Validity Period:</strong> {selectedPolicy.validityPeriod}
                </div>
                <div className="detail-row">
                  <strong>Premium:</strong> {selectedPolicy.premium}
                </div>
                <div className="detail-row">
                  <strong>Coverage Amount:</strong> {selectedPolicy.coverage}
                </div>
                <div className="detail-row">
                  <strong>Status:</strong> 
                  <span className={getStatusBadge(selectedPolicy.status)} style={{ marginLeft: '8px' }}>
                    {selectedPolicy.status.charAt(0).toUpperCase() + selectedPolicy.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedPolicy(null)}>
                Close
              </button>
              {selectedPolicy.status === 'active' && (
                <button className="btn btn-primary" onClick={() => handleDownloadPDF(selectedPolicy.id)}>
                  Download PDF
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPolicies; 