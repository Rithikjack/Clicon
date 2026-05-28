import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';

import visaLogo from '../../assets/Visa.png';
import mastercardLogo from '../../assets/Mastercard.png';

const cards = [
  {
    id: 1,
    balance: '$95,400.00 USD',
    cardNumber: '**** **** **** 3814',
    holder: 'Kevin Gilbert',
    logo: visaLogo,
    bg: '#1B3A6B',
  },
  {
    id: 2,
    balance: '$87,583.00 USD',
    cardNumber: '**** **** **** 1761',
    holder: 'Kevin Gilbert',
    logo: mastercardLogo,
    bg: '#2E7D32',
  },
];

const inputSx = {
  mb: 2,
  '& .MuiOutlinedInput-root': {
    borderRadius: '4px',
    fontSize: '13px',
    '& fieldset': { borderColor: '#e0e0e0' },
    '&:hover fieldset': { borderColor: '#FA8232' },
    '&.Mui-focused fieldset': { borderColor: '#FA8232', borderWidth: '1.5px' },
  },
};

const SectionTitle = ({ title, action, onAction }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: '14px',
        color: '#1a1a2e',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
        fontFamily: "'Public Sans', sans-serif",
      }}
    >
      {title}
    </Typography>
    {action && (
      <Typography
        onClick={onAction}
        sx={{
          fontSize: '13px',
          color: '#FA8232',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: 0.5,
          fontFamily: "'Public Sans', sans-serif",
          '&:hover': { textDecoration: 'underline' },
        }}
      >
        {action} <ArrowForwardIcon sx={{ fontSize: '14px' }} />
      </Typography>
    )}
  </Box>
);

