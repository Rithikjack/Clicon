import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// ── replace with your actual product images ──
import product1 from '../../assets/Dell.png';
import product2 from '../../assets/Mobile.png';
import product3 from '../../assets/AC.png';
import product4 from '../../assets/hearphone.png';
import avatarImg from '../../assets/Avatar.png';

const recentOrders = [
  { id: '#96459301', status: 'Processing', date: 'Dec 30, 2019 07:52', total: '$80.00 (4 Products)', action: 'View Details' },
  { id: '#71884321', status: 'Completed',  date: 'Feb 2, 2020 07:53',  total: '$200.00 (2 Products)', action: 'View Details' },
  { id: '#75841032', status: 'Cancelled',  date: 'Mar 20, 2019 23:14', total: '$540.00 (1 Products)', action: 'View Details' },
  { id: '#36875421', status: 'Completed',  date: 'Feb 7, 2019 21:05',  total: '$120.80 (1 Product)',  action: 'View Details' },
  { id: '#53748035', status: 'Completed',  date: 'Feb 7, 2019 21:25',  total: '$22.80 (2 Products)', action: 'View Details' },
  { id: '#74180532', status: 'Enrolled',   date: 'Dec 30, 2019 07:52', total: '$71.00 (1 Product)',  action: 'View Details' },
  { id: '#74815032', status: 'Completed',  date: 'Dec 1, 2019 03:09',  total: '$205.00 (1 Product)', action: 'View Details' },
];

const browsingHistory = [
  { name: 'TOZO T6 True Wireless Earbuds Bluetooth',     price: '$15',  oldPrice: '$20',  rating: 4, reviews: 138, img: product1, badge: 'Sale' },
  { name: 'Samsung Electronics Samsung Galaxy S21 5G',   price: '$280', oldPrice: '$350', rating: 4, reviews: 378, img: product2, badge: 'Best' },
  { name: 'Amazon Basics 5-Pack Speed HDMI Cable 2M',    price: '$62',  oldPrice: '$80',  rating: 4, reviews: 378, img: product3, badge: '' },
  { name: 'Portable Washing Machine, Fitmay Compact',    price: '$62',  oldPrice: '$80',  rating: 4, reviews: 378, img: product4, badge: '' },
];

