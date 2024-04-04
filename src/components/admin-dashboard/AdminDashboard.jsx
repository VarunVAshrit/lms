// import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import LeaveApprovalsPopup from './LeaveApprovalsPopup'; 
// import usersData from '../../config.json';
// import { Button } from '@mui/material';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   const location = useLocation();
//   const users = usersData.users;
//   const { username } = location.state || {};
//   const [leaveApplications, setLeaveApplications] = useState([]);
//   const [showApprovals, setShowApprovals] = useState(false);

//   useEffect(() => {
//     const user = usersData.users.find(user => user.username === username);
//     if (user && user.isAdmin) {
//       setLeaveApplications(user.leaveApplications || []);
//     }
//     toast.success('Login is successful.');
//   }, [username]);

//   const handleAccept = (application) => {
//     // Handle accept logic here
//     toast.success(`Leave application accepted for ${application.employee}`);
//   };

//   const handleReject = (application) => {
//     // Handle reject logic here
//     toast.error(`Leave application rejected for ${application.employee}`);
//   };

//   const handleClosePopup = () => {
//     setShowApprovals(false);
//   };

//   return (
//     <div className="dashboard-container">
//       <Card className="card">
//         <CardContent>
//           <Typography variant="h6" component="div" className="card-title">
//             Welcome, {username}!
//           </Typography>
//         </CardContent>
//       </Card>
//       <Card className="card" onClick={() => setShowApprovals(true)}>
//         <CardContent>
//           <Button variant="h6" component="div" className="card-title">
//             <b>Approvals ({leaveApplications.length})</b>
//           </Button>
//         </CardContent>
//       </Card>
//       {showApprovals && (
//         <LeaveApprovalsPopup
//           leaveApplications={leaveApplications}
//           onClose={handleClosePopup}
//           onAccept={handleAccept}
//           onReject={handleReject}
//         />
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './AdminDashboard.css'; // Assuming you have defined your styles in AdminDashboard.css
import LeaveApprovalsPopup from './LeaveApprovalsPopup';
import usersData from '../../config.json';

const AdminDashboard = () => {
  const location = useLocation();
  const users = usersData.users;
  const { username } = location.state || {};
  const [leaveApplications, setLeaveApplications] = useState([]);
  const [showApprovals, setShowApprovals] = useState(false);

  useEffect(() => {
    const user = usersData.users.find(user => user.username === username);
    if (user && user.isAdmin) {
      setLeaveApplications(user.leaveApplications || []);
    }
    toast.success('Login is successful.');
  }, [username]);

  const handleAccept = (application) => {
    // Handle accept logic here
    toast.success(`Leave application accepted for ${application.employee}`);
  };

  const handleReject = (application) => {
    // Handle reject logic here
    toast.error(`Leave application rejected for ${application.employee}`);
  };

  const handleClosePopup = () => {
    setShowApprovals(false);
  };

  return (
    <div className="dashboard-container">
      <div className="card">
        <div className="card-content">
          <div className="card-title">
           <b> Welcome, {username}!</b>
          </div>
        </div>
      </div>
      <div className="card" onClick={() => setShowApprovals(true)}>
        <div className="card-content">
          <label className="card-title">
           <center> <b>Approvals ({leaveApplications.length})</b></center>
          </label>
        </div>
      </div>
      {showApprovals && (
        <LeaveApprovalsPopup
          leaveApplications={leaveApplications}
          onClose={handleClosePopup}
          onAccept={handleAccept}
          onReject={handleReject}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
