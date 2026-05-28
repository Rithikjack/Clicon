import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Button,
  Paper
} from '@mui/material';

import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';

// Images
import xboxImage from '../../assets/HeroImage.png';
import pixelImage from '../../assets/Pixel.png';
import earbudsImage from '../../assets/Earbuds.png';

const HeroSection = () => {
  const features = [
    {
      icon: <LocalShippingOutlinedIcon />,
      title: 'FASTED DELIVERY',
      sub: 'Delivery in 24/H'
    },
    {
      icon: <EmojiEventsOutlinedIcon />,
      title: '24 HOURS RETURN',
      sub: '100% money-back guarantee'
    },
    {
      icon: <CreditCardOutlinedIcon />,
      title: 'SECURE PAYMENT',
      sub: 'Your money is safe'
    },
    {
      icon: <HeadsetMicOutlinedIcon />,
      title: 'SUPPORT 24/7',
      sub: 'Live contact/message'
    }
  ];

  return (
    <Box
      sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}
    >
      {/* HERO SECTION */}
      <Grid container spacing={2}>

        {/* LEFT BANNER */}
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              backgroundColor: '#F2F4F5',
              borderRadius: '6px',
              padding: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '84%',
              position: 'relative',
              width: '100%'
            }}
          >
            {/* TEXT */}
            <Box sx={{ maxWidth: '350px' }}>
              <Typography
                sx={{
                  color: '#2DA5F3',
                  fontSize: '12px',
                  fontWeight: 600,
                  mb: 1
                }}
              >
                THE BEST PLACE TO PLAY
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: '32px',
                    md: '48px'
                  },
                  fontWeight: 700,
                  color: '#191C1F',
                  mb: 2
                }}
              >
                Xbox Consoles
              </Typography>

              <Typography
                sx={{
                  color: '#5F6C72',
                  fontSize: '15px',
                  lineHeight: '24px',
                  mb: 3
                }}
              >
                Save up to 50% on select Xbox games.
                Get 3 months of PC Game Pass for $2 USD.
              </Typography>

              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FA8232',
                  padding: '12px 24px',
                  fontWeight: 600,
                  borderRadius: '3px',
                  '&:hover': {
                    backgroundColor: '#e76f1f'
                  }
                }}
              >
                SHOP NOW →
              </Button>
            </Box>

            {/* IMAGE */}
            <Box
              component="img"
              src={xboxImage}
              alt="Xbox"
              sx={{
                width: {
                  xs: '180px',
                  md: '300px'
                },
                height: 'auto',
                objectFit: 'contain'
              }}
            />

            {/* PRICE CIRCLE */}
            <Box
              sx={{
                position: 'absolute',
                top: '40px',
                right: '120px',
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#2DA5F3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: '18px'
              }}
            >
              $299
            </Box>
          </Box>
        </Grid>

        {/* RIGHT SIDE */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2} direction="column">

            {/* TOP CARD */}
            <Grid item>
              <Box
                sx={{
                  backgroundColor: '#191C1F',
                  borderRadius: '6px',
                  padding: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '200px',
                  width: '68%',
                  marginLeft: '100px'
                }}
              >
                <Typography
                  sx={{
                    color: '#EBC80C',
                    fontSize: '12px',
                    fontWeight: 600,
                    mb: 1
                  }}
                >
                  SUMMER SALES
                </Typography>

                <Typography
                  sx={{
                    color: '#fff',
                    fontSize: '28px',
                    fontWeight: 600,
                    lineHeight: '36px',
                    mb: 2
                  }}
                >
                  New Google
                  <br />
                  Pixel 6 Pro
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FA8232',
                    borderRadius: '3px',
                    '&:hover': {
                      backgroundColor: '#e76f1f'
                    }
                  }}
                >
                  SHOP NOW →
                </Button>

                {/* DISCOUNT */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    backgroundColor: '#EFD33D',
                    color: '#000',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '6px 10px',
                    borderRadius: '3px'
                  }}
                >
                  29% OFF
                </Box>

                {/* IMAGE */}
                <Box
                  component="img"
                  src={pixelImage}
                  alt="Google Pixel"
                  sx={{
                    position: 'absolute',
                    right: '-10px',
                    bottom: '0',
                    width: '130px',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </Box>
            </Grid>

            {/* BOTTOM CARD */}
            <Grid item>
              <Box
                sx={{
                  backgroundColor: '#F2F4F5',
                  borderRadius: '6px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  minHeight: '180px',
                  gap: 2,
                  marginLeft:'100px'
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={earbudsImage}
                  alt="Earbuds"
                  sx={{
                    width: '140px',
                    height: '140px',
                    objectFit: 'contain',
                    flexShrink: 0,
                    marginLeft: '10px',

                  }}
                />

                {/* TEXT */}
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '22px',
                      fontWeight: 600,
                      color: '#191C1F',
                      mb: 1
                    }}
                  >
                    Xiaomi
                    <br />
                    FlipBuds Pro
                  </Typography>

                  <Typography
                    sx={{
                      color: '#2DA5F3',
                      fontWeight: 700,
                      mb: 2
                    }}
                  >
                    $299 USD
                  </Typography>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: '#FA8232',
                      borderRadius: '3px',
                      '&:hover': {
                        backgroundColor: '#e76f1f'
                      }
                    }}
                  >
                    SHOP NOW →
                  </Button>
                </Box>
              </Box>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      {/* FEATURE BAR */}
      <Paper
        elevation={0}
        sx={{
          mt: 13,
          border: '1px solid #E4E7E9',
          borderRadius: '6px',
          overflow: 'hidden'
        }}
      >
        <Grid container>
          {features.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{
                borderRight: {
                  md: index !== 3 ? '1px solid #E4E7E9' : 'none'
                },
                borderBottom: {
                  xs: '1px solid #E4E7E9',
                  sm: index < 2 ? '1px solid #E4E7E9' : 'none',
                  md: 'none'
                }
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  px: 3,
                  py: 2.5,
                  minHeight: '90px'
                }}
              >
                {/* ICON */}
                <Box
                  sx={{
                    color: '#191C1F',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  {item.icon}
                </Box>

                {/* TEXT */}
                <Box>
                  <Typography
                    sx={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: '#191C1F',
                      mb: 0.5,
                      width:200,
                      px:0.5
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '12px',
                      color: '#77878F',
                    }}
                  >
                    {item.sub}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
};

export default HeroSection;