import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Breadcrumbs,
  Link,
  InputAdornment,
  Divider,
  Stepper,
  Step,
  StepLabel,
  StepConnector,
  stepConnectorClasses,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

// ── Custom orange stepper connector ──
const OrangeConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: { top: 22 },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: { borderColor: '#FA8232' },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: { borderColor: '#FA8232' },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: '#E4E7E9',
    borderTopWidth: 2,
    borderRadius: 1,
  },
}));

// ── Custom step icon ──
const StepIconRoot = styled('div')(({ ownerState }) => ({
  width: 44,
  height: 44,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: ownerState.completed || ownerState.active ? '#FA8232' : '#F2F4F5',
  border: `2px solid ${ownerState.completed || ownerState.active ? '#FA8232' : '#E4E7E9'}`,
  color: ownerState.completed || ownerState.active ? '#fff' : '#929FA5',
  fontSize: '20px',
}));

const stepIcons = [
  <ShoppingBagOutlinedIcon fontSize="small" />,
  <InventoryOutlinedIcon fontSize="small" />,
  <LocalShippingOutlinedIcon fontSize="small" />,
  <LocationOnOutlinedIcon fontSize="small" />,
];

function CustomStepIcon({ active, completed, icon }) {
  return (
    <StepIconRoot ownerState={{ active, completed }}>
      {stepIcons[icon - 1]}
    </StepIconRoot>
  );
}

const trackingSteps = ['Order Placed', 'Order Packed', 'Order Shipped', 'Order Delivered'];

// ── Mock order data ──
const mockOrders = {
  'ORD-1001': {
    id: 'ORD-1001',
    date: 'May 18, 2026',
    status: 2, // 0-based active step index
    product: 'Canon EOS 1500D DSLR Camera',
    estimated: 'May 25, 2026',
    address: '4517 Washington Ave, Manchester, KY 39495',
  },
  'ORD-1002': {
    id: 'ORD-1002',
    date: 'May 20, 2026',
    status: 3,
    product: 'Simple Mobile 5G LTE Galaxy 12 Mini',
    estimated: 'May 22, 2026',
    address: '221B Baker Street, London, UK',
  },
};

const inputSx = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '6px',
    fontSize: '14px',
    bgcolor: '#fff',
    '& fieldset': { borderColor: '#E4E7E9' },
    '&:hover fieldset': { borderColor: '#2DA5F3' },
    '&.Mui-focused fieldset': { borderColor: '#2DA5F3', borderWidth: '1.5px' },
  },
  '& .MuiInputLabel-root': { fontSize: '13px', color: '#929FA5' },
  '& .MuiInputLabel-root.Mui-focused': { color: '#2DA5F3' },
};