const statusColor = (status) => {
  if (status === 'Completed')  return { bg: '#e8f8ef', color: '#38a169' };
  if (status === 'Processing') return { bg: '#fff5e0', color: '#f5a623' };
  if (status === 'Cancelled')  return { bg: '#fde8e8', color: '#e53e3e' };
  if (status === 'Enrolled')   return { bg: '#e8f0fd', color: '#3b82f6' };
  return { bg: '#f5f5f5', color: '#777' };
};

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ fontFamily: "'Public Sans', sans-serif" }}>

      {/* ── Greeting ── */}
      <Box sx={{ backgroundColor: '#fff', borderRadius: '8px', p: 3, mb: 3,}}>
        <Typography sx={{ fontWeight: 700, fontSize: '18px', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
          Hello, Kevin 
        </Typography>
        <Typography sx={{ fontSize: '13px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
          From your account dashboard, you can easily check & view your,{' '}<br></br>
          <span style={{ color: '#2DA5F3', cursor: 'pointer' }}>Recent orders</span>,{' '}
          manage your{' '}
          <span style={{ color: '#2DA5F3', cursor: 'pointer' }}>Shipping and</span> and{' '}
          <span style={{ color: '#2DA5F3', cursor: 'pointer' }}>Billing Address</span>{' '}
          and <br></br>edit your{' '}<span style={{ color: '#2DA5F3', cursor: 'pointer' }}> Password
          </span>{' '} and <span style={{ color: '#2DA5F3', cursor: 'pointer' }}>Account Details.</span>
        </Typography>
      </Box>

      {/* ── Account Info + Billing + Stats ── */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3, flexWrap: 'wrap' }}>

        {/* Account Info */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            p: 2.5,
            minWidth: '200px',
          }}
        >
          <Typography sx={{ fontWeight: 400, fontSize: '13px', mb: 2, textTransform: 'uppercase', color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif", }}>
            Account Info
            
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <Box
              component="img"
              src={avatarImg}           // ← your avatar image
              alt="Avatar"
              sx={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }}
            />
            <Box>
              <Typography sx={{ fontWeight: 400, fontSize: '14px', fontFamily: "'Public Sans', sans-serif" }}>Kevin Gilbert <br/>
                <span style={{fontWeight: 200, fontSize:'11px',letterSpacing:'0.5px'}}>
            Dhaka - 1207,Bangladesh
          </span>
              </Typography>
            </Box>
          </Box>
          <Typography sx={{ fontSize: '14px', color: '#777', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
            <span style={{fontWeight: 400,color:'#191C1F'}}>Email</span>: kevin.gilbert@example.com
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#777', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
            <span style={{fontWeight: 400,color:'#191C1F'}}>Sec Email</span>: kevin12345@gmail.com
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#777', mb: 2, fontFamily: "'Public Sans', sans-serif" }}>
            <span style={{fontWeight: 400,color:'#191C1F'}}>Phone :</span> +1-202-555-0118
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate('/account/settings')}
            sx={{
              borderColor: '#2DA5F3',
              color: '#2DA5F3',
              fontSize: '12px',
              fontFamily: "'Public Sans', sans-serif",
              textTransform: 'uppercase',
              borderRadius: '2px',
              // '&:hover': { backgroundColor: '#fff5ee', borderColor: '#2DA5F3' },
            }}
          >
            EDIT ACCOUNT
          </Button>
        </Box>

        {/* Billing Address */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#fff',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            p: 2.5,
            minWidth: '200px',
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: '13px', mb: 2, textTransform: 'uppercase', color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
            Billing Address
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: '14px', mb: 1, fontFamily: "'Public Sans', sans-serif" }}>Kevin Gilbert</Typography>
          <Typography sx={{ fontSize: '12px', color: '#777', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
            East Tejturi Bazar, Word No.04,Road No.<br/> 13/x, House no.1320/c,Flat No.5D,<br/>
            Dhaka -1200,Banglasdesh
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#777', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
            <span style={{fontWeight: 400,color:'#191C1F'}}>Phone :</span> +1-202-555-0118
          </Typography>
          <Typography sx={{ fontSize: '14px', color: '#777', mb: 2, fontFamily: "'Public Sans', sans-serif" }}>
             <span style={{fontWeight: 400,color:'#191C1F'}}> Email</span>: kevin.gilbert@gmail.com
          </Typography>
          <Button
            variant="outlined"
            size="small"
            onClick={() => navigate('/account/settings')}
            sx={{
              borderColor: '#2DA5F3',
              color: '#2DA5F3',
              fontSize: '12px',
              fontFamily: "'Public Sans', sans-serif",
              textTransform: 'uppercase',
              borderRadius: '4px',
              '&:hover': { backgroundColor: '#fff5ee', borderColor: '#2DA5F3' },
            }}
          >
            EDIT ADDRESS
          </Button>
        </Box>

        {/* Stats */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: '160px' }}>

          {/* Total Orders */}
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box sx={{ backgroundColor: '#fff5e0', borderRadius: '8px', p: 1, display: 'flex' }}>
              <ShoppingBagOutlinedIcon sx={{ color: '#f5a623', fontSize: '24px' }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '20px', fontFamily: "'Public Sans', sans-serif" }}>154</Typography>
              <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>Total Orders</Typography>
            </Box>
          </Box>

          {/* Pending Orders */}
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box sx={{ backgroundColor: '#fde8e8', borderRadius: '8px', p: 1, display: 'flex' }}>
              <PendingActionsOutlinedIcon sx={{ color: '#e53e3e', fontSize: '24px' }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '20px', fontFamily: "'Public Sans', sans-serif" }}>06</Typography>
              <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>Pending Orders</Typography>
            </Box>
          </Box>

          {/* Completed Orders */}
          <Box
            sx={{
              backgroundColor: '#fff',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              p: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Box sx={{ backgroundColor: '#e8f8ef', borderRadius: '8px', p: 1, display: 'flex' }}>
              <CheckCircleOutlineOutlinedIcon sx={{ color: '#38a169', fontSize: '24px' }} />
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 700, fontSize: '20px', fontFamily: "'Public Sans', sans-serif" }}>149</Typography>
              <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>Completed Orders</Typography>
            </Box>
          </Box>

        </Box>
      </Box>

      {/* ── Recent Orders ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3, mb: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '15px', fontFamily: "'Public Sans', sans-serif" }}>
            Recent Order
          </Typography>
          <Typography sx={{ fontSize: '13px', color: '#FA8232', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            View All <ArrowForwardIcon sx={{ fontSize: '14px' }} />
          </Typography>
        </Box>

        {/* Table Header */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1.5fr 2fr 1fr', gap: 1, pb: 1, borderBottom: '1px solid #e0e0e0', mb: 1 }}>
          {['ORDER ID', 'STATUS', 'DATE', 'TOTAL', 'ACTION'].map((h) => (
            <Typography key={h} sx={{ fontSize: '11px', fontWeight: 700, color: '#777', fontFamily: "'Public Sans', sans-serif" }}>{h}</Typography>
          ))}
        </Box>

        {/* Table Rows */}
        {recentOrders.map((order, i) => {
          const { bg, color } = statusColor(order.status);
          return (
            <Box
              key={i}
              sx={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1.5fr 2fr 1fr',
                gap: 1,
                py: 1.2,
                borderBottom: '1px solid #f5f5f5',
                alignItems: 'center',
              }}
            >
              <Typography sx={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Public Sans', sans-serif" }}>{order.id}</Typography>
              <Chip
                label={order.status}
                size="small"
                sx={{ backgroundColor: bg, color, fontSize: '11px', fontWeight: 600, height: '22px', fontFamily: "'Public Sans', sans-serif" }}
              />
              <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>{order.date}</Typography>
              <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>{order.total}</Typography>
              <Typography
                sx={{ fontSize: '12px', color: '#FA8232', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.3, fontFamily: "'Public Sans', sans-serif" }}
              >
                View Details <ArrowForwardIcon sx={{ fontSize: '12px' }} />
              </Typography>
            </Box>
          );
        })}
      </Box>

      {/* ── Browsing History ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '15px', fontFamily: "'Public Sans', sans-serif" }}>
            Browsing History
          </Typography>
          <Typography sx={{ fontSize: '13px', color: '#FA8232', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 0.5 }}>
            View All <ArrowForwardIcon sx={{ fontSize: '14px' }} />
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {browsingHistory.map((item, i) => (
            <Box
              key={i}
              sx={{
                width: '160px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                overflow: 'hidden',
                cursor: 'pointer',
                '&:hover': { borderColor: '#FA8232' },
              }}
            >
              {/* Badge */}
              {item.badge && (
                <Box sx={{ position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 8,
                      left: 8,
                      backgroundColor: item.badge === 'Sale' ? '#FA8232' : '#1B6392',
                      color: '#fff',
                      fontSize: '10px',
                      fontWeight: 700,
                      px: 1,
                      py: 0.3,
                      borderRadius: '3px',
                      zIndex: 1,
                    }}
                  >
                    {item.badge}
                  </Box>
                </Box>
              )}
              <Box
                component="img"
                src={item.img}
                alt={item.name}
                sx={{ width: '100%', height: '120px', objectFit: 'contain', p: 1 }}
              />
              <Box sx={{ p: 1.5 }}>
                <Typography sx={{ fontSize: '11px', color: '#444', mb: 0.5, fontFamily: "'Public Sans', sans-serif", lineHeight: 1.4 }}>
                  {item.name.slice(0, 40)}...
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 0.5 }}>
                  {[...Array(5)].map((_, s) => (
                    <span key={s} style={{ color: s < item.rating ? '#FA8232' : '#ddd', fontSize: '12px' }}>★</span>
                  ))}
                  <Typography sx={{ fontSize: '10px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>({item.reviews})</Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                  <Typography sx={{ fontSize: '13px', fontWeight: 700, color: '#FA8232', fontFamily: "'Public Sans', sans-serif" }}>{item.price}</Typography>
                  <Typography sx={{ fontSize: '11px', color: '#aaa', textDecoration: 'line-through', fontFamily: "'Public Sans', sans-serif" }}>{item.oldPrice}</Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

    </Box>
  );
};

export default DashboardPage;