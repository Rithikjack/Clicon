import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Container,
    TextField,
    Button,
    Box,
    Link,
    Divider
} from '@mui/material';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { useNavigate } from 'react-router-dom';
import Navbar from '../../../Components/Home/Navbar'
import Footer from '../../../Components/Home/BlackFooter'



export default function Forgot_Password() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const validateEmail = (value) => {
        if (!value.trim()) {
            return 'Email address is required';
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'Please enter valid email address';
        }

        return '';
    };

    const handleSubmit = () => {
        const validationError = validateEmail(email);

        setError(validationError);

        if (!validationError) {
            setSuccess(true);

            setTimeout(() => {
                setSuccess(false);
            }, 3000);

            console.log('Reset password for:', email);
        }
    };

    return (
        <>
            <Navbar />
            <Container
                maxWidth="lg"
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                }}
            >
                <Card
                    sx={{
                        width: '420px',
                        border: '1px solid #E4E7E9',
                        borderRadius: '6px',
                        boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.18)',
                        p: 2,
                        backgroundColor: '#fff'
                    }}
                >
                    <CardContent>

                        {/* Title */}
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontWeight: 700,
                                fontSize: '32px',
                                color: '#191C1F',
                                mb: 2,
                                fontFamily: 'Public Sans, sans-serif'
                            }}
                        >
                            Forget Password
                        </Typography>

                        {/* Description */}
                        <Typography
                            sx={{
                                textAlign: 'center',
                                color: '#5F6C72',
                                fontSize: '14px',
                                lineHeight: '22px',
                                mb: 4,
                                fontFamily: 'Public Sans, sans-serif'
                            }}
                        >
                            Enter the email address or mobile phone number associated with your Clicon account.
                        </Typography>

                        {/* Email Label */}
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#191C1F',
                                mb: 1,
                                fontFamily: 'Public Sans, sans-serif'
                            }}
                        >
                            Email Address
                        </Typography>

                        {/* Email Field */}
                        <TextField
                            fullWidth
                            size="small"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setError('');
                            }}
                            error={Boolean(error)}
                            helperText={error}
                            sx={{
                                mb: 3,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: '4px',
                                }
                            }}
                        />

                        {/* Success Message */}
                        {success && (
                            <Typography
                                sx={{
                                    color: 'green',
                                    fontSize: '13px',
                                    mb: 2
                                }}
                            >
                                Password reset code sent successfully!
                            </Typography>
                        )}

                        {/* Send Code Button */}
                        <Button
                            fullWidth
                            variant="contained"
                            endIcon={<ArrowForwardIcon />}
                            onClick={handleSubmit}
                            sx={{
                                height: '48px',
                                backgroundColor: '#FA8232',
                                color: '#fff',
                                fontWeight: 700,
                                fontSize: '14px',
                                boxShadow: 'none',
                                mb: 3,
                                '&:hover': {
                                    backgroundColor: '#F97316',
                                    boxShadow: 'none'
                                }
                            }}
                        >
                            SEND CODE
                        </Button>

                        {/* Sign In */}
                        <Box sx={{ display: 'flex', mb: 1 }}>
                            <Typography sx={{ color: '#5F6C72', fontSize: '14px' }}>
                                Already have account?
                            </Typography>

                            <Link
                                component="button"
                                onClick={() => navigate('/signin')}
                                underline="hover"
                                sx={{
                                    ml: 1,
                                    fontSize: '14px',
                                    color: '#2DA5F3',
                                    cursor: 'pointer'
                                }}
                            >
                                Sign In
                            </Link>
                        </Box>

                        {/* Sign Up */}
                        <Box sx={{ display: 'flex', mb: 3 }}>
                            <Typography sx={{ color: '#5F6C72', fontSize: '14px' }}>
                                Don’t have account?
                            </Typography>

                            <Link
                                component="button"
                                onClick={() => navigate('/signin')}
                                underline="hover"
                                sx={{
                                    ml: 1,
                                    fontSize: '14px',
                                    color: '#2DA5F3',
                                    cursor: 'pointer'
                                }}
                            >
                                Sign Up
                            </Link>
                        </Box>

                        <Divider sx={{ mb: 3 }} />

                        {/* Customer Service */}
                        <Typography
                            sx={{
                                color: '#5F6C72',
                                fontSize: '14px',
                                lineHeight: '24px'
                            }}
                        >
                            You may contact{' '}

                            <Link
                                href="https://support.google.com"
                                target="_blank"
                                underline="hover"
                                sx={{
                                    color: '#FA8232',
                                    fontWeight: 500
                                }}
                            >
                                Customer Service
                            </Link>

                            {' '}for help restoring access to your account.
                        </Typography>

                    </CardContent>
                </Card>
            </Container>
            <Footer />
        </>
    );
}