const TrackOrderPage = () => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = () => {
    setError('');
    setResult(null);
    const trimmed = orderId.trim().toUpperCase();
    if (!trimmed || !email.trim()) {
      setError('Please enter both Order ID and Billing Email.');
      return;
    }
    const found = mockOrders[trimmed];
    if (found) {
      setResult(found);
    } else {
      setError('No order found with that ID. Try ORD-1001 or ORD-1002.');
    }
  };

  return (
    <Box sx={{ bgcolor: '#F2F4F5', minHeight: '80vh' }}>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: '#fff', px: { xs: 2, md: 6 }, py: 1.5, borderBottom: '1px solid #E4E7E9' }}>
        <Breadcrumbs
          separator={<NavigateNextIcon sx={{ fontSize: '14px', color: '#929FA5' }} />}
        >
          <Link href="/" underline="hover" sx={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '13px', color: '#5F6C73', '&:hover': { color: '#FA8232' } }}>
            <HomeOutlinedIcon sx={{ fontSize: '15px' }} /> Home
          </Link>
          <Link href="#" underline="hover" sx={{ fontSize: '13px', color: '#5F6C73', '&:hover': { color: '#FA8232' } }}>
            Pages
          </Link>
          <Typography sx={{ fontSize: '13px', color: '#FA8232', fontWeight: 500 }}>
            Track Order
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* ── Main Content ── */}
      <Box sx={{ px: { xs: 2, md: 6 }, py: 4 }}>

        {/* Track Form Card */}
        <Paper
          variant="outlined"
          sx={{
            borderRadius: '8px',
            borderColor: '#E4E7E9',
            borderStyle: 'dashed',
            p: { xs: 3, md: 4 },
            mb: 3,
            bgcolor: '#fff',
          }}
        >
          <Typography sx={{ fontSize: '22px', fontWeight: 700, color: '#191C1F', mb: 1 }}>
            Track Order
          </Typography>
          <Typography sx={{ fontSize: '13px', color: '#5F6C73', lineHeight: 1.7, mb: 3, maxWidth: '520px' }}>
            To track your order please enter your order ID in the input field below and press the "Track Order" button. this was given to you on your receipt and in the confirmation email you should have received.
          </Typography>

          {/* Inputs */}
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 1.5 }}>
            <Box sx={{ flex: 1, minWidth: '220px' }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#191C1F', mb: 0.75 }}>
                Order ID
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="ID..."
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                sx={inputSx}
              />
            </Box>
            <Box sx={{ flex: 1, minWidth: '220px' }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 500, color: '#191C1F', mb: 0.75 }}>
                Billing Email
              </Typography>
              <TextField
                fullWidth
                size="small"
                placeholder="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
                sx={inputSx}
              />
            </Box>
          </Box>

          {/* Helper text */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0 }}>
            <InfoOutlinedIcon sx={{ fontSize: '14px', color: '#2DA5F3' }} />
            <Typography sx={{ fontSize: '12px', color: '#5F6C73' }}>
              Order ID that we sended to your in your email address.
            </Typography>
          </Box>

          {/* Error */}
          {error && (
            <Typography sx={{ fontSize: '12px', color: '#EF4444', mt: 1.5 }}>
              {error}
            </Typography>
          )}
        </Paper>

        {/* Track Button */}
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={handleTrack}
          sx={{
            height: '48px',
            px: 4,
            bgcolor: '#FA8232',
            color: '#fff',
            fontWeight: 700,
            fontSize: '14px',
            letterSpacing: '0.5px',
            borderRadius: '6px',
            boxShadow: 'none',
            mb: 4,
            '&:hover': { bgcolor: '#e07020', boxShadow: 'none' },
          }}
        >
          TRACK ORDER
        </Button>

        {/* ── Result Card ── */}
        {result && (
          <Paper
            elevation={0}
            sx={{
              borderRadius: '8px',
              border: '1px solid #E4E7E9',
              p: { xs: 3, md: 4 },
              bgcolor: '#fff',
            }}
          >
            {/* Order meta */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2, mb: 3 }}>
              <Box>
                <Typography sx={{ fontSize: '12px', color: '#929FA5', mb: 0.25 }}>Order ID</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 700, color: '#191C1F' }}>{result.id}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '12px', color: '#929FA5', mb: 0.25 }}>Order Date</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#191C1F' }}>{result.date}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '12px', color: '#929FA5', mb: 0.25 }}>Product</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#191C1F' }}>{result.product}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '12px', color: '#929FA5', mb: 0.25 }}>Est. Delivery</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#FA8232' }}>{result.estimated}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '12px', color: '#929FA5', mb: 0.25 }}>Delivery Address</Typography>
                <Typography sx={{ fontSize: '14px', fontWeight: 600, color: '#191C1F' }}>{result.address}</Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 4, borderColor: '#F0F2F3' }} />

            {/* Stepper */}
            <Stepper
              alternativeLabel
              activeStep={result.status}
              connector={<OrangeConnector />}
            >
              {trackingSteps.map((label, idx) => (
                <Step key={label} completed={idx <= result.status}>
                  <StepLabel
                    StepIconComponent={CustomStepIcon}
                    sx={{
                      '& .MuiStepLabel-label': {
                        fontSize: '13px',
                        fontWeight: idx <= result.status ? 600 : 400,
                        color: idx <= result.status ? '#191C1F' : '#929FA5',
                        mt: 1,
                      },
                    }}
                  >
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>

            {/* Status message */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 3 }}>
              <CheckCircleIcon sx={{ color: '#2DB224', fontSize: '18px' }} />
              <Typography sx={{ fontSize: '13px', color: '#2DB224', fontWeight: 600 }}>
                {result.status === 3
                  ? 'Your order has been delivered!'
                  : result.status === 2
                  ? 'Your order is on the way!'
                  : result.status === 1
                  ? 'Your order is being packed.'
                  : 'Order placed successfully!'}
              </Typography>
            </Box>
          </Paper>
        )}
      </Box>
    </Box>
  );
};

export default TrackOrderPage;