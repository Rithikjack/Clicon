import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';

import SearchIcon from '@mui/icons-material/Search';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LockResetOutlinedIcon from '@mui/icons-material/LockResetOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import supportAgent from '../assets/SupportAgent.jpg';
import callIcon from '../assets/Call-icon.png';
import chatIcon from '../assets/Chat-icon.png';

const categories = [
  { icon: <LocalShippingOutlinedIcon />,  label: 'Track Order' },
  { icon: <LockResetOutlinedIcon />,      label: 'Reset Password' },
  { icon: <CreditCardOutlinedIcon />,     label: 'Payment Option' },
  { icon: <PersonOutlineOutlinedIcon />,  label: 'User & Account' },
  { icon: <FavoriteBorderOutlinedIcon />, label: 'Wishlist & Compare' },
  { icon: <ReceiptLongOutlinedIcon />,    label: 'Shipping & Billing' },
  { icon: <ShoppingCartOutlinedIcon />,   label: 'Shopping Cart & Wallet' },
  { icon: <StorefrontOutlinedIcon />,     label: 'Sell on Clicon' },
];

const popularTopics = [
  [
    'How do I return my item?',
    'What is Clicons Returns Policy?',
    'How long is the refund process?',
  ],
  [
    "What are the 'Delivery Timelines'?",
    "What is 'Discover Your Daraz Campaign 2022'?",
    'What is the Voucher & Gift Offer in this Campaign?',
  ],
  [
    'How to cancel Clicon Order.',
    'Ask the Digital and Device Community',
    'How to change my shop name?',
  ],
];

