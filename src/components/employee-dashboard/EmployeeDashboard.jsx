import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './EmployeeDashboard.css';
import usersData from '../../config.json';
import LeaveApplicationPopup from './LeaveApplicationPopup';

const EmployeeDashboard = () => {
  const location = useLocation();
  const users = usersData.users;
  const { username } = location.state || {};
  const [leaveBalance, setLeaveBalance] = useState(0);
  const [appliedLeaves, setAppliedLeaves] = useState([]);
  const [showLeaveTable, setShowLeaveTable] = useState(false); // State to control table visibility
  const [showLeavePopup, setShowLeavePopup] = useState(false); // State to control popup visibility

  useEffect(() => {
    const user = usersData.users.find(user => user.username === username);
    if (user && !user.isAdmin) {
      setLeaveBalance(user.leaveBalance || 0);
      setAppliedLeaves(user.appliedLeaves || []);
    }
    toast.success('Login is successful.');
  }, [username]);

  const handleApplyLeave = () => {
    // Handle applying for leave logic here
    setShowLeavePopup(true); // Show leave application popup
  };

  const toggleLeaveTable = () => {
    setShowLeaveTable(!showLeaveTable); // Toggle table visibility
  };

  const toggleLeavePopup = () => {
    setShowLeavePopup(!showLeavePopup); // Toggle popup visibility
  };

  return (
    <div className="dashboard-container">
      <div className="card">
        <div className="card-content">
          <div className="card-title">
            Welcome, {username}!
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-content"><center>
          <div className="card-title">
            Leave Balance: {leaveBalance} days
          </div>
          <button className="applied-leaves-button" onClick={toggleLeaveTable}>
            Applied Leaves
          </button><br />
          {showLeaveTable && (
            <table>
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appliedLeaves.length > 0 ? (
                  appliedLeaves.map((leave, index) => (
                    <tr key={index}>
                      <td>{leave.fromDate}</td>
                      <td>{leave.toDate}</td>
                      <td><button onClick={() => handleCancelLeave(index)}>Cancel</button></td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="3">No leaves applied</td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
          <button onClick={handleApplyLeave} className="apply-leave-button">
            Apply for Leave
          </button>
        </center></div>
      </div>
      {showLeavePopup && (
        <LeaveApplicationPopup
          leaveBalance={leaveBalance}
          adminName={usersData.adminName} // Assuming adminName is stored in config.json
          onClose={toggleLeavePopup}
        />
      )}
    </div>
  );
};

export default EmployeeDashboard;
