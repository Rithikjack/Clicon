import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper
} from '@mui/material';

// Images
import xboxImage from '../../assets/HeroImage.png';
import pixelImage from '../../assets/Pixel.png';
import earbudsImage from '../../assets/Earbuds.png';

import shopArrow from '../../assets/Orangearrow.png';

import deliveryImage from '../../assets/Package.png';
import returnImage from '../../assets/Trophy.png';
import paymentImage from '../../assets/CreditCard.png';
import supportImage from '../../assets/Headphonesicon.png';

const HeroSection = () => {

  const features = [
    {
      img: deliveryImage,
      title: 'FASTED DELIVERY',
      sub: 'Delivery in 24/H'
    },
    {
      img: returnImage,
      title: '24 HOURS RETURN',
      sub: '100% money-back guarantee'
    },
    {
      img: paymentImage,
      title: 'SECURE PAYMENT',
      sub: 'Your money is safe'
    },
    {
      img: supportImage,
      title: 'SUPPORT 24/7',
      sub: 'Live contact/message'
    }
  ];

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 6, lg: '160px' },
        py: { xs: 2, md: 3 }
      }}
    >

      {/* HERO ROW */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          alignItems: 'stretch',
          gap: 2
        }}
      >

        {/* LEFT BANNER */}
        <Box sx={{ flex: '2 1 0', minWidth: 0 }}>
          <Box
            sx={{
              backgroundColor: '#F2F4F5',
              borderRadius: '6px',
              p: { xs: 3, sm: 4, md: 5 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              position: 'relative',
              height: '100%',
              textAlign: { xs: 'center', md: 'left' },
              overflow: 'hidden'
            }}
          >

            {/* TEXT */}
            <Box
              sx={{
                maxWidth: '350px',
                zIndex: 2
              }}
            >
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
                  fontSize: { xs: '30px', sm: '38px', md: '48px' },
                  fontWeight: 700,
                  color: '#191C1F',
                  mb: 2,
                  lineHeight: 1.2
                }}
              >
                Xbox Consoles
              </Typography>

              <Typography
                sx={{
                  color: '#5F6C72',
                  fontSize: { xs: '14px', md: '15px' },
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
                  px: 3,
                  py: 1.5,
                  fontWeight: 600,
                  borderRadius: '3px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    backgroundColor: '#e76f1f'
                  }
                }}
              >
                SHOP NOW

                <Box
                  component="img"
                  src={shopArrow}
                  alt="arrow"
                  sx={{
                    width: { xs: '14px', sm: '16px' },
                    height: { xs: '12px', sm: '14px' },
                    objectFit: 'contain'
                  }}
                />
              </Button>
            </Box>

            {/* IMAGE */}
            <Box
              component="img"
              src={xboxImage}
              alt="Xbox"
              sx={{
                width: { xs: '220px', sm: '280px', md: '320px' },
                height: 'auto',
                objectFit: 'contain',
                mt: { xs: 3, md: 0 }
              }}
            />

            {/* PRICE */}
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 15, md: 40 },
                right: { xs: 15, md: 40 },
                width: { xs: '65px', sm: '80px' },
                height: { xs: '65px', sm: '80px' },
                borderRadius: '50%',
                backgroundColor: '#2DA5F3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: { xs: '16px', sm: '18px' },
                border: '3px solid #fff'
              }}
            >
              $299
            </Box>

          </Box>
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            flex: '1 1 0',
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >

          {/* TOP CARD */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#191C1F',
              borderRadius: '6px',
              p: { xs: 3, sm: 4 },
              position: 'relative',
              overflow: 'hidden',
              minHeight: { xs: '240px', sm: '260px' }
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
                fontSize: { xs: '24px', sm: '28px' },
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
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                '&:hover': {
                  backgroundColor: '#e76f1f'
                }
              }}
            >
              SHOP NOW

              <Box
                component="img"
                src={shopArrow}
                alt="arrow"
                sx={{
                  width: { xs: '14px', sm: '16px' },
                  height: { xs: '12px', sm: '14px' }
                }}
              />
            </Button>

            {/* Badge */}
            <Box
              sx={{
                position: 'absolute',
                height:30,
                top: '120px',
                right: '25px',
                backgroundColor: '#EFD33D',
                color: '#000',
                fontSize: '12px',
                fontWeight: 700,
                px: 1.5,
                py: 0.8,
                borderRadius: '3px'
              }}
            >
              29% OFF
            </Box>

            {/* Pixel Image */}
            <Box
              component="img"
              src={pixelImage}
              alt="Google Pixel"
              sx={{
                position: 'absolute',
                right: { xs: '-10px', sm: '0px' },
                bottom: '0',
                width: { xs: '110px', sm: '130px' },
                objectFit: 'contain'
              }}
            />
          </Box>

          {/* BOTTOM CARD */}
          <Box
            sx={{
              flex: 1,
              backgroundColor: '#F2F4F5',
              borderRadius: '6px',
              p: { xs: 3, sm: 4 },
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center',
              gap: 2,
              minHeight: { xs: '220px', sm: '180px' },
              textAlign: { xs: 'center', sm: 'left' }
            }}
          >

            <Box
              component="img"
              src={earbudsImage}
              alt="Earbuds"
              sx={{
                width: { xs: '130px', sm: '120px' },
                height: { xs: '120px', sm: '120px' },
                objectFit: 'contain',
                flexShrink: 0
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '20px', sm: '22px' },
                  fontWeight: 600,
                  color: '#191C1F',
                  mb: 1,
                  fontSize:24
                }}
              >
                Xiaomi
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    backgroundColor: '#e76f1f'
                  }
                }}
              >
                SHOP NOW

                <Box
                  component="img"
                  src={shopArrow}
                  alt="arrow"
                  sx={{
                    width: { xs: '14px', sm: '16px' },
                    height: { xs: '12px', sm: '14px' }
                  }}
                />
              </Button>
            </Box>
          </Box>

        </Box>
      </Box>

