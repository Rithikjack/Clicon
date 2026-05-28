import React, { useState } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Navbar from '../../Components/Home/Navbar';
import Footer from '../../Components/Home/Footer';

const menuItems = [
  { label: 'Dashboard',       icon: <DashboardOutlinedIcon fontSize="small" />,    path: '/account/dashboard' },
  { label: 'Order History',   icon: <ReceiptLongOutlinedIcon fontSize="small" />,  path: '/account/orders' },
  { label: 'Track Order',     icon: <LocationOnOutlinedIcon fontSize="small" />,   path: '/track-order' },
  { label: 'Shopping Cart',   icon: <ShoppingCartOutlinedIcon fontSize="small" />, path: '/cart' },
  { label: 'Wishlist',        icon: <FavoriteBorderOutlinedIcon fontSize="small" />, path: '/wishlist' },
  { label: 'Compare',         icon: <CompareArrowsIcon fontSize="small" />,        path: '/compare' },
  { label: 'Browsing History',icon: <HistoryOutlinedIcon fontSize="small" />,      path: '/account/history' },
  { label: 'Cards & Address', icon: <CreditCardOutlinedIcon fontSize="small" />,   path: '/account/cards' },
  { label: 'Settings',        icon: <SettingsOutlinedIcon fontSize="small" />,     path: '/account/settings' },
];

const AccountLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Box>
      <Navbar />

      {/* Breadcrumb */}
      <Box sx={{ backgroundColor: '#f5f5f5', px: { xs: 2, md: 6 }, py: 1.5 }}>
        <Typography sx={{ fontSize: '13px', color: '#777' }}>
          <span onClick={() => navigate('/')} style={{ cursor: 'pointer', color: '#555' }}>Home</span>
          {' › '}
          <span style={{ color: '#555' }}>User Account</span>
          {' › '}
          <span style={{ color: '#2b6cb0' }}>Dashboard</span>
        </Typography>
      </Box>

      {/* Main Layout */}
      <Box
        sx={{
          display: 'flex',
          gap: 3,
          px: { xs: 2, md: 6 },
          py: 4,
          backgroundColor: '#f9f9f9',
          alignItems: 'flex-start',
          fontFamily: "'Public Sans', sans-serif",
        }}
      >
        {/* ── Sidebar ── */}
        <Box
          sx={{
            width: '200px',
            flexShrink: 0,
            backgroundColor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Box
                key={item.label}
                onClick={() => navigate(item.path)}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 2,
                  py: 1.5,
                  cursor: 'pointer',
                  backgroundColor: isActive ? '#FA8232' : '#fff',
                  color: isActive ? '#fff' : '#444',
                  fontSize: '13px',
                  fontFamily: "'Public Sans', sans-serif",
                  borderLeft: isActive ? '3px solid #d44d20' : '3px solid transparent',
                  transition: 'all 0.2s',
                  '&:hover': {
                    backgroundColor: isActive ? '#FA8232' : '#fff5ee',
                    color: isActive ? '#fff' : '#FA8232',
                  },
                }}
              >
                <Box sx={{ display: 'flex', color: isActive ? '#fff' : '#FA8232' }}>
                  {item.icon}
                </Box>
                <Typography sx={{ fontSize: '13px', fontWeight: isActive ? 600 : 400, fontFamily: "'Public Sans', sans-serif", color: 'inherit' }}>
                  {item.label}
                </Typography>
              </Box>
            );
          })}

          {/* Log out */}
          <Box
            onClick={() => navigate('/')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              px: 2,
              py: 1.5,
              cursor: 'pointer',
              color: '#444',
              borderLeft: '3px solid transparent',
              '&:hover': { backgroundColor: '#fff5ee', color: '#FA8232' },
            }}
          >
            <LogoutOutlinedIcon fontSize="small" sx={{ color: '#FA8232' }} />
            <Typography sx={{ fontSize: '13px', fontFamily: "'Public Sans', sans-serif" }}>
              Log out
            </Typography>
          </Box>
        </Box>

        {/* ── Page Content ── */}
        <Box sx={{ flex: 1 }}>
          <Outlet />
        </Box>
      </Box>

      <Footer showNewsletter={false} />
    </Box>
  );
};

export default AccountLayout;