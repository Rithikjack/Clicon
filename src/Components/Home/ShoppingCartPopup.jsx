import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Modal,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import camera from '../../assets/Camera.png';
import hearphone from '../../assets/hearphone.png'

// ── Usage ──────────────────────────────────────────────
// import ShoppingCartPopup from './ShoppingCartPopup';
//
// const [openCart, setOpenCart] = useState(false);
//
// <ShoppingCartPopup open={openCart} onClose={() => setOpenCart(false)} />
//
// Trigger it from your Navbar cart icon:
// <IconButton onClick={() => setOpenCart(true)}>
//   <img src={cart} ... />
// </IconButton>
// ────────────────────────────────────────────────────────

// ── Sample cart items — replace with your real data/state ──
const initialItems = [
  {
    id: 1,
    name: 'Canon EOS 1500D DSLR Camera Body+ 18-55 mm',
    price: 1500,
    qty: 1,
    // Replace src with your real image import or URL
    image: camera,
  },
  {
    id: 2,
    name: 'Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone',
    price: 269,
    qty: 2,
    image: hearphone,
  },
];

const CartItem = ({ item, onQtyChange, onRemove }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'flex-start',
      gap: 1.5,
      py: 1.5,
    }}
  >
    {/* Product image */}
    <Box
      sx={{
        width: 64,
        height: 64,
        borderRadius: '6px',
        border: '1px solid #E4E7E9',
        bgcolor: '#F8F9FA',
        flexShrink: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Replace this <img> src with your actual product image */}
      <img
        src={item.image || ''}
        alt={item.name}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      />
    </Box>

    {/* Name + price + qty */}
    <Box sx={{ flex: 1, minWidth: 0 }}>
      <Typography
        sx={{
          fontSize: '13px',
          fontWeight: 500,
          color: '#191C1F',
          lineHeight: 1.4,
          mb: 0.5,
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {item.name}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        {/* Qty stepper */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            border: '1px solid #E4E7E9',
            borderRadius: '4px',
            overflow: 'hidden',
            height: '26px',
          }}
        >
          <Box
            component="button"
            onClick={() => onQtyChange(item.id, item.qty - 1)}
            sx={{
              width: '26px',
              border: 'none',
              background: '#F5F5F5',
              cursor: 'pointer',
              fontSize: '16px',
              lineHeight: 1,
              color: '#5F6C73',
              '&:hover': { bgcolor: '#E0E0E0' },
            }}
          >
            −
          </Box>
          <Typography
            sx={{ px: 1.5, fontSize: '13px', fontWeight: 600, color: '#191C1F', userSelect: 'none' }}
          >
            {item.qty}
          </Typography>
          <Box
            component="button"
            onClick={() => onQtyChange(item.id, item.qty + 1)}
            sx={{
              width: '26px',
              border: 'none',
              background: '#F5F5F5',
              cursor: 'pointer',
              fontSize: '16px',
              lineHeight: 1,
              color: '#5F6C73',
              '&:hover': { bgcolor: '#E0E0E0' },
            }}
          >
            +
          </Box>
        </Box>

        <Typography sx={{ fontSize: '13px', color: '#929FA5' }}>×</Typography>

        <Typography sx={{ fontSize: '13px', fontWeight: 700, color: '#FA8232' }}>
          ${(item.price * item.qty).toLocaleString()}
        </Typography>
      </Box>
    </Box>

    {/* Remove button */}
    <IconButton
      size="small"
      onClick={() => onRemove(item.id)}
      sx={{ color: '#929FA5', mt: '-4px', '&:hover': { color: '#FA8232' } }}
    >
      <CloseIcon sx={{ fontSize: '16px' }} />
    </IconButton>
  </Box>
);

const ShoppingCartPopup = ({ open, onClose }) => {
  const [items, setItems] = useState(initialItems);

  const handleQtyChange = (id, newQty) => {
    if (newQty < 1) return;
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, qty: newQty } : it)));
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const subTotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
  const totalItems = items.reduce((sum, it) => sum + it.qty, 0);

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}
    >
      <Box
        sx={{
          bgcolor: '#fff',
          borderRadius: '8px',
          boxShadow: '0px 8px 40px rgba(0,0,0,0.12)',
          width: '380px',
          mt: '140px',
          mr: { xs: 1, md: '60px' },
          outline: 'none',
          overflow: 'hidden',
        }}
      >
        {/* ── Header ── */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            pt: 3,
            pb: 2,
            borderBottom: '1px solid #E4E7E9',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography sx={{ fontSize: '18px', fontWeight: 700, color: '#191C1F' }}>
              Shopping Cart
            </Typography>
            <Box
              sx={{
                bgcolor: '#FA8232',
                color: '#fff',
                borderRadius: '12px',
                px: 1,
                py: '1px',
                fontSize: '12px',
                fontWeight: 700,
                lineHeight: 1.6,
              }}
            >
              {String(totalItems).padStart(2, '0')}
            </Box>
          </Box>
          <IconButton
            size="small"
            onClick={onClose}
            sx={{ color: '#929FA5', '&:hover': { color: '#191C1F' } }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* ── Body ── */}
        <Box sx={{ px: 3, pt: 1, pb: 3 }}>
          {items.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 5 }}>
              <ShoppingCartOutlinedIcon sx={{ fontSize: 48, color: '#E4E7E9', mb: 1 }} />
              <Typography sx={{ color: '#929FA5', fontSize: '14px' }}>
                Your cart is empty
              </Typography>
            </Box>
          ) : (
            <>
              {items.map((item, idx) => (
                <React.Fragment key={item.id}>
                  <CartItem
                    item={item}
                    onQtyChange={handleQtyChange}
                    onRemove={handleRemove}
                  />
                  {idx < items.length - 1 && (
                    <Divider sx={{ borderColor: '#F0F2F3' }} />
                  )}
                </React.Fragment>
              ))}

              {/* Sub-total */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  mt: 2,
                  mb: 2.5,
                  pt: 2,
                  borderTop: '1px solid #E4E7E9',
                }}
              >
                <Typography sx={{ fontSize: '14px', fontWeight: 500, color: '#5F6C73' }}>
                  Sub-Total:
                </Typography>
                <Typography sx={{ fontSize: '15px', fontWeight: 700, color: '#191C1F' }}>
                  ${subTotal.toLocaleString()}.00 USD
                </Typography>
              </Box>

              {/* Checkout */}
              <Button
                fullWidth
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  mb: 1.5,
                  height: '46px',
                  bgcolor: '#FA8232',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                  borderRadius: '6px',
                  boxShadow: 'none',
                  '&:hover': { bgcolor: '#e07020', boxShadow: 'none' },
                }}
              >
                CHECKOUT NOW
              </Button>

              {/* View Cart */}
              <Button
                fullWidth
                variant="outlined"
                sx={{
                  height: '44px',
                  color: '#FA8232',
                  borderColor: '#FA8232',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.5px',
                  borderRadius: '6px',
                  '&:hover': { bgcolor: '#FFF5EE', borderColor: '#FA8232' },
                }}
              >
                VIEW CART
              </Button>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default ShoppingCartPopup;