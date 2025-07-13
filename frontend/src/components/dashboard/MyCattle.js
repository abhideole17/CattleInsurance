import React, { useState } from 'react';

const MyCattle = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedCattle, setSelectedCattle] = useState(null);

  const cattle = [
    {
      id: 'CT-001',
      name: 'Lakshmi',
      breed: 'Holstein Friesian',
      age: '4 years',
      weight: '650 kg',
      photo: 'https://via.placeholder.com/80x80/667eea/ffffff?text=L',
      insuranceStatus: 'insured',
      policyId: 'POL-2024-001',
      lastVaccination: '2024-01-15',
      healthStatus: 'Healthy'
    },
    {
      id: 'CT-002',
      name: 'Gauri',
      breed: 'Jersey',
      age: '3 years',
      weight: '450 kg',
      photo: 'https://via.placeholder.com/80x80/28a745/ffffff?text=G',
      insuranceStatus: 'insured',
      policyId: 'POL-2024-002',
      lastVaccination: '2024-02-01',
      healthStatus: 'Healthy'
    },
    {
      id: 'CT-003',
      name: 'Radha',
      breed: 'Gir',
      age: '5 years',
      weight: '550 kg',
      photo: 'https://via.placeholder.com/80x80/ffc107/ffffff?text=R',
      insuranceStatus: 'not_insured',
      policyId: null,
      lastVaccination: '2023-12-20',
      healthStatus: 'Under Observation'
    },
    {
      id: 'CT-004',
      name: 'Sita',
      breed: 'Sahiwal',
      age: '2 years',
      weight: '400 kg',
      photo: 'https://via.placeholder.com/80x80/dc3545/ffffff?text=S',
      insuranceStatus: 'pending',
      policyId: 'POL-2024-004',
      lastVaccination: '2024-03-10',
      healthStatus: 'Healthy'
    }
  ];

  const getInsuranceStatusBadge = (status) => {
    const statusClasses = {
      insured: 'status-badge status-insured',
      not_insured: 'status-badge status-not-insured',
      pending: 'status-badge status-pending'
    };
    return statusClasses[status] || 'status-badge';
  };

  const handleViewDetails = (cattle) => {
    setSelectedCattle(cattle);
  };

  const handleEditCattle = (cattleId) => {
    alert(`Editing cattle ${cattleId}...`);
  };

  const handleAddCattle = () => {
    setShowAddForm(true);
  };

  return (
    <div>
      <div className="dashboard-card">
        <div className="card-header">
          <h3 className="card-title">🐄 My Cattle</h3>
          <button className="card-action" onClick={handleAddCattle}>
            ➕ Add New Cattle
          </button>
        </div>
        
        <div className="cattle-grid">
          {cattle.map((cow) => (
            <div key={cow.id} className="cattle-card">
              <div className="cattle-photo">
                <img src={cow.photo} alt={cow.name} />
                <span className={`health-indicator ${cow.healthStatus.toLowerCase().replace(' ', '-')}`}>
                  {cow.healthStatus === 'Healthy' ? '🟢' : '🟡'}
                </span>
              </div>
              <div className="cattle-info">
                <h4>{cow.name}</h4>
                <p className="cattle-tag">#{cow.id}</p>
                <p className="cattle-breed">{cow.breed}</p>
                <div className="cattle-details">
                  <span>Age: {cow.age}</span>
                  <span>Weight: {cow.weight}</span>
                </div>
                <div className="cattle-status">
                  <span className={getInsuranceStatusBadge(cow.insuranceStatus)}>
                    {cow.insuranceStatus.replace('_', ' ').charAt(0).toUpperCase() + 
                     cow.insuranceStatus.replace('_', ' ').slice(1)}
                  </span>
                  {cow.policyId && (
                    <small>Policy: {cow.policyId}</small>
                  )}
                </div>
                <div className="cattle-actions">
                  <button 
                    className="btn btn-secondary"
                    onClick={() => handleViewDetails(cow)}
                    style={{ marginRight: '8px', padding: '6px 12px', fontSize: '12px' }}
                  >
                    👁️ View
                  </button>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleEditCattle(cow.id)}
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                  >
                    ✏️ Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Cattle Form */}
      {showAddForm && (
        <div className="modal-overlay" onClick={() => setShowAddForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Cattle</h3>
              <button 
                className="modal-close"
                onClick={() => setShowAddForm(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <form className="add-cattle-form">
                <div className="form-group">
                  <label>Name</label>
                  <input type="text" placeholder="Enter cattle name" />
                </div>
                <div className="form-group">
                  <label>Breed</label>
                  <select>
                    <option>Select Breed</option>
                    <option>Holstein Friesian</option>
                    <option>Jersey</option>
                    <option>Gir</option>
                    <option>Sahiwal</option>
                    <option>Red Sindhi</option>
                  </select>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Age (years)</label>
                    <input type="number" placeholder="Age" />
                  </div>
                  <div className="form-group">
                    <label>Weight (kg)</label>
                    <input type="number" placeholder="Weight" />
                  </div>
                </div>
                <div className="form-group">
                  <label>Photo</label>
                  <input type="file" accept="image/*" />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowAddForm(false)}>
                Cancel
              </button>
              <button className="btn btn-primary">
                Add Cattle
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cattle Details Modal */}
      {selectedCattle && (
        <div className="modal-overlay" onClick={() => setSelectedCattle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Cattle Details - {selectedCattle.name}</h3>
              <button 
                className="modal-close"
                onClick={() => setSelectedCattle(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="cattle-detail-view">
                <div className="cattle-detail-photo">
                  <img src={selectedCattle.photo} alt={selectedCattle.name} />
                </div>
                <div className="cattle-detail-info">
                  <div className="detail-row">
                    <strong>Name:</strong> {selectedCattle.name}
                  </div>
                  <div className="detail-row">
                    <strong>Tag ID:</strong> {selectedCattle.id}
                  </div>
                  <div className="detail-row">
                    <strong>Breed:</strong> {selectedCattle.breed}
                  </div>
                  <div className="detail-row">
                    <strong>Age:</strong> {selectedCattle.age}
                  </div>
                  <div className="detail-row">
                    <strong>Weight:</strong> {selectedCattle.weight}
                  </div>
                  <div className="detail-row">
                    <strong>Health Status:</strong> {selectedCattle.healthStatus}
                  </div>
                  <div className="detail-row">
                    <strong>Last Vaccination:</strong> {selectedCattle.lastVaccination}
                  </div>
                  <div className="detail-row">
                    <strong>Insurance Status:</strong> 
                    <span className={getInsuranceStatusBadge(selectedCattle.insuranceStatus)} style={{ marginLeft: '8px' }}>
                      {selectedCattle.insuranceStatus.replace('_', ' ').charAt(0).toUpperCase() + 
                       selectedCattle.insuranceStatus.replace('_', ' ').slice(1)}
                    </span>
                  </div>
                  {selectedCattle.policyId && (
                    <div className="detail-row">
                      <strong>Policy ID:</strong> {selectedCattle.policyId}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedCattle(null)}>
                Close
              </button>
              <button className="btn btn-primary" onClick={() => handleEditCattle(selectedCattle.id)}>
                Edit Cattle
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCattle; 