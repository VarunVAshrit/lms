import React, { useState, useEffect } from 'react';
import { Button, Container, TextField, Typography, Checkbox } from '@mui/material';
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
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();
    const [browserUID, setBrowserUID] = useState('');
    const user = usersData.users.find(user => user.username === username && user.password === password);

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
            toast.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
            return;
        }

        // If all validations pass, proceed with login
        const userData = {
            username: username,
            password: password,
            isAdmin: isAdmin,
            browserUID: browserUID
        };
        console.log('Logged in as:', username);
        console.log("browser id", browserUID)


        if (user) {
            console.log('Logged in as:', user.username);
            toast.success('Login successful!');

            const redirectPath = isAdmin ? '/admindashboard' : '/employeedashboard';
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
