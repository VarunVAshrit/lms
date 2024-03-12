import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import './Home.css';

const Home = () => {
    return (
        <div className='home-main-div'>
            <div className='home'>
                <h3>Welcome to Leave Management System.</h3>
               
                <Link to={'/login'}>
                    <button className="login-button">Login</button>
                </Link>
                
                <Link to={'/signup'}>
                    <button className="signup-button">Sign Up</button>
                </Link>
               
            </div>
        </div>
    );
};

export default Home;
