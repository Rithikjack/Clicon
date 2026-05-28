import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';

import avatarImg from '../../assets/Avatar.png'; // ← your avatar image

const inputStyle = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    fontSize: '13px',
    fontFamily: "'Public Sans', sans-serif",
    '& fieldset': { borderColor: '#e0e0e0' },
    '&:hover fieldset': { borderColor: '#FA8232' },
    '&.Mui-focused fieldset': { borderColor: '#FA8232' },
  },
  '& .MuiInputLabel-root': {
    fontSize: '13px',
    fontFamily: "'Public Sans', sans-serif",
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#FA8232',
  },
};

const SectionTitle = ({ title }) => (
  <Typography
    sx={{
      fontWeight: 700,
      fontSize: '14px',
      color: '#1a1a2e',
      mb: 2.5,
      pb: 1.5,
      borderBottom: '1px solid #e0e0e0',
      fontFamily: "'Public Sans', sans-serif",
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    }}
  >
    {title}
  </Typography>
);

const SettingsPage = () => {
  const navigate = useNavigate();

  const [showCurrent, setShowCurrent]   = useState(false);
  const [showNew, setShowNew]           = useState(false);
  const [showConfirm, setShowConfirm]   = useState(false);

  const [account, setAccount] = useState({
    displayName:    'Kevin',
    username:       'Display name',
    fullName:       'Kevin Gilbert',
    email:          'Kevin.gilbert@gmail.com',
    secondaryEmail: 'kevin12345@gmail.com',
    phone:          '+1-202-555-0118',
    country:        'Bangladesh',
    state:          'Dhaka',
    zipCode:        '1207',
    companyName:    '',
  });

  const [billing, setBilling] = useState({
    firstName:   'Kevin',
    lastName:    'Gilbert',
    companyName: '',
    address:     'Road No: 13/x, House no: 1320/C, Flat No: 5D',
    country:     'Bangladesh',
    region:      '',
    city:        'Dhaka',
    zipCode:     '1207',
    email:       'kevin12345@gmail.com',
    phone:       '+1-202-555-0118',
  });

  const [shipping, setShipping] = useState({
    firstName:   'Kevin',
    lastName:    'Gilbert',
    companyName: '',
    address:     'Road No: 13/x, House no: 1320/C, Flat No: 5D',
    country:     'Bangladesh',
    region:      '',
    city:        'Dhaka',
    zipCode:     '1207',
    email:       'kevin12345@gmail.com',
    phone:       '+1-202-555-0118',
  });

  const [password, setPassword] = useState({
    current: '',
    newPass: '',
    confirm: '',
  });

  return (
    <Box sx={{ fontFamily: "'Public Sans', sans-serif" }}>

      {/* ── Account Setting ── */}
      <Box
        sx={{
          backgroundColor: '#fff',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          p: 3,
          mb: 3,
        }}
      >
        <SectionTitle title="Account Setting" />

        {/* Avatar Row */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
          <Box sx={{ position: 'relative' }}>
            <Box
              component="img"
              src={avatarImg}
              alt="Avatar"
              sx={{ width: 70, height: 70, borderRadius: '50%', objectFit: 'cover', border: '2px solid #e0e0e0' }}
            />
            <IconButton
              size="small"
              sx={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                backgroundColor: '#FA8232',
                color: '#fff',
                width: '22px',
                height: '22px',
                '&:hover': { backgroundColor: '#d44d20' },
              }}
            >
              <PhotoCameraOutlinedIcon sx={{ fontSize: '13px' }} />
            </IconButton>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 600, fontSize: '14px', fontFamily: "'Public Sans', sans-serif" }}>
              Kevin Gilbert
            </Typography>
            <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
              kevin12345@gmail.com
            </Typography>
          </Box>
        </Box>

        {/* Form Fields */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          <TextField
            label="Display Name"
            value={account.displayName}
            onChange={(e) => setAccount({ ...account, displayName: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
          <TextField
            label="Username"
            value={account.username}
            onChange={(e) => setAccount({ ...account, username: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
          <TextField
            label="Full Name"
            value={account.fullName}
            onChange={(e) => setAccount({ ...account, fullName: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
          <TextField
            label="Email"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
          <TextField
            label="Secondary Email"
            value={account.secondaryEmail}
            onChange={(e) => setAccount({ ...account, secondaryEmail: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
          <TextField
            label="Phone Number"
            value={account.phone}
            onChange={(e) => setAccount({ ...account, phone: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
          <TextField
            label="Country/Region"
            value={account.country}
            onChange={(e) => setAccount({ ...account, country: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
          <TextField
            label="Company Name (Optional)"
            value={account.companyName}
            onChange={(e) => setAccount({ ...account, companyName: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />

          {/* State + Zip in one row */}
          <TextField
            label="States"
            value={account.state}
            onChange={(e) => setAccount({ ...account, state: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
          <TextField
            label="Zip Code"
            value={account.zipCode}
            onChange={(e) => setAccount({ ...account, zipCode: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: '#FA8232',
            color: '#fff',
            fontWeight: 700,
            fontSize: '13px',
            fontFamily: "'Public Sans', sans-serif",
            px: 3,
            py: 1.2,
            borderRadius: '4px',
            boxShadow: 'none',
            textTransform: 'uppercase',
            '&:hover': { backgroundColor: '#d44d20', boxShadow: 'none' },
          }}
        >
          Save Changes
        </Button>
      </Box>

      {/* ── Billing & Shipping Address ── */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3, mb: 3 }}>

        {/* Billing Address */}
        <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3 }}>
          <SectionTitle title="Billing Address" />
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField label="First Name"          value={billing.firstName}   onChange={(e) => setBilling({ ...billing, firstName: e.target.value })}   size="small" fullWidth sx={inputStyle} />
            <TextField label="Last Name"           value={billing.lastName}    onChange={(e) => setBilling({ ...billing, lastName: e.target.value })}    size="small" fullWidth sx={inputStyle} />
            <TextField label="Company Name (Optional)" value={billing.companyName} onChange={(e) => setBilling({ ...billing, companyName: e.target.value })} size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="Address"             value={billing.address}     onChange={(e) => setBilling({ ...billing, address: e.target.value })}     size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="Country"             value={billing.country}     onChange={(e) => setBilling({ ...billing, country: e.target.value })}     size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="Region/State"        value={billing.region}      onChange={(e) => setBilling({ ...billing, region: e.target.value })}      size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="City"                value={billing.city}        onChange={(e) => setBilling({ ...billing, city: e.target.value })}        size="small" fullWidth sx={inputStyle} />
            <TextField label="Zip Code"            value={billing.zipCode}     onChange={(e) => setBilling({ ...billing, zipCode: e.target.value })}     size="small" fullWidth sx={inputStyle} />
            <TextField label="Email"               value={billing.email}       onChange={(e) => setBilling({ ...billing, email: e.target.value })}       size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="Phone Number"        value={billing.phone}       onChange={(e) => setBilling({ ...billing, phone: e.target.value })}       size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#FA8232',
              color: '#fff',
              fontWeight: 700,
              fontSize: '13px',
              fontFamily: "'Public Sans', sans-serif",
              px: 3,
              py: 1.2,
              borderRadius: '4px',
              boxShadow: 'none',
              textTransform: 'uppercase',
              '&:hover': { backgroundColor: '#d44d20', boxShadow: 'none' },
            }}
          >
            Save Changes
          </Button>
        </Box>

        {/* Shipping Address */}
        <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3 }}>
          <SectionTitle title="Shipping Address" />
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
            <TextField label="First Name"          value={shipping.firstName}   onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}   size="small" fullWidth sx={inputStyle} />
            <TextField label="Last Name"           value={shipping.lastName}    onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}    size="small" fullWidth sx={inputStyle} />
            <TextField label="Company Name (Optional)" value={shipping.companyName} onChange={(e) => setShipping({ ...shipping, companyName: e.target.value })} size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="Address"             value={shipping.address}     onChange={(e) => setShipping({ ...shipping, address: e.target.value })}     size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="Country"             value={shipping.country}     onChange={(e) => setShipping({ ...shipping, country: e.target.value })}     size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="Region/State"        value={shipping.region}      onChange={(e) => setShipping({ ...shipping, region: e.target.value })}      size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="City"                value={shipping.city}        onChange={(e) => setShipping({ ...shipping, city: e.target.value })}        size="small" fullWidth sx={inputStyle} />
            <TextField label="Zip Code"            value={shipping.zipCode}     onChange={(e) => setShipping({ ...shipping, zipCode: e.target.value })}     size="small" fullWidth sx={inputStyle} />
            <TextField label="Email"               value={shipping.email}       onChange={(e) => setShipping({ ...shipping, email: e.target.value })}       size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
            <TextField label="Phone Number"        value={shipping.phone}       onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}       size="small" fullWidth sx={inputStyle} style={{ gridColumn: 'span 2' }} />
          </Box>
          <Button
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: '#FA8232',
              color: '#fff',
              fontWeight: 700,
              fontSize: '13px',
              fontFamily: "'Public Sans', sans-serif",
              px: 3,
              py: 1.2,
              borderRadius: '4px',
              boxShadow: 'none',
              textTransform: 'uppercase',
              '&:hover': { backgroundColor: '#d44d20', boxShadow: 'none' },
            }}
          >
            Save Changes
          </Button>
        </Box>
      </Box>

      {/* ── Change Password ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3 }}>
        <SectionTitle title="Change Password" />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: '100%' }}>

          {/* Current Password */}
          <TextField
            label="Current Password"
            type={showCurrent ? 'text' : 'password'}
            value={password.current}
            onChange={(e) => setPassword({ ...password, current: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowCurrent(!showCurrent)} size="small">
                    {showCurrent
                      ? <VisibilityOffOutlinedIcon sx={{ fontSize: '18px', color: '#777' }} />
                      : <VisibilityOutlinedIcon   sx={{ fontSize: '18px', color: '#777' }} />
                    }
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* New Password */}
          <TextField
            label="New Password"
            type={showNew ? 'text' : 'password'}
            placeholder="8+ characters"
            value={password.newPass}
            onChange={(e) => setPassword({ ...password, newPass: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowNew(!showNew)} size="small">
                    {showNew
                      ? <VisibilityOffOutlinedIcon sx={{ fontSize: '18px', color: '#777' }} />
                      : <VisibilityOutlinedIcon   sx={{ fontSize: '18px', color: '#777' }} />
                    }
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {/* Confirm Password */}
          <TextField
            label="Confirm Password"
            type={showConfirm ? 'text' : 'password'}
            value={password.confirm}
            onChange={(e) => setPassword({ ...password, confirm: e.target.value })}
            size="small"
            fullWidth
            sx={inputStyle}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowConfirm(!showConfirm)} size="small">
                    {showConfirm
                      ? <VisibilityOffOutlinedIcon sx={{ fontSize: '18px', color: '#777' }} />
                      : <VisibilityOutlinedIcon   sx={{ fontSize: '18px', color: '#777' }} />
                    }
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            backgroundColor: '#FA8232',
            color: '#fff',
            fontWeight: 700,
            fontSize: '13px',
            fontFamily: "'Public Sans', sans-serif",
            px: 3,
            py: 1.2,
            borderRadius: '4px',
            boxShadow: 'none',
            textTransform: 'uppercase',
            '&:hover': { backgroundColor: '#d44d20', boxShadow: 'none' },
          }}
        >
          Change Password
        </Button>
      </Box>

    </Box>
  );
};

export default SettingsPage;