import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import shopArrow from '../../assets/Blackarrow.png';

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
        py: { xs: '6px', sm: '8px' },
        px: { xs: '16px', sm: '40px', md: '160px' },
        fontFamily: "'Public Sans', sans-serif",
        minHeight: { xs: '40px', sm: '44px' },
      }}
    >

      {/* ── Left: Black Friday label ── */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
        <Box
          sx={{
            backgroundColor: '#F3DE6D',
            color: '#111',
            fontWeight: 700,
            fontSize: { xs: '10px', sm: '12px' },
            px: '7px',
            py: '2px',
            lineHeight: 1.5,
            fontFamily: "'Public Sans', sans-serif",
            transform: 'rotate(-3deg)',
            display: 'inline-block',
            flexShrink: 0,
          }}
        >
          Black
        </Box>
        <Typography
          sx={{
            color: '#fff',
            fontWeight: 600,
            fontSize: { xs: '12px', sm: '13px' },
            fontFamily: "'Public Sans', sans-serif",
            display: { xs: 'none', sm: 'block' },
          }}
        >
          Friday
        </Typography>
      </Box>

      {/* ── Center: Up to 59% OFF ── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: '3px', sm: '5px' },
          flex: 1,
          whiteSpace: 'nowrap',
        }}
      >
        <Typography sx={{ color: '#fff', fontSize: { xs: '11px', sm: '12px' }, fontFamily: "'Public Sans', sans-serif" }}>
          Up to
        </Typography>
        <Typography
          sx={{
            color: '#EBC80C',
            fontSize: { xs: '20px', sm: '24px', md: '28px' },
            fontWeight: 700,
            lineHeight: 1,
            fontFamily: "'Public Sans', sans-serif",
          }}
        >
          59%
        </Typography>
        <Typography sx={{ color: '#fff', fontSize: { xs: '11px', sm: '12px' }, fontWeight: 600, fontFamily: "'Public Sans', sans-serif" }}>
          OFF
        </Typography>
      </Box>

      {/* ── Right: Shop Now + Close ── */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: { xs: '4px', sm: '8px' },
          flex: 1,
        }}
      >
        {/* Shop Now — full label on sm+ */}
        <Button
          variant="outlined"
          sx={{
            borderColor: '#F3DE6D',
            background: '#EBC80C',
            color: '#191C1F',
            fontWeight: 700,
            fontSize: { xs: '14px', sm: '11px', md: '12px' },
            letterSpacing: '0.06em',
            px: { xs: '10px', sm: '20px', md: '28px' },
            py: { xs: '5px', sm: '7px', md: '8px' },
            borderRadius: 0,
            fontFamily: "'Public Sans', sans-serif",
            // minWidth: 'auto',
            height:'48px',
            width:'156px',
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            gap: '6px',
            '&:hover': { backgroundColor: '#F3DE6D', color: '#111', borderColor: '#F3DE6D' },
          }}
        >
          SHOP NOW
          <Box
            component="img"
            src={shopArrow}
            alt="arrow"
            sx={{ width: { xs: '14px', sm: '16px', md: '18px' }, height: { xs: '12px', sm: '13px', md: '14px' }, objectFit: 'contain' }}
          />
        </Button>

        {/* Shop Now — icon only on xs */}
        <Button
          variant="outlined"
          sx={{
            borderColor: '#F3DE6D',
            background: '#EBC80C',
            color: '#191C1F',
            fontWeight: 700,
            px: '8px',
            py: '4px',
            borderRadius: 0,
            minWidth: 'auto',
            display: { xs: 'flex', sm: 'none' },
            alignItems: 'center',
          }}
        >
          <Box component="img" src={shopArrow} alt="shop" sx={{ width: '14px', height: '12px', objectFit: 'contain' }} />
        </Button>

        {/* Close — last inside right box */}
        <IconButton
  size="small"
  onClick={() => setVisible(false)}
  sx={{
    color: '#fff',
    p: { xs: '2px', sm: '4px' },
    px: 1,
    position: 'absolute',
    right: { xs: '8px', sm: '16px' },
    '&:hover': { color: '#EBC80C' }
  }}
>
  <CloseIcon sx={{ fontSize: { xs: '14px', sm: '16px' } }} />
</IconButton>

      </Box>

    </Box>
  );
};

export default Offerbar;