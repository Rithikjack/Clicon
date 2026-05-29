import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
} from '@mui/material';

import homepod from '../../assets/xiaomi.png';
import xiaomi from '../../assets/homepod.png';
import shopArrow from '../../assets/Orangearrow.png';

const PromoBanner = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        px: { xs: '12px', sm: '24px', md: '48px', lg: '120px' }
      }}
    >
      <Box
        sx={{
          py: { xs: 2, md: 4 },
          px: { xs: '8px', sm: '16px', md: '32px', lg: '150px' }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 1.5, md: 2 },
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >

          {/* LEFT CARD */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#F2F4F5',
              borderRadius: '6px',
              height: { xs: '160px', sm: '200px', md: '240px', lg: '360px' },
              px: { xs: 2, sm: 2.5, md: 3, lg: 0 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ maxWidth: { xs: '52%', lg: '240px' }, zIndex: 2 }}>
              <Box
                sx={{
                  display: 'inline-block',
                  backgroundColor: '#2DA5F3',
                  color: '#fff',
                  px: { xs: 1, lg: 1.5 },
                  py: 0.3,
                  fontSize: { xs: '8px', sm: '9px', md: '10px', lg: '12px' },
                  fontWeight: 700,
                  borderRadius: '2px',
                  mb: { xs: 0.5, md: 1, lg: 2 },
                  whiteSpace: 'nowrap',
                }}
              >
                INTRODUCING
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: '13px', sm: '16px', md: '20px', lg: '42px' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#191C1F',
                  mb: { xs: 0.5, md: 1, lg: 2 },
                }}
              >
                New Apple
                <br />
                Homepod Mini
              </Typography>

              <Typography
                sx={{
                  color: '#5F6C72',
                  fontSize: { xs: '9px', sm: '10px', md: '11px', lg: '15px' },
                  lineHeight: { xs: '14px', md: '18px', lg: '24px' },
                  mb: { xs: 1, md: 1.5, lg: 3 },
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                Jam-packed with innovation, HomePod mini delivers unexpectedly.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FA8232',
                  px: { xs: 1, sm: 1.5, md: 2, lg: 3 },
                  py: { xs: 0.4, sm: 0.5, md: 0.7, lg: 1 },
                  fontSize: { xs: '8px', sm: '9px', md: '11px', lg: '14px' },
                  fontWeight: 600,
                  boxShadow: 'none',
                  minWidth: 0,
                  lineHeight: 1.4,
                  '&:hover': { backgroundColor: '#e76f1f', boxShadow: 'none' },
                }}
              >
                SHOP NOW
                <Box
                  component="img"
                  src={shopArrow}
                  alt="arrow"
                  sx={{
                    ml: 0.5,
                    width: { xs: '8px', sm: '10px', md: '12px', lg: '18px' },
                    height: { xs: '7px', sm: '8px', md: '10px', lg: '14px' },
                    objectFit: 'contain',
                  }}
                />
              </Button>
            </Box>

            <Box
              component="img"
              src={homepod}
              alt="Apple Homepod Mini"
              sx={{
                width: { xs: '80px', sm: '110px', md: '150px', lg: '230px' },
                height: { xs: '80px', sm: '110px', md: '150px', lg: '240px' },
                objectFit: 'contain',
              }}
            />
          </Box>

          {/* RIGHT CARD */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#191C1F',
              borderRadius: '6px',
              height: { xs: '160px', sm: '200px', md: '240px', lg: '360px' },
              px: { xs: 2, sm: 2.5, md: 3, lg: 4 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ maxWidth: { xs: '52%', lg: '260px' }, zIndex: 2 }}>
              <Box
                sx={{
                  display: 'inline-block',
                  backgroundColor: '#EFD33D',
                  color: '#191C1F',
                  px: { xs: 1, lg: 1.5 },
                  py: 0.3,
                  fontSize: { xs: '8px', sm: '9px', md: '10px', lg: '12px' },
                  fontWeight: 700,
                  borderRadius: '2px',
                  mb: { xs: 0.5, md: 1, lg: 2 },
                  whiteSpace: 'nowrap',
                }}
              >
                INTRODUCING NEW
              </Box>

              <Typography
                sx={{
                  fontSize: { xs: '12px', sm: '15px', md: '19px', lg: '40px' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#fff',
                  mb: { xs: 0.5, md: 1, lg: 2 },
                }}
              >
                Xiaomi Mi 11 Ultra
                <br />
                12GB+256GB
              </Typography>

              <Typography
                sx={{
                  color: '#ADB7BC',
                  fontSize: { xs: '9px', sm: '10px', md: '11px', lg: '15px' },
                  lineHeight: { xs: '14px', md: '18px', lg: '24px' },
                  mb: { xs: 1, md: 1.5, lg: 3 },
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                *Data provided by internal laboratories. Industry measurement.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FA8232',
                  px: { xs: 1, sm: 1.5, md: 2, lg: 3 },
                  py: { xs: 0.4, sm: 0.5, md: 0.7, lg: 1.3 },
                  fontSize: { xs: '8px', sm: '9px', md: '11px', lg: '14px' },
                  fontWeight: 600,
                  boxShadow: 'none',
                  minWidth: 0,
                  lineHeight: 1.4,
                  '&:hover': { backgroundColor: '#e76f1f', boxShadow: 'none' },
                }}
              >
                SHOP NOW
                <Box
                  component="img"
                  src={shopArrow}
                  alt="arrow"
                  sx={{
                    ml: 0.5,
                    width: { xs: '8px', sm: '10px', md: '12px', lg: '18px' },
                    height: { xs: '7px', sm: '8px', md: '10px', lg: '14px' },
                    objectFit: 'contain',
                  }}
                />
              </Button>
            </Box>

            <Box
              component="img"
              src={xiaomi}
              alt="Xiaomi Mi 11 Ultra"
              sx={{
                width: { xs: '80px', sm: '120px', md: '160px', lg: '280px' },
                height: { xs: '80px', sm: '120px', md: '160px', lg: '280px' },
                objectFit: 'contain',
                zIndex: 2,
              }}
            />

            {/* PRICE BADGE */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 8, sm: 12, md: 14, lg: 20 },
                right: { xs: 8, sm: 12, md: 14, lg: 20 },
                width: { xs: '40px', sm: '52px', md: '62px', lg: '90px' },
                height: { xs: '40px', sm: '52px', md: '62px', lg: '90px' },
                borderRadius: '50%',
                backgroundColor: '#2DA5F3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: { xs: '10px', sm: '13px', md: '16px', lg: '24px' },
                zIndex: 3,
              }}
            >
              $590
            </Box>
          </Box>

        </Box>
      </Box>
    </Container>
  );
};

export default PromoBanner;