import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import shopArrow from '../../assets/Blackarrow.png'

const Offerbar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Box
      sx={{
        backgroundColor: '#1a1a2e',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        py: '8px',
        px: '35px',
        fontFamily: "'Public Sans', sans-serif",
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px', flex: 1 }}>
       <Box
  sx={{
    backgroundColor: '#F3DE6D',
    color: '#111',
    fontWeight: 700,
    fontSize: '12px',
    px: '7px',
    py: '2px',
    lineHeight: 1.5,
    fontFamily: "'Public Sans', sans-serif",
    transform: 'rotate(-3deg)',        // ← add this
    display: 'inline-block',           // ← needed for transform to work
  }}
>
  Black
</Box>
        <Typography
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: '13px',
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          Friday
        </Typography>
      </Box>


      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <Typography
          sx={{
            color: '#ffff',
            fontSize: '12px',
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          Up to
        </Typography>
        <Typography
          sx={{
            color: '#EBC80C',
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: 1,
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          59%
        </Typography>
        <Typography
          sx={{
            color: '#ffff',
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          OFF
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
        <Button
          variant="outlined"
          sx={{
            borderColor: '#F3DE6D',
            background:'#EBC80C',
            color: '#191C1F',
            fontWeight: 700,
            fontSize: '11px',
            letterSpacing: '0.06em',
            px: '16px',
            py: '5px',
            borderRadius: 0,
            fontFamily: "'Public Sans', sans-serif",
            '&:hover': {
              backgroundColor: '#F3DE6D',
              color: '#111',
              borderColor: '#F3DE6D',
            },
          }}
        >
          SHOP NOW 
          <Box
                  component="img"
                  src={shopArrow}             // ← your arrow image
                  alt="arrow"
                  sx={{
                    width: '18px',            // ← adjust width
                    height: '14px',           // ← adjust height
                    objectFit: 'contain',
                  }}
                />
        </Button>
      </Box>
    </Box>
  );
};

export default Offerbar;