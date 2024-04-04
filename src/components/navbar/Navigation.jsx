// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// import "./Navigation.css";
// import usersData from '../../config.json';
// import { useState } from "react";


// function Navigation() {
//     const [username, setUsername] = useState('');
//     const users = usersData.users;

 
 
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark">
//       <a className="navbar-brand" href="/" >
//          LMS
//        </a>
      
//       <Link to="/" className="navbar-brand">
     
//       </Link>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNavDropdown"
//         aria-controls="navbarNavDropdown"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse main-nav" id="navbarNavDropdown">
//         <ul className="navbar-nav mx-auto">
//           <li className="nav-item">
//             <Link to="/">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Home&nbsp; &nbsp;</Link>
//           </li>
          
//           <li className="nav-item">
//             <Link to="/about">About Us </Link>
//           </li>
//         </ul>
//         <div className="ml-auto">
 
        
//    <>
//    <ul className="navbar-nav">
//      <li className="nav-item">
      
//      <p style={{margin:'20px'}}> Hi, <em>{ users.username}</em></p>
//      </li>
//      <li className="nav-item">
//      <Link to="/">
//        <button  style={{marginRight:'20px'}}  className="btn btn-outline-light">Logout</button>
//      </Link>
//      </li>
//      </ul>
//      </>
 
        
//          </div>
//       </div>
//     </nav>
//   );
// }
 
// export default Navigation;
