import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Checkbox } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import usersData from '../../config.json';
import { emailRegex, passwordRegex } from '../../utils/regex/Validation';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [approverEmail, setApproverEmail] = useState('');
    const navigate = useNavigate();

    const handleRegister = () => {
        // Check if username (email) already exists
        if (!username || !password || !approverEmail) {
            toast.error('All fields are mandatory to fill');
            return;
        }

        const existingUser = usersData.users.find(user => user.username === username);
        if (existingUser) {
            toast.error('Email already exists. Please choose a different one.');
            return;
        }


        // Validate email

        if (!emailRegex.test(username)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // Validate password

        if (!passwordRegex.test(password)) {
            toast.error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
            return;
        }

        // Validate approver email
        if (!emailRegex.test(approverEmail)) {
            toast.error('Please enter a valid approver email address');
            return;
        }

        // If all validations pass, proceed with registration
        const userData = {
            username: username,
            password: password,
            isAdmin: isAdmin,
            approverEmail: approverEmail
        };

        // Redirect based on isAdmin value
        const redirectPath = '/login';
        navigate(redirectPath, { state: { userData: userData } });
    };

    return (
        <div className='signup-container'>
            <Typography variant="h5">Sign Up</Typography>
            <form className="form" noValidate>
                <TextField
                    label="Username (Email)"
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
                <Checkbox
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                    color="primary"
                />
                <label>Is Admin</label>
                <TextField
                    label="Approver Email"
                    type="email"
                    value={approverEmail}
                    onChange={(e) => setApproverEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <Typography variant="body1">
                    Already have an account? <Link to="/login">Login</Link>
                </Typography>
                <Button
                    className="button"
                    variant="contained"
                    onClick={handleRegister}
                >
                    Sign Up
                </Button>
            </form>

            <ToastContainer />
        </div>

    );
};

export default Signup;
