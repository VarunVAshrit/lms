import React from 'react';
import { toast } from 'react-toastify';
import './LeaveApprovalsPopup.css';

const LeaveApprovalsPopup = ({ leaveApplications, onClose, onAccept, onReject }) => {
  const handleAccept = (application) => {
    onAccept(application);
    toast.success(`Leave application accepted for ${application.employee}`);
  };

  const handleReject = (application) => {
    onReject(application);
    toast.error(`Leave application rejected for ${application.employee}`);
  };

  return (
    <div className="popup-container">
      <div className="popup-card">
        <div className="card-title">
          <h4>Leave Approvals</h4>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Employee</th>
                <th>From</th>
                <th>To</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveApplications.map((application, index) => (
                <tr key={index}>
                  <td>{application.employee}</td>
                  <td>{application.fromDate}</td>
                  <td>{application.toDate}</td>
                  <td>
                    <button className="accept-button" onClick={() => handleAccept(application)}>Accept</button>
                    <button className="reject-button" onClick={() => handleReject(application)}>Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="popup-buttons">
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default LeaveApprovalsPopup;
