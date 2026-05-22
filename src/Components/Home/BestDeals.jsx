import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Button,
  IconButton
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

// Images — replace these paths with your actual asset imports
import ps5 from '../../assets/PS5.png';
import drone from '../../assets/Drone.png';
import phone from '../../assets/Mobile.png';
import gamepad from '../../assets/Joystick.png';
import headset from '../../assets/headphone.png';
import mobile from '../../assets/Dell.png';
import toydrone from '../../assets/Wishing.png';
import monitor from '../../assets/Moniter.png';
import camera from '../../assets/Camera.png';

const products = [
  {
    image: drone,
    title: 'Bose Sport Earbuds – Wireless Earphones Bluetooth In Ear...',
    price: '$2,300',
    sold: true
  },
  {
    image: phone,
    title: 'Simple Mobile 4G LTE Prepaid Smartphone',
    price: '$220'
  },
  {
    image: gamepad,
    title: '4K UHD LED Smart TV with Chromecast Built-in',
    price: '$1.50',
    oldPrice: '$865',
    tag: '19% OFF'
  },
  {
    image: headset,
    title: 'Sony DSCHX8 High Zoom Point & Shoot Camera',
    price: '$1,200'
  },
  {
    image: mobile,
    title: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
    price: '$299'
  },
  {
    image: toydrone,
    title: 'Portable Washing Machine, 11lbs capacity Model 18NMFIAM',
    price: '$70',
    oldPrice: '$865.99'
  },
  {
    image: monitor,
    title: '2-Barrel Carburetor Carb 2100 Engine Increase Horsepower',
    price: '$160',
    hot: true
  },
  {
    image: camera,
    title: 'JBL FLIP 4 – Waterproof Portable Bluetooth Speaker – Black',
    price: '$250',
    oldPrice: '$360',
    tag: '25% OFF'
  }
];