const CardsAddressPage = () => {
  const navigate = useNavigate();

  // ── Card menu ──
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const handleMenuOpen = (e, cardId) => { setAnchorEl(e.currentTarget); setActiveCard(cardId); };
  const handleMenuClose = () => { setAnchorEl(null); setActiveCard(null); };

  // ── Add New Card dialog ──
  const [openDialog, setOpenDialog] = useState(false);
  const [form, setForm] = useState({ name: '', number: '', expiry: '', cvc: '' });
  const handleChange = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }));
  const handleAddCard = () => {
    console.log('New card:', form);
    setOpenDialog(false);
    setForm({ name: '', number: '', expiry: '', cvc: '' });
  };

  return (
    <Box sx={{ fontFamily: "'Public Sans', sans-serif" }}>

      {/* ── Payment Option ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3, mb: 3 }}>
        <SectionTitle
          title="Payment Option"
          action="Add Card"
          onAction={() => setOpenDialog(true)}   
        />

        {/* Cards Row */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
          {cards.map((card) => (
            <Box
              key={card.id}
              sx={{
                backgroundColor: card.bg,
                borderRadius: '12px',
                p: 2.5,
                width: '260px',
                position: 'relative',
                color: '#fff',
              }}
            >
              {/* Top Row */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '16px', color: '#fff', fontFamily: "'Public Sans', sans-serif" }}>
                  {card.balance}
                </Typography>
                <IconButton size="small" onClick={(e) => handleMenuOpen(e, card.id)} sx={{ color: '#fff', p: 0 }}>
                  <MoreHorizIcon />
                </IconButton>
              </Box>

              {/* Card Number */}
              <Box sx={{ mb: 2 }}>
                <Typography sx={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
                  CARD NUMBER
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Typography sx={{ fontSize: '14px', letterSpacing: '2px', color: '#fff', fontFamily: "'Public Sans', sans-serif" }}>
                    {card.cardNumber}
                  </Typography>
                  <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.7)', p: 0 }}>
                    <ContentCopyOutlinedIcon sx={{ fontSize: '14px' }} />
                  </IconButton>
                </Box>
              </Box>

              {/* Bottom Row */}
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box component="img" src={card.logo} alt="Card Logo" sx={{ height: '24px', objectFit: 'contain' }} />
                <Typography sx={{ fontSize: '13px', color: '#fff', fontFamily: "'Public Sans', sans-serif" }}>
                  {card.holder}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Card options dropdown */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={{ sx: { borderRadius: '6px', border: '1px solid #e0e0e0', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', minWidth: '130px' } }}
        >
          <MenuItem onClick={handleMenuClose} sx={{ fontSize: '13px', fontFamily: "'Public Sans', sans-serif", '&:hover': { color: '#FA8232' } }}>
            Edit Card
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={{ fontSize: '13px', fontFamily: "'Public Sans', sans-serif", '&:hover': { color: '#e53e3e' } }}>
            Delete Card
          </MenuItem>
        </Menu>
      </Box>

      {/* ── Billing & Shipping Address ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>

          {/* Billing */}
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', mb: 2, pb: 1.5, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
              Billing Address
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '15px', mb: 1, fontFamily: "'Public Sans', sans-serif" }}>Kevin Gilbert</Typography>
            <Typography sx={{ fontSize: '13px', color: '#555', mb: 1, lineHeight: 1.6, fontFamily: "'Public Sans', sans-serif" }}>
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka -1200, Bangladesh
            </Typography>
            <Typography sx={{ fontSize: '13px', color: '#555', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
              <strong>Phone Number:</strong> +1-202-555-0118
            </Typography>
            <Typography sx={{ fontSize: '13px', color: '#555', mb: 2.5, fontFamily: "'Public Sans', sans-serif" }}>
              <strong>Email:</strong> kevin.gilbert@gmail.com
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/account/settings')}
              sx={{ borderColor: '#FA8232', color: '#FA8232', fontSize: '12px', fontWeight: 600, fontFamily: "'Public Sans', sans-serif", px: 3, py: 1, borderRadius: '4px', textTransform: 'uppercase', '&:hover': { backgroundColor: '#fff5ee', borderColor: '#FA8232' } }}
            >
              Edit Address
            </Button>
          </Box>

          {/* Shipping */}
          <Box sx={{ borderLeft: { md: '1px solid #e0e0e0' }, pl: { md: 3 } }}>
            <Typography sx={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', mb: 2, pb: 1.5, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
              Shipping Address
            </Typography>
            <Typography sx={{ fontWeight: 700, fontSize: '15px', mb: 1, fontFamily: "'Public Sans', sans-serif" }}>Kevin Gilbert</Typography>
            <Typography sx={{ fontSize: '13px', color: '#555', mb: 1, lineHeight: 1.6, fontFamily: "'Public Sans', sans-serif" }}>
              East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka -1200, Bangladesh
            </Typography>
            <Typography sx={{ fontSize: '13px', color: '#555', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
              <strong>Phone Number:</strong> +1-202-555-0118
            </Typography>
            <Typography sx={{ fontSize: '13px', color: '#555', mb: 2.5, fontFamily: "'Public Sans', sans-serif" }}>
              <strong>Email:</strong> kevin.gilbert@gmail.com
            </Typography>
            <Button variant="outlined" onClick={() => navigate('/account/settings')}
              sx={{ borderColor: '#FA8232', color: '#FA8232', fontSize: '12px', fontWeight: 600, fontFamily: "'Public Sans', sans-serif", px: 3, py: 1, borderRadius: '4px', textTransform: 'uppercase', '&:hover': { backgroundColor: '#fff5ee', borderColor: '#FA8232' } }}
            >
              Edit Address
            </Button>
          </Box>

        </Box>
      </Box>

      {/* ── Add New Card Dialog ── */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        PaperProps={{ sx: { borderRadius: '8px', width: '440px' } }}
      >
        <DialogContent sx={{ p: 3 }}>

          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '15px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
              Add New Card
            </Typography>
            <IconButton size="small" onClick={() => setOpenDialog(false)}>
              <CloseIcon sx={{ fontSize: '18px', color: '#777' }} />
            </IconButton>
          </Box>

          {/* Name on Card */}
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1a1a2e', mb: 0.75, fontFamily: "'Public Sans', sans-serif" }}>Name on Card</Typography>
          <TextField fullWidth size="small" placeholder="Name on Card" value={form.name} onChange={handleChange('name')} sx={inputSx} />

          {/* Card Number */}
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1a1a2e', mb: 0.75, fontFamily: "'Public Sans', sans-serif" }}>Card Number</Typography>
          <TextField fullWidth size="small" placeholder="Card Number" value={form.number} onChange={handleChange('number')} inputProps={{ maxLength: 19 }} sx={inputSx} />

          {/* Expiry + CVC */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1a1a2e', mb: 0.75, fontFamily: "'Public Sans', sans-serif" }}>Expire Date</Typography>
              <TextField fullWidth size="small" placeholder="MM / YY" value={form.expiry} onChange={handleChange('expiry')} inputProps={{ maxLength: 7 }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px', fontSize: '13px', '& fieldset': { borderColor: '#e0e0e0' }, '&:hover fieldset': { borderColor: '#FA8232' }, '&.Mui-focused fieldset': { borderColor: '#FA8232' } } }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1a1a2e', mb: 0.75, fontFamily: "'Public Sans', sans-serif" }}>CVC</Typography>
              <TextField fullWidth size="small" placeholder="CVC" value={form.cvc} onChange={handleChange('cvc')} inputProps={{ maxLength: 4 }} sx={{ '& .MuiOutlinedInput-root': { borderRadius: '4px', fontSize: '13px', '& fieldset': { borderColor: '#e0e0e0' }, '&:hover fieldset': { borderColor: '#FA8232' }, '&.Mui-focused fieldset': { borderColor: '#FA8232' } } }} />
            </Box>
          </Box>

          {/* Submit */}
          <Button
            fullWidth variant="contained" onClick={handleAddCard}
            sx={{ mt: 3, height: '46px', bgcolor: '#FA8232', color: '#fff', fontWeight: 700, fontSize: '14px', letterSpacing: '0.5px', borderRadius: '4px', boxShadow: 'none', textTransform: 'uppercase', fontFamily: "'Public Sans', sans-serif", '&:hover': { bgcolor: '#e07020', boxShadow: 'none' } }}
          >
            Add Card
          </Button>

        </DialogContent>
      </Dialog>

    </Box>
  );
};

export default CardsAddressPage;