{/* FEATURES BAR */}
<Paper
  elevation={0}
  sx={{
    mt: 2,
    border: '1px solid #E4E7E9',
    borderRadius: '6px',
    overflow: 'hidden'
  }}
>
  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    {features.map((item, index) => (
      <Box
        key={index}
        sx={{
          flex: {
            xs: '1 1 100%',
            sm: '1 1 50%',
            lg: '1 1 25%'
          },

          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',

          '&::after': {
            content: '""',
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            width: '1px',
            height: '40px',
            backgroundColor: '#E4E7E9',
            display: {
              xs: 'none',
              lg: index !== 3 ? 'block' : 'none'
            }
          },

          borderBottom: {
            xs: index !== 3 ? '1px solid #E4E7E9' : 'none',
            sm: index < 2 ? '1px solid #E4E7E9' : 'none',
            lg: 'none'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            width: '100%',
            px: { xs: 2, sm: 3 },
            py: 2.5,
            minHeight: '90px'
          }}
        >

          {/* IMAGE */}
          <Box
            component="img"
            src={item.img}
            alt={item.title}
            sx={{
              width: 32,
              height: 32,
              objectFit: 'contain',
              flexShrink: 0
            }}
          />

          {/* TEXT */}
          <Box>
            <Typography
              sx={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#191C1F',
                mb: 0.5,
                fontFamily: "'Public Sans', sans-serif"
              }}
            >
              {item.title}
            </Typography>

            <Typography
              sx={{
                fontSize: '12px',
                color: '#77878F',
                fontFamily: "'Public Sans', sans-serif"
              }}
            >
              {item.sub}
            </Typography>
          </Box>

        </Box>
      </Box>
    ))}
  </Box>
</Paper>

    </Box>
  );
};

export default HeroSection;