const CustomerSupportPage = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  return (
    <Box sx={{ fontFamily: "'Public Sans', sans-serif" }}>

      {/* ── Breadcrumb ── */}
      <Box sx={{ backgroundColor: '#f5f5f5', px: { xs: 2, md: 6 }, py: 1.5 }}>
        <Typography sx={{ fontSize: '13px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
          <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: '#555' }}>
            Home
          </span>
          {' › '}
          <span style={{ color: '#2b6cb0' }}>Customer Support</span>
        </Typography>
      </Box>

      {/* ── Hero Section ── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: { xs: 3, md: 8 },
          py: { xs: 4, md: 5 },
          backgroundColor: '#fff',
          flexWrap: 'wrap',
          gap: 3,
        }}
      >
        {/* Left */}
        <Box sx={{ maxWidth: '600px', flex: 1 }}>
          <Box
            sx={{
              display: 'inline-block',
              backgroundColor: '#f5a623',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 700,
              px: 1.5,
              py: 0.5,
              mb: 2,
              letterSpacing: '0.05em',
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            HELP CENTER
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '22px', md: '28px' },
              color: '#1a1a2e',
              mb: 3,
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            How we can help you!
          </Typography>

          {/* Search Bar */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #ddd',
              borderRadius: '4px',
              overflow: 'hidden',
              maxWidth: '600px',
              width: '100%',
            }}
          >
            <SearchIcon sx={{ color: '#aaa', mx: 1.5, fontSize: '20px' }} />
            <InputBase
              fullWidth
              placeholder="Enter your question or keyword"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ fontSize: '14px', fontFamily: "'Public Sans', sans-serif", py: 1.2 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#f05a28',
                color: '#fff',
                borderRadius: 0,
                fontWeight: 700,
                fontSize: '13px',
                fontFamily: "'Public Sans', sans-serif",
                px: 4,
                py: 1.7,
                boxShadow: 'none',
                whiteSpace: 'nowrap',
                '&:hover': { backgroundColor: '#d44d20', boxShadow: 'none' },
              }}
            >
              SEARCH
            </Button>
          </Box>
        </Box>

        {/* Right — Agent Image */}
        <Box
          component="img"
          src={supportAgent}
          alt="Support Agent"
          sx={{ width: { xs: '200px', sm: '260px', md: '320px' }, objectFit: 'contain',
         height: { xs: 'auto', md: '280px' },  }}
        />
      </Box>

      {/* ── Assist Categories ── */}
      <Box sx={{ backgroundColor: '#fafafa', px: { xs: 3, md: 8 }, py: 6 }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '22px',
            mb: 4,
            color: '#1a1a2e',
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          What can we assist you with today?
        </Typography>

        {/* Row 1 — first 4 */}
        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          {categories.slice(0, 4).map((cat, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                px: 2.5,
                py: 2.5,
                cursor: 'pointer',
                backgroundColor: '#fff',
                transition: 'border-color 0.2s',
                height: '64px',
                '&:hover': { borderColor: '#f05a28' },
              }}
            >
              <Box sx={{ color: '#f05a28', display: 'flex' }}>{cat.icon}</Box>
              <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
                {cat.label}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Row 2 — last 4 */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          {categories.slice(4, 8).map((cat, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                border: '1px solid #e0e0e0',
                borderRadius: '4px',
                px: 2.5,
                py: 2.5,
                cursor: 'pointer',
                backgroundColor: '#fff',
                transition: 'border-color 0.2s',
                height: '64px',
                '&:hover': { borderColor: '#f05a28' },
              }}
            >
              <Box sx={{ color: '#f05a28', display: 'flex' }}>{cat.icon}</Box>
              <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
                {cat.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Popular Topics ── */}
      <Box sx={{ px: { xs: 3, md: 8 }, py: 6, backgroundColor: '#fff' }}>
        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            fontWeight: 700,
            fontSize: '22px',
            mb: 4,
            color: '#1a1a2e',
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          Popular Topics
        </Typography>

        {/* ── Centered like contact cards ── */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
          {popularTopics.map((col, ci) => (
            <Box key={ci} sx={{ width: { xs: '100%', md: '280px' } }}>
              {col.map((topic, ti) => (
                <Box
                  key={ti}
                  sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5, cursor: 'pointer' }}
                >
                  <Typography sx={{ color: '#aaa', fontSize: '13px', mt: '2px' }}>•</Typography>
                  <Typography
                    sx={{
                      fontSize: '13px',
                      color:  '#444',
                      fontFamily: "'Public Sans', sans-serif",
                      '&:hover': { color: '#f05a28' },
                    }}
                  >
                    {topic}
                  </Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>

      {/* ── Contact Us Section ── */}
      <Box sx={{ backgroundColor: '#f5f5f5', px: { xs: 3, md: 8 }, py: 6 }}>

        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Box
            sx={{
              display: 'inline-block',
              backgroundColor: '#2b6cb0',
              color: '#fff',
              fontSize: '11px',
              fontWeight: 700,
              px: 2,
              py: 0.6,
              mb: 2,
              letterSpacing: '0.05em',
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            CONTACT US
          </Box>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              fontSize: '24px',
              color: '#1a1a2e',
              fontFamily: "'Public Sans', sans-serif",
            }}
          >
            Don't find your answer.
            <br />
            Contact with us
          </Typography>
        </Box>

        {/* ── Cards ── */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: 3,
            flexWrap: 'wrap',
          }}
        >

          {/* ── Call Us ── */}
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: { xs: '100%', md: '420px' },
            }}
          >
            {/* Icon + Title row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  backgroundColor: '#e8f4fd',
                  borderRadius: '8px',
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '80px',
                  minHeight: '80px',
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={callIcon}
                  alt="Call us"
                  sx={{ width: '80px', height: '80px', objectFit: 'contain' }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', fontFamily: "'Public Sans', sans-serif" }}>
                  Call us now
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif", lineHeight: 1.6 }}>
                  we are available online from 9:00 AM to 5:00 PM
                  <br />(GMT95:45) Talk with use now
                </Typography>
              </Box>
            </Box>

            {/* Number — aligned under description */}
            <Box sx={{ pl: '126px' }}>
              <Typography sx={{ fontWeight: 200, fontSize: '16px', color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
                +1-202-555-0126
              </Typography>
            </Box>

            {/* Button — aligned under number */}
            <Box sx={{ pl: '126px' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#2DA5F3',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '13px',
                  fontFamily: "'Public Sans', sans-serif",
                  px: 3,
                  py: 1.2,
                  borderRadius: '4px',
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#1e4e8c', boxShadow: 'none' },
                }}
              >
                CALL NOW
              </Button>
            </Box>
          </Box>

          {/* ── Chat With Us ── */}
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: { xs: '100%', md: '420px' },
            }}
          >
            {/* Icon + Title row */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                sx={{
                  backgroundColor: '#e8f8ef',
                  borderRadius: '8px',
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '80px',
                  minHeight: '80px',
                  flexShrink: 0,
                }}
              >
                <Box
                  component="img"
                  src={chatIcon}
                  alt="Chat with us"
                  sx={{ width: '80px', height: '80px', objectFit: 'contain' }}
                />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', fontFamily: "'Public Sans', sans-serif" }}>
                  Chat with us
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif", lineHeight: 1.6 }}>
                  we are available online from 9:00 AM to 5:00 PM
                  <br />(GMT95:45) Talk with use now
                </Typography>
              </Box>
            </Box>

            {/* Email — aligned under description */}
            <Box sx={{ pl: '126px' }}>
              <Typography sx={{ fontWeight: 200, fontSize: '16px', color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
                Support@clicon.com
              </Typography>
            </Box>

            {/* Button — aligned under email */}
            <Box sx={{ pl: '126px' }}>
              <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  backgroundColor: '#38a169',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '13px',
                  fontFamily: "'Public Sans', sans-serif",
                  px: 3,
                  py: 1.2,
                  borderRadius: '4px',
                  boxShadow: 'none',
                  '&:hover': { backgroundColor: '#2f8a58', boxShadow: 'none' },
                }}
              >
                CONTACT US
              </Button>
            </Box>
          </Box>

        </Box>
      </Box>

    </Box>
  );
};

export default CustomerSupportPage;