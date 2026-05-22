import React from 'react';
import { Box, Typography, Button, Breadcrumbs, Link } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const OrderCompletedPage = () => {
  return (
    <Box sx={{ bgcolor: '#F2F4F5', minHeight: '100vh' }}>

      {/* ── Breadcrumb Bar ── */}
      <Box sx={{ bgcolor: '#fff', px: { xs: 2, md: 6 }, py: 1.5, borderBottom: '1px solid #E4E7E9' }}>
        <Breadcrumbs
          separator={<NavigateNextIcon sx={{ fontSize: '14px', color: '#929FA5' }} />}
          aria-label="breadcrumb"
        >
          <Link
            href="/"
            underline="hover"
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '13px',
              color: '#5F6C73',
              '&:hover': { color: '#FA8232' },
            }}
          >
            <HomeOutlinedIcon sx={{ fontSize: '15px' }} />
            Home
          </Link>
          <Link
            href="/cart"
            underline="hover"
            sx={{ fontSize: '13px', color: '#5F6C73', '&:hover': { color: '#FA8232' } }}
          >
            Shopping Card
          </Link>
          <Typography sx={{ fontSize: '13px', color: '#FA8232', fontWeight: 500 }}>
            Checkout
          </Typography>
        </Breadcrumbs>
      </Box>

      {/* ── Success Card ── */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: { xs: 6, md: 10 },
          px: 2,
        }}
      >
        <Box
          sx={{
            bgcolor: '#fff',
            borderRadius: '8px',
            boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            px: { xs: 4, md: 8 },
            py: { xs: 5, md: 7 },
            textAlign: 'center',
            maxWidth: '480px',
            width: '100%',
          }}
        >
          {/* Green check icon */}
          <CheckCircleIcon
            sx={{
              fontSize: '64px',
              color: '#2DB224',
              mb: 2,
            }}
          />

          {/* Title */}
          <Typography
            sx={{
              fontSize: '22px',
              fontWeight: 700,
              color: '#191C1F',
              mb: 1.5,
            }}
          >
            Your order is successfully place
          </Typography>

          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: '13px',
              color: '#929FA5',
              lineHeight: 1.7,
              mb: 4,
              px: 1,
            }}
          >
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
          </Typography>

          {/* Buttons */}
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="outlined"
              startIcon={<DashboardOutlinedIcon />}
              href="/"
              sx={{
                height: '44px',
                px: 3,
                borderColor: '#E4E7E9',
                color: '#5F6C73',
                fontWeight: 600,
                fontSize: '13px',
                borderRadius: '6px',
                '&:hover': {
                  borderColor: '#FA8232',
                  color: '#FA8232',
                  bgcolor: '#FFF5EE',
                },
              }}
            >
              GO TO DASHBOARD
            </Button>

            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              href="/order"
              sx={{
                height: '44px',
                px: 3,
                bgcolor: '#FA8232',
                color: '#fff',
                fontWeight: 600,
                fontSize: '13px',
                borderRadius: '6px',
                boxShadow: 'none',
                '&:hover': { bgcolor: '#e07020', boxShadow: 'none' },
              }}
            >
              VIEW ORDER
            </Button>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default OrderCompletedPage;