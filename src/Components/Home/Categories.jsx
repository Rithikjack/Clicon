import React from 'react';
import {
  Box,
  Typography,
  IconButton
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


import laptop from '../../assets/computer2.png';
import phone from '../../assets/smartphone.png';
import headphone from '../../assets/hearphone.png';
import keyboard from '../../assets/keyboard.png';
import camera from '../../assets/camera2.png';
import tv from '../../assets/Tv.png';

const categories = [
  {
    image: laptop,
    title: 'Computer & Laptop'
  },
  {
    image: phone,
    title: 'SmartPhone'
  },
  {
    image: headphone,
    title: 'Headphones'
  },
  {
    image: keyboard,
    title: 'Accessories'
  },
  {
    image: camera,
    title: 'Camera & Photo'
  },
  {
    image: tv,
    title: 'TV & Homes'
  }
];

const Categories = () => {
  return (
    <Box
      sx={{
        maxWidth: '1320px',
        mx: 'auto',
        py: 5,
        px: 2
      }}
    >
      {/* TITLE */}
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '32px',
          fontWeight: 700,
          mb: 4
        }}
      >
        Shop with Categories
      </Typography>

      {/* CATEGORY SECTION */}
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* LEFT BUTTON */}
        <IconButton
          sx={{
            position: 'absolute',
            left: '-20px',
            zIndex: 2,
            width: '42px',
            height: '42px',
            backgroundColor: '#FA8232',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#FA8232'
            }
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: '18px' }} />
        </IconButton>

        {/* CATEGORY CARDS */}
        <Box
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2,1fr)',
              sm: 'repeat(3,1fr)',
              md: 'repeat(6,1fr)'
            },
            gap: 2
          }}
        >
          {categories.map((item, index) => (
            <Box
              key={index}
              sx={{
                border: '1px solid #E4E7E9',
                borderRadius: '4px',
                py: 3,
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                transition: '0.3s',
                cursor: 'pointer',

                '&:hover': {
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                  transform: 'translateY(-5px)'
                }
              }}
            >
              {/* IMAGE */}
              <Box
                component="img"
                src={item.image}
                alt=""
                sx={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  mb: 2
                }}
              />

              {/* TITLE */}
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 500,
                  textAlign: 'center'
                }}
              >
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* RIGHT BUTTON */}
        <IconButton
          sx={{
            position: 'absolute',
            right: '-20px',
            zIndex: 2,
            width: '42px',
            height: '42px',
            backgroundColor: '#FA8232',
            color: '#fff',
            '&:hover': {
              backgroundColor: '#FA8232'
            }
          }}
        >
          <ArrowForwardIosIcon sx={{ fontSize: '18px' }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Categories;