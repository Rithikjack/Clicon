import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Divider,
  Modal,
  Link
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// ── Usage ──────────────────────────────────────────────
// import SignInPopup from './SignInPopup';
//
// const [openSignIn, setOpenSignIn] = useState(false);
//
// <SignInPopup open={openSignIn} onClose={() => setOpenSignIn(false)} />
//
// Trigger it from your Navbar user icon:
// <IconButton onClick={() => setOpenSignIn(true)}>
//   <img src={user} ... />
// </IconButton>
// ────────────────────────────────────────────────────────

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '6px',
    fontSize: '14px',
    '& fieldset': { borderColor: '#E4E7E9' },
    '&:hover fieldset': { borderColor: '#2DA5F3' },
    '&.Mui-focused fieldset': { borderColor: '#2DA5F3', borderWidth: '1.5px' }
  },
  '& .MuiInputLabel-root': { fontSize: '13px', color: '#929FA5' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#2DA5F3' }
};

const SignInPopup = ({ open, onClose }) => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [mode, setMode] = useState('signin'); // 'signin' | 'signup'

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    if (mode === 'signin') {
      console.log('Sign In:', {
        email: form.email,
        password: form.password
      });

      navigate('/login'); // route after login
    } else {
      console.log('Sign Up:', form);

      navigate('/signup'); // optional signup route
    }
  };
  const switchMode = () => {
    setMode((prev) => (prev === 'signin' ? 'signup' : 'signin'));
    setForm({ name: '', email: '', password: '', confirm: '' });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}
    >
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 8px 40px rgba(0,0,0,0.12)',
          width: '380px',
          mt: '140px',
          mr: { xs: 1, md: '60px' },
          outline: 'none',
          overflow: 'hidden'
        }}
      >
        {/* ── Header ── */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            pt: 3,
            pb: 2,
            borderBottom: '1px solid #E4E7E9'
          }}
        >
          <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#191C1F' }}>
            {mode === 'signin' ? 'Sign in to your account' : 'Create an account'}
          </Typography>
          <IconButton size="small" onClick={onClose} sx={{ color: '#929FA5', '&:hover': { color: '#191C1F' } }}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* ── Body ── */}
        <Box sx={{ px: 3, pt: 2.5, pb: 3 }}>

          {/* Name — only for signup */}
          {mode === 'signup' && (
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#191C1F', mb: 0.75 }}>
                Full Name
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange('name')}
                sx={inputSx}
              />
            </Box>
          )}

          {/* Email */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#191C1F', mb: 0.75 }}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter your email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              sx={inputSx}
            />
          </Box>

          {/* Password */}
          <Box sx={{ mb: mode === 'signup' ? 2 : 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.75 }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#191C1F' }}>
                Password
              </Typography>
              {mode === 'signin' && (
                <Link
                  href="#"
                  underline="hover"
                  sx={{ fontSize: '12px', color: '#2DA5F3', fontWeight: 500 }}
                >
                  Forget Password
                </Link>
              )}
            </Box>
            <TextField
              fullWidth
              size="small"
              placeholder="Enter your password"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={handleChange('password')}
              sx={inputSx}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      onClick={() => setShowPassword((s) => !s)}
                      edge="end"
                      sx={{ color: '#929FA5' }}
                    >
                      {showPassword ? <VisibilityOff fontSize="small" /> : <Visibility fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
          </Box>

          {/* Confirm Password — only for signup */}
          {mode === 'signup' && (
            <Box sx={{ mb: 1 }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#191C1F', mb: 0.75 }}>
                Confirm Password
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Re-enter your password"
                type={showPassword ? 'text' : 'password'}
                value={form.confirm}
                onChange={handleChange('confirm')}
                sx={inputSx}
              />
            </Box>
          )}

          {/* Submit Button */}
          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={handleSubmit}
            sx={{
              mt: 2.5,
              mb: 2,
              height: '46px',
              bgcolor: '#FA8232',
              color: '#fff',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.5px',
              borderRadius: '6px',
              boxShadow: 'none',
              '&:hover': { bgcolor: '#e07020', boxShadow: 'none' }
            }}
          >
            {mode === 'signin' ? 'LOGIN' : 'CREATE ACCOUNT'}
          </Button>

          <Divider sx={{ mb: 2, fontSize: '12px', color: '#929FA5' }}>
            {mode === 'signin' ? "Don't have an account?" : 'Already have an account?'}
          </Divider>

          {/* Switch Mode Button */}
          <Button
            fullWidth
            variant="outlined"
            onClick={switchMode}
            sx={{
              height: '44px',
              color: '#FA8232',
              borderColor: '#FA8232',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.5px',
              borderRadius: '6px',
              '&:hover': { bgcolor: '#FFF5EE', borderColor: '#FA8232' }
            }}
          >
            {mode === 'signin' ? 'CREATE ACCOUNT' : 'SIGN IN'}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignInPopup;