import React, { useState } from 'react';

const FileClaim = () => {
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [selectedClaim, setSelectedClaim] = useState(null);

  const recentClaims = [
    {
      id: 'CLM-2024-003',
      cattleId: 'CT-001',
      cattleName: 'Lakshmi',
      claimType: 'Medical Treatment',
      amount: '₹15,000',
      status: 'submitted',
      date: '2024-03-15',
      description: 'Treatment for fever and loss of appetite'
    },
    {
      id: 'CLM-2024-002',
      cattleId: 'CT-002',
      cattleName: 'Gauri',
      claimType: 'Surgery',
      amount: '₹25,000',
      status: 'approved',
      date: '2024-02-28',
      description: 'Emergency surgery for injury'
    },
    {
      id: 'CLM-2024-001',
      cattleId: 'CT-003',
      cattleName: 'Radha',
      claimType: 'Vaccination',
      amount: '₹5,000',
      status: 'rejected',
      date: '2024-01-20',
      description: 'Routine vaccination not covered'
    }
  ];

  const getClaimStatusBadge = (status) => {
    const statusClasses = {
      submitted: 'status-badge status-pending',
      approved: 'status-badge status-active',
      rejected: 'status-badge status-expired'
    };
    return statusClasses[status] || 'status-badge';
  };

  const handleFileClaim = () => {
    setShowClaimForm(true);
  };

  const handleViewClaim = (claim) => {
    setSelectedClaim(claim);
  };

  const handleUploadDocuments = (claimId) => {
    alert(`Uploading documents for claim ${claimId}...`);
  };

  return (
    <div>
      <div className="dashboard-card">
        <div className="card-header">
          <h3 className="card-title">💼 File a Claim</h3>
          <button className="card-action" onClick={handleFileClaim}>
            ➕ File New Claim
          </button>
        </div>
        
        <div className="claim-stats">
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Total Claims</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Approved</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Pending</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1</span>
            <span className="stat-label">Rejected</span>
          </div>
        </div>

        <h4 style={{ marginTop: '24px', marginBottom: '16px' }}>Recent Claims</h4>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Claim ID</th>
              <th>Cattle</th>
              <th>Claim Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {recentClaims.map((claim) => (
              <tr key={claim.id}>
                <td>
                  <strong>{claim.id}</strong>
                </td>
                <td>
                  <div>
                    <strong>{claim.cattleName}</strong>
                    <br />
                    <small>#{claim.cattleId}</small>
                  </div>
                </td>
                <td>{claim.claimType}</td>
                <td>{claim.amount}</td>
                <td>{claim.date}</td>
                <td>
                  <span className={getClaimStatusBadge(claim.status)}>
                    {claim.status.charAt(0).toUpperCase() + claim.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="btn btn-secondary"
                      onClick={() => handleViewClaim(claim)}
                      style={{ marginRight: '8px', padding: '6px 12px', fontSize: '12px' }}
                    >
                      👁️ View
                    </button>
                    {claim.status === 'submitted' && (
                      <button 
                        className="btn btn-primary"
                        onClick={() => handleUploadDocuments(claim.id)}
                        style={{ padding: '6px 12px', fontSize: '12px' }}
                      >
                        📎 Upload
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* File Claim Form */}
      {showClaimForm && (
        <div className="modal-overlay" onClick={() => setShowClaimForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>File New Claim</h3>
              <button 
                className="modal-close"
                onClick={() => setShowClaimForm(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <form className="claim-form">
                <div className="form-group">
                  <label>Select Cattle</label>
                  <select required>
                    <option value="">Choose cattle</option>
                    <option value="CT-001">Lakshmi (CT-001)</option>
                    <option value="CT-002">Gauri (CT-002)</option>
                    <option value="CT-003">Radha (CT-003)</option>
                    <option value="CT-004">Sita (CT-004)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Claim Type</label>
                  <select required>
                    <option value="">Select claim type</option>
                    <option value="medical">Medical Treatment</option>
                    <option value="surgery">Surgery</option>
                    <option value="vaccination">Vaccination</option>
                    <option value="accident">Accident</option>
                    <option value="disease">Disease</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Claim Amount (₹)</label>
                  <input type="number" placeholder="Enter amount" required />
                </div>
                <div className="form-group">
                  <label>Incident Date</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea 
                    rows="4" 
                    placeholder="Describe the incident and treatment required..."
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Upload Documents</label>
                  <input type="file" multiple accept=".pdf,.jpg,.jpeg,.png" />
                  <small>Upload medical reports, photos, bills, etc.</small>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowClaimForm(false)}>
                Cancel
              </button>
              <button className="btn btn-primary">
                Submit Claim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Claim Details Modal */}
      {selectedClaim && (
        <div className="modal-overlay" onClick={() => setSelectedClaim(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Claim Details - {selectedClaim.id}</h3>
              <button 
                className="modal-close"
                onClick={() => setSelectedClaim(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="claim-details">
                <div className="detail-row">
                  <strong>Claim ID:</strong> {selectedClaim.id}
                </div>
                <div className="detail-row">
                  <strong>Cattle:</strong> {selectedClaim.cattleName} (#{selectedClaim.cattleId})
                </div>
                <div className="detail-row">
                  <strong>Claim Type:</strong> {selectedClaim.claimType}
                </div>
                <div className="detail-row">
                  <strong>Amount:</strong> {selectedClaim.amount}
                </div>
                <div className="detail-row">
                  <strong>Date:</strong> {selectedClaim.date}
                </div>
                <div className="detail-row">
                  <strong>Status:</strong> 
                  <span className={getClaimStatusBadge(selectedClaim.status)} style={{ marginLeft: '8px' }}>
                    {selectedClaim.status.charAt(0).toUpperCase() + selectedClaim.status.slice(1)}
                  </span>
                </div>
                <div className="detail-row">
                  <strong>Description:</strong> {selectedClaim.description}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedClaim(null)}>
                Close
              </button>
              {selectedClaim.status === 'submitted' && (
                <button className="btn btn-primary" onClick={() => handleUploadDocuments(selectedClaim.id)}>
                  Upload Documents
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FileClaim; 