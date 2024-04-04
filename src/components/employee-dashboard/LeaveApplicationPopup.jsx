import React from 'react';
import './LeaveApplicationPopup.css';

const LeaveApplicationPopup = ({ leaveBalance, adminName, onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-header">
          <span className="popup-title">Apply for Leave</span>
          
        </div>
        <div className="popup-body">
          <div className="form-group">
            <label htmlFor="fromDate">From:</label>
            <input type="date" id="fromDate" name="fromDate" />
          </div>
          <div className="form-group">
            <label htmlFor="toDate">To:</label>
            <input type="date" id="toDate" name="toDate" />
          </div>
          <div className="form-group">
            <label htmlFor="leaveType">Type of Leave:</label>
            <select id="leaveType" name="leaveType">
              <option value="privilege">Privilege</option>
              <option value="sick">Sick</option>
              <option value="vacation">Vacation</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <textarea id="reason" name="reason" rows="4" cols="50"></textarea>
          </div>
          <div className="leave-balance">
            Leave Balance: {leaveBalance} days
          </div>
          <div className="admin-name">
            Approver : 
          </div>
          <div className="form-actions">
            <button className="submit-button">Submit for Approval</button>
            <button className="close-button" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplicationPopup;
