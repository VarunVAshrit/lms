import React, { useState, useEffect } from 'react';
import { Button, TextField, Typography, Checkbox } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import usersData from '../../config.json';
import { emailRegex, passwordRegex } from '../../utils/regex/Validation';
import Fingerprint2 from 'fingerprintjs2';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // Initialize isAdmin state to false
    const navigate = useNavigate();
    const [browserUID, setBrowserUID] = useState('');
    const users = usersData.users;

    useEffect(() => {
        const getBrowserUID = async () => {
            try {
                const components = await Fingerprint2.getPromise();
                const values = components.map(component => component.value);
                const browserUID = Fingerprint2.x64hash128(values.join(''), 31);
                setBrowserUID(browserUID);
            } catch (error) {
                console.error('Error fetching browser UID:', error);
            }
        };

        getBrowserUID();
    }, []);

    // Check if the user is an admin based on the user's data
    useEffect(() => {
        const user = users.find(user => user.username === username);
        if (user) {
            setIsAdmin(user.isAdmin);
        }
    }, [username, users]);

    const handleLogin = () => {
        if (!username || !password) {
            toast.error('All fields are mandatory to fill');
            return;
        }
    
        // Validate email
        if (!emailRegex.test(username)) {
            toast.error('Please enter a valid Outlook email address');
            return;
        }
    
        // Validate password
        if (!passwordRegex.test(password)) {
            toast.error('Incorrect Password');
            return;
        }
    
        // If isAdmin checkbox is checked but the user is not an admin, show error message
        if (isAdmin && !users.find(user => user.username === username)?.isAdmin) {
            toast.error('You are not authorized as an admin');
            return;
        }
    
        // If all validations pass, proceed with login
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            console.log('Logged in as:', user.username);
            toast.success('Login successful!');
    
            const redirectPath = user.isAdmin ? '/admindashboard' : '/employeedashboard';
            const userData = { username: user.username, password: user.password, isAdmin: user.isAdmin, browserUID: browserUID };
            navigate(redirectPath, { state: { userData: userData, username: user.username } });
        } else {
            toast.error('Invalid username or password');
        }
    };
    
    
    return (
        <div className="login-container">
            <Typography variant="h5" className='login-label'>Login</Typography>
            <form className="form" noValidate>
                <TextField
                    label="Username (Outlook Email)"
                    type="email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <div className='isAdmin-checkbox'>
                    <Checkbox
                        checked={isAdmin}
                        onChange={(e) => setIsAdmin(e.target.checked)}
                        color="primary"
                    />
                    <label>Is Admin</label>
                </div>
                <Typography variant="body1">
                    First Time? <Link to="/signup">Sign Up</Link>
                </Typography>
                <Button
                    className="button"
                    variant="contained"
                    onClick={handleLogin}
                    fullWidth
                >
                    Login
                </Button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;