const BestDeals = () => {
  const [time, setTime] = useState({
    days: 16,
    hours: 21,
    minutes: 57,
    seconds: 23
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  return (
    <Box sx={{ maxWidth: '1320px', mx: 'auto', py: 5, px: 2 }}>

      {/* ── HEADER ── */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          flexWrap: 'wrap',
          gap: 1.5
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Typography sx={{ fontSize: '22px', fontWeight: 700 }}>
            Best Deals
          </Typography>

          <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>
            Deals ends in
          </Typography>

          <Box
            sx={{
              backgroundColor: '#F3DE6D',
              px: 2,
              py: '5px',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '14px',
              color: '#5a4a00',
              fontVariantNumeric: 'tabular-nums'
            }}
          >
            {time.days}d : {pad(time.hours)}h : {pad(time.minutes)}m : {pad(time.seconds)}s
          </Box>
        </Box>

        <Typography
          sx={{
            color: '#2DA5F3',
            fontWeight: 600,
            fontSize: '13px',
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          Browse All Product →
        </Typography>
      </Box>

      {/* ── MAIN GRID WRAPPER ── */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '260px 1fr' },
          border: '1px solid #E4E7E9',
          borderRadius: '10px',
          overflow: 'hidden'
        }}
      >

        {/* ── BIG FEATURED CARD ── */}
        <Box
          sx={{
            borderRight: { md: '1px solid #E4E7E9' },
            borderBottom: { xs: '1px solid #E4E7E9', md: 'none' },
            p: 2.5,
            display: 'flex',
            flexDirection: 'column',
            bgcolor: '#fff'
          }}
        >
          {/* Tags */}
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <Box sx={{ bgcolor: '#EFD33D', color: '#5a4a00', px: 1.5, py: '3px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>
              32% OFF
            </Box>
            <Box sx={{ bgcolor: '#EE5858', color: '#fff', px: 1.5, py: '3px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>
              HOT
            </Box>
          </Box>

          {/* Product Image */}
          <Box
            component="img"
            src={ps5}
            alt="Xbox Series S"
            sx={{ width: '100%', height: '200px', objectFit: 'contain', mb: 2 }}
          />

          {/* Rating */}
          <Typography sx={{ color: '#FA8232', fontSize: '13px', mb: 1 }}>
            ★★★★★{' '}
            <Box component="span" sx={{ color: '#929FA5', fontSize: '12px' }}>
              (52,677)
            </Box>
          </Typography>

          {/* Title */}
          <Typography sx={{ fontSize: '16px', fontWeight: 600, lineHeight: '1.5', mb: 1.5, color: '#191C1F' }}>
            Xbox Series S – 512GB SSD Console with Wireless Controller
          </Typography>

          {/* Price */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
            <Typography sx={{ textDecoration: 'line-through', color: '#929FA5', fontSize: '13px' }}>
              $865.99
            </Typography>
            <Typography sx={{ color: '#2DA5F3', fontWeight: 700, fontSize: '22px' }}>
              $442.12
            </Typography>
          </Box>

          {/* Description */}
          <Typography sx={{ color: '#5F6C72', fontSize: '13px', lineHeight: '1.7', mb: 2, flex: 1 }}>
            Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals, and framerates.
          </Typography>

          {/* Action Buttons */}
          <Box sx={{ display: 'flex', gap: 1, mt: 'auto' }}>
            <IconButton
              sx={{
                border: '1px solid #E4E7E9',
                borderRadius: '6px',
                width: 40,
                height: 40,
                '&:hover': { bgcolor: '#FFF5EE' }
              }}
            >
              <FavoriteBorderIcon sx={{ fontSize: 18 }} />
            </IconButton>

            <Button
              variant="contained"
              startIcon={<ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />}
              sx={{
                flex: 1,
                height: 40,
                backgroundColor: '#FA8232',
                boxShadow: 'none',
                fontSize: '13px',
                fontWeight: 600,
                borderRadius: '6px',
                '&:hover': { backgroundColor: '#e07020', boxShadow: 'none' }
              }}
            >
              Add to Cart
            </Button>

            <IconButton
              sx={{
                border: '1px solid #E4E7E9',
                borderRadius: '6px',
                width: 40,
                height: 40,
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              <RemoveRedEyeOutlinedIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Box>

        {/* ── SMALL PRODUCTS GRID ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' },
            bgcolor: '#fff'
          }}
        >
          {products.map((product, index) => (
            <Box
              key={index}
              sx={{
                borderLeft: '1px solid #E4E7E9',
                borderBottom: index < 4 ? 'none' : '0px',
                borderTop: index >= 4 ? '1px solid #E4E7E9' : 'none',
                p: 2,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                bgcolor: '#fff',
                transition: 'background 0.2s',
                '&:hover': { bgcolor: '#FAFAFA' },
                '&:hover .hover-icons': { opacity: 1, visibility: 'visible' }
              }}
            >
              {/* Badge Tag */}
              {product.tag && (
                <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: '#EFD33D', color: '#5a4a00', px: 1, py: '3px', fontSize: '11px', fontWeight: 700, borderRadius: '4px', zIndex: 2 }}>
                  {product.tag}
                </Box>
              )}
              {product.hot && (
                <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: '#EE5858', color: '#fff', px: 1, py: '3px', fontSize: '11px', fontWeight: 700, borderRadius: '4px', zIndex: 2 }}>
                  HOT
                </Box>
              )}
              {product.sold && (
                <Box sx={{ position: 'absolute', top: 10, left: 10, bgcolor: '#929FA5', color: '#fff', px: 1, py: '3px', fontSize: '11px', fontWeight: 700, borderRadius: '4px', zIndex: 2 }}>
                  SOLD OUT
                </Box>
              )}

              {/* Hover Action Icons */}
              <Box
                className="hover-icons"
                sx={{
                  position: 'absolute',
                  top: '38%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  gap: 0.75,
                  opacity: 0,
                  visibility: 'hidden',
                  transition: 'opacity 0.25s',
                  zIndex: 5
                }}
              >
                <IconButton
                  sx={{ width: 34, height: 34, bgcolor: '#FA8232', color: '#fff', '&:hover': { bgcolor: '#e07020' } }}
                >
                  <FavoriteBorderIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <IconButton
                  sx={{ width: 34, height: 34, bgcolor: '#fff', border: '1px solid #E4E7E9', '&:hover': { bgcolor: '#f5f5f5' } }}
                >
                  <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />
                </IconButton>
                <IconButton
                  sx={{ width: 34, height: 34, bgcolor: '#fff', border: '1px solid #E4E7E9', '&:hover': { bgcolor: '#f5f5f5' } }}
                >
                  <RemoveRedEyeOutlinedIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Box>

              {/* Product Image */}
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                sx={{ width: '100%', height: '120px', objectFit: 'contain', mb: 1.5, display: 'block' }}
              />

              {/* Title */}
              <Typography
                sx={{ fontSize: '12px', lineHeight: '1.55', mb: 1, color: '#191C1F', minHeight: '38px',
                  display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                }}
              >
                {product.title}
              </Typography>

              {/* Price */}
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, flexWrap: 'wrap' }}>
                {product.oldPrice && (
                  <Typography sx={{ textDecoration: 'line-through', color: '#929FA5', fontSize: '12px' }}>
                    {product.oldPrice}
                  </Typography>
                )}
                <Typography sx={{ color: '#2DA5F3', fontWeight: 700, fontSize: '14px' }}>
                  {product.price}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

      </Box>
    </Box>
  );
};

export default BestDeals;