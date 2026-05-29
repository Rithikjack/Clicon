import React from 'react';
import {
  Box,
  Typography,
  IconButton
} from '@mui/material';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Container from '@mui/material/Container';

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
    <Container
      maxWidth={false}
      sx={{
        width: '100%',
        maxWidth: '1600px',
        mx: 'auto',
        py: 0,
        px: { xs: 2, sm: 3, md: 5, lg: '120px' }
      }}
    >
      <Box
        sx={{
          py: 2,
          px: { xs: 0, sm: 3, md: 6 }
        }}
      >

        {/* TITLE */}
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: { xs: '26px', sm: '30px', md: '32px' },
            fontWeight: 700,
            mb: 4,
            fontFamily: "'Public Sans', sans-serif",
            color: '#191C1F'
          }}
        >
          Shop with Categories
        </Typography>

        {/* CATEGORY SECTION */}
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >

          {/* LEFT BUTTON */}
          <IconButton
            sx={{
              position: 'absolute',
              left: { xs: '-10px', md: '-20px' },
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

          {/* CATEGORY GRID */}
          <Box
  sx={{
    width: '100%',
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(2,1fr)',
      sm: 'repeat(3,1fr)',
      md: 'repeat(4,1fr)',
      lg: 'repeat(6,minmax(0,1fr))'
    },
    gap: { xs: 1.5, sm: 2 },
    overflow: 'hidden'
  }}
>
            {categories.map((item, index) => (
              <Box
                key={index}
                sx={{
                  border: '1px solid #E4E7E9',
                  borderRadius: '4px',
                  py: { xs: 2, sm: 3 },
                  px: { xs: 1.5, sm: 2 },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: '0.3s',
                  cursor: 'pointer',
                  backgroundColor: '#fff',

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
                  alt={item.title}
                  sx={{
                    width: { xs: '70px', sm: '90px', md: '100px' },
                    height: { xs: '70px', sm: '90px', md: '100px' },
                    objectFit: 'contain',
                    mb: 2
                  }}
                />

                {/* TITLE */}
                <Typography
                  sx={{
                    fontSize: { xs: '12px', sm: '13px', md: '14px' },
                    fontWeight: 500,
                    textAlign: 'center',
                    fontFamily: "'Public Sans', sans-serif",
                    color: '#191C1F'
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
              right: { xs: '-10px', md: '-20px' },
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
    </Container>
  );
};

export default Categories;