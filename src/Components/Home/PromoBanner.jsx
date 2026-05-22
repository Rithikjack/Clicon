import React from 'react';
import {
  Box,
  Typography,
  Button
} from '@mui/material';

// Images
import homepod from '../../assets/xiaomi.png';
import xiaomi from '../../assets/homepod.png';

const PromoBanner = () => {
  return (
    <Box
      sx={{
        maxWidth: '1320px',
        mx: 'auto',
        py: 5,
        px: 2
      }}
    >
      {/* MAIN ROW */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: {
            xs: 'wrap',
            md: 'nowrap'
          }
        }}
      >

        {/* LEFT CARD */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#F2F4F5',
            borderRadius: '6px',
            height: '360px',
            px: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            overflow: 'hidden'
          }}
        >
          {/* TEXT */}
          <Box sx={{ maxWidth: '240px' }}>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: '#2DA5F3',
                color: '#fff',
                px: 1.5,
                py: 0.5,
                fontSize: '12px',
                fontWeight: 700,
                borderRadius: '2px',
                mb: 2
              }}
            >
              INTRODUCING
            </Box>

            <Typography
              sx={{
                fontSize: '42px',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#191C1F',
                mb: 2
              }}
            >
              New Apple
              <br />
              Homepod Mini
            </Typography>

            <Typography
              sx={{
                color: '#5F6C72',
                fontSize: '15px',
                lineHeight: '24px',
                mb: 3
              }}
            >
              Jam-packed with innovation,
              HomePod mini delivers unexpectedly.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FA8232',
                px: 3,
                py: 1.3,
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#e76f1f',
                  boxShadow: 'none'
                }
              }}
            >
              SHOP NOW →
            </Button>
          </Box>

          {/* IMAGE */}
          <Box
            component="img"
            src={homepod}
            alt=""
            sx={{
              width: '240px',
              height: '240px',
              objectFit: 'contain'
            }}
          />
        </Box>

        {/* RIGHT CARD */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#191C1F',
            borderRadius: '6px',
            height: '360px',
            px: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* TEXT */}
          <Box sx={{ maxWidth: '260px', zIndex: 2 }}>
            <Box
              sx={{
                display: 'inline-block',
                backgroundColor: '#EFD33D',
                color: '#191C1F',
                px: 1.5,
                py: 0.5,
                fontSize: '12px',
                fontWeight: 700,
                borderRadius: '2px',
                mb: 2
              }}
            >
              INTRODUCING NEW
            </Box>

            <Typography
              sx={{
                fontSize: '40px',
                fontWeight: 700,
                lineHeight: 1.2,
                color: '#fff',
                mb: 2
              }}
            >
              Xiaomi Mi 11 Ultra
              <br />
              12GB+256GB
            </Typography>

            <Typography
              sx={{
                color: '#ADB7BC',
                fontSize: '15px',
                lineHeight: '24px',
                mb: 3
              }}
            >
              *Data provided by internal laboratories.
              Industry measurement.
            </Typography>

            <Button
              variant="contained"
              sx={{
                backgroundColor: '#FA8232',
                px: 3,
                py: 1.3,
                fontWeight: 600,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: '#e76f1f',
                  boxShadow: 'none'
                }
              }}
            >
              SHOP NOW →
            </Button>
          </Box>

          {/* IMAGE */}
          <Box
            component="img"
            src={xiaomi}
            alt=""
            sx={{
              width: '280px',
              height: '280px',
              objectFit: 'contain',
              zIndex: 2
            }}
          />

          {/* PRICE */}
          <Box
            sx={{
              position: 'absolute',
              top: 20,
              right: 20,
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundColor: '#2DA5F3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '24px',
              zIndex: 3
            }}
          >
            $590
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default PromoBanner;