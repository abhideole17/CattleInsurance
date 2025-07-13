import React, { useState } from 'react';

const InsurancePlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const availablePlans = [
    {
      id: 'PLAN-001',
      name: 'Premium Cattle Care',
      description: 'Comprehensive coverage for high-value cattle with premium features',
      premium: '₹2,500/month',
      duration: '12 months',
      coverage: '₹50,000',
      features: [
        'Medical treatment coverage',
        'Surgery expenses',
        'Accident coverage',
        'Disease treatment',
        'Vaccination support',
        '24/7 vet consultation',
        'Emergency transport'
      ],
      bestFor: 'High-value dairy cattle',
      popularity: 'Most Popular'
    },
    {
      id: 'PLAN-002',
      name: 'Basic Cattle Protection',
      description: 'Essential coverage for regular cattle with basic protection',
      premium: '₹1,800/month',
      duration: '12 months',
      coverage: '₹35,000',
      features: [
        'Medical treatment coverage',
        'Surgery expenses',
        'Accident coverage',
        'Disease treatment',
        'Basic vet consultation'
      ],
      bestFor: 'Regular dairy cattle',
      popularity: null
    },
    {
      id: 'PLAN-003',
      name: 'Economy Cattle Shield',
      description: 'Budget-friendly coverage for basic cattle protection',
      premium: '₹1,200/month',
      duration: '12 months',
      coverage: '₹25,000',
      features: [
        'Medical treatment coverage',
        'Accident coverage',
        'Disease treatment',
        'Emergency support'
      ],
      bestFor: 'Budget-conscious farmers',
      popularity: 'Best Value'
    },
    {
      id: 'PLAN-004',
      name: 'Comprehensive Herd Care',
      description: 'Complete herd management with premium features for multiple cattle',
      premium: '₹3,500/month',
      duration: '12 months',
      coverage: '₹75,000',
      features: [
        'All Premium features',
        'Herd management tools',
        'Breeding support',
        'Nutrition consultation',
        'Market price updates',
        'Insurance for up to 5 cattle'
      ],
      bestFor: 'Large herd owners',
      popularity: 'Premium'
    }
  ];

  const handleViewDetails = (plan) => {
    setSelectedPlan(plan);
  };

  const handleApplyNow = (plan) => {
    setSelectedPlan(plan);
    setShowApplicationForm(true);
  };

  return (
    <div>
      <div className="dashboard-card">
        <div className="card-header">
          <h3 className="card-title">📦 Available Insurance Plans</h3>
          <button className="card-action">📊 Compare Plans</button>
        </div>
        
        <div className="plans-grid">
          {availablePlans.map((plan) => (
            <div key={plan.id} className="plan-card">
              {plan.popularity && (
                <div className="plan-badge">
                  {plan.popularity}
                </div>
              )}
              <div className="plan-header">
                <h4>{plan.name}</h4>
                <p className="plan-description">{plan.description}</p>
              </div>
              <div className="plan-pricing">
                <div className="price">
                  <span className="amount">{plan.premium}</span>
                  <span className="period">per month</span>
                </div>
                <div className="coverage">
                  <strong>Coverage:</strong> {plan.coverage}
                </div>
                <div className="duration">
                  <strong>Duration:</strong> {plan.duration}
                </div>
              </div>
              <div className="plan-features">
                <h5>Features:</h5>
                <ul>
                  {plan.features.slice(0, 4).map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                  {plan.features.length > 4 && (
                    <li className="more-features">+{plan.features.length - 4} more features</li>
                  )}
                </ul>
              </div>
              <div className="plan-suitable">
                <strong>Best for:</strong> {plan.bestFor}
              </div>
              <div className="plan-actions">
                <button 
                  className="btn btn-secondary"
                  onClick={() => handleViewDetails(plan)}
                  style={{ marginRight: '8px' }}
                >
                  👁️ View Details
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleApplyNow(plan)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan Details Modal */}
      {selectedPlan && !showApplicationForm && (
        <div className="modal-overlay" onClick={() => setSelectedPlan(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedPlan.name}</h3>
              <button 
                className="modal-close"
                onClick={() => setSelectedPlan(null)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <div className="plan-detail-view">
                <div className="plan-detail-header">
                  <h4>{selectedPlan.name}</h4>
                  <p>{selectedPlan.description}</p>
                  {selectedPlan.popularity && (
                    <span className="plan-badge">{selectedPlan.popularity}</span>
                  )}
                </div>
                <div className="plan-detail-pricing">
                  <div className="pricing-card">
                    <div className="price-main">{selectedPlan.premium}</div>
                    <div className="price-details">
                      <div><strong>Coverage:</strong> {selectedPlan.coverage}</div>
                      <div><strong>Duration:</strong> {selectedPlan.duration}</div>
                    </div>
                  </div>
                </div>
                <div className="plan-detail-features">
                  <h5>All Features:</h5>
                  <ul>
                    {selectedPlan.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="plan-detail-suitable">
                  <h5>Best For:</h5>
                  <p>{selectedPlan.bestFor}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setSelectedPlan(null)}>
                Close
              </button>
              <button className="btn btn-primary" onClick={() => setShowApplicationForm(true)}>
                Apply for This Plan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && selectedPlan && (
        <div className="modal-overlay" onClick={() => setShowApplicationForm(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Apply for {selectedPlan.name}</h3>
              <button 
                className="modal-close"
                onClick={() => setShowApplicationForm(false)}
              >
                ✕
              </button>
            </div>
            <div className="modal-body">
              <form className="application-form">
                <div className="form-group">
                  <label>Select Cattle</label>
                  <select required>
                    <option value="">Choose cattle to insure</option>
                    <option value="CT-003">Radha (CT-003) - Not Insured</option>
                    <option value="CT-005">New Cattle</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Start Date</label>
                  <input type="date" required />
                </div>
                <div className="form-group">
                  <label>Payment Method</label>
                  <select required>
                    <option value="">Select payment method</option>
                    <option value="monthly">Monthly Payment</option>
                    <option value="quarterly">Quarterly Payment</option>
                    <option value="yearly">Yearly Payment (10% discount)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Additional Notes</label>
                  <textarea 
                    rows="3" 
                    placeholder="Any special requirements or notes..."
                  ></textarea>
                </div>
                <div className="form-group">
                  <label className="checkbox-container">
                    <input type="checkbox" required />
                    <span className="checkmark"></span>
                    I agree to the terms and conditions
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setShowApplicationForm(false)}>
                Cancel
              </button>
              <button className="btn btn-primary">
                Submit Application
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsurancePlans; 