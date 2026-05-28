import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// ── replace with real product images ──
import product1 from '../../assets/Googlepixel.png';
import product2 from '../../assets/Backcase.png';

const orderActivity = [
  { icon: <CheckCircleOutlinedIcon sx={{ color: '#38a169', fontSize: '18px' }} />, text: 'Your order has been delivered. Thank you for shopping at Clicon!', date: '23 Jan, 2021 at 7:32 PM', bg: '#e8f8ef' },
  { icon: <PersonOutlineOutlinedIcon sx={{ color: '#FA8232', fontSize: '18px' }} />, text: 'Our delivery man (John Wick) Has picked-up your order for delivery.', date: '23 Jan, 2021 at 2:00 PM', bg: '#fff5ee' },
  { icon: <LocationOnOutlinedIcon sx={{ color: '#FA8232', fontSize: '18px' }} />, text: 'Your order has reached at last mile hub.', date: '22 Jan, 2021 at 6:00 AM', bg: '#fff5ee' },
  { icon: <LocalShippingOutlinedIcon sx={{ color: '#FA8232', fontSize: '18px' }} />, text: 'Your order on the way to (last mile) hub.', date: '21, 2021 at 5:32 AM', bg: '#fff5ee' },
  { icon: <CheckCircleOutlinedIcon sx={{ color: '#FA8232', fontSize: '18px' }} />, text: 'Your order is successfully verified.', date: '20 Jan, 2021 at 7:32 PM', bg: '#fff5ee' },
  { icon: <InventoryOutlinedIcon sx={{ color: '#FA8232', fontSize: '18px' }} />, text: 'Your order has been confirmed.', date: '19 Jan, 2021 at 2:61 PM', bg: '#fff5ee' },
];

const products = [
  {
    img: null, // replace with product1
    category: 'SMARTPHONE',
    name: 'Google Pixel 6 Pro- 5G Android Phone - Unlocked Smartphone with Advanced Pixel C...',
    price: '$899',
    qty: 'x1',
    subtotal: '$899',
  },
  {
    img: null, // replace with product2
    category: 'ACCESSORIES',
    name: 'Tech21 Evo Clear for Google Pixel 6 Pro - Crystal Clear Phone Case with 12ft Multi-Dr...',
    price: '$39',
    qty: 'x1',
    subtotal: '$39',
  },
];

const trackSteps = ['Order Placed', 'Packaging', 'On The Road', 'Delivered'];
const activeStep = 1;

const starRatingOptions = ['1 Star Rating', '2 Star Rating', '3 Star Rating', '4 Star Rating', '5 Star Rating'];

const OrderDetailsPage = () => {
  const navigate = useNavigate();

  // ── Rating dialog state ──
  const [openRating, setOpenRating] = useState(false);
  const [rating, setRating] = useState('5 Star Rating');
  const [feedback, setFeedback] = useState('');

  const handlePublishReview = () => {
    console.log({ rating, feedback });
    setOpenRating(false);
    setFeedback('');
  };

  // Star count from selected rating string
  const starCount = parseInt(rating.charAt(0));

  return (
    <Box sx={{ fontFamily: "'Public Sans', sans-serif" }}>

      {/* ── Header ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3, mb: 3 }}>

        {/* Title Row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box
            onClick={() => navigate('/account/orders')}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', color: '#444' }}
          >
            <ArrowBackIcon sx={{ fontSize: '18px' }} />
            <Typography sx={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: "'Public Sans', sans-serif" }}>
              Order Details
            </Typography>
          </Box>

          {/* Leave a Rating — opens dialog */}
          <Typography
            onClick={() => setOpenRating(true)}
            sx={{
              fontSize: '13px',
              color: '#FA8232',
              cursor: 'pointer',
              fontFamily: "'Public Sans', sans-serif",
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Leave a Rating +
          </Typography>
        </Box>

        {/* Order Summary Box */}
        <Box
          sx={{
            backgroundColor: '#fffbf5',
            border: '1px solid #ffe0c0',
            borderRadius: '6px',
            p: 2.5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2.5,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: '18px', color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
              #96459761
            </Typography>
            <Typography sx={{ fontSize: '12px', color: '#777', mt: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
              4 Products · Order Placed in 17 Jan, 2021 at 7:32 PM
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: '22px', color: '#FA8232', fontFamily: "'Public Sans', sans-serif" }}>
            $1199.00
          </Typography>
        </Box>

        {/* Expected Arrival */}
        <Typography sx={{ fontSize: '13px', color: '#444', mb: 2, fontFamily: "'Public Sans', sans-serif" }}>
          Order expected arrival <strong>23 Jan, 2021</strong>
        </Typography>

        {/* Tracking Steps */}
        <Box sx={{ position: 'relative', mb: 1 }}>
          {/* Background line */}
          <Box sx={{ position: 'absolute', top: '12px', left: '12%', width: '76%', height: '3px', backgroundColor: '#e0e0e0', zIndex: 0 }} />
          {/* Progress line */}
          <Box
            sx={{
              position: 'absolute',
              top: '12px',
              left: '12%',
              width: `${(activeStep / (trackSteps.length - 1)) * 76}%`,
              height: '3px',
              backgroundColor: '#FA8232',
              zIndex: 1,
            }}
          />
          {/* Steps */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
            {trackSteps.map((step, i) => (
              <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%' }}>
                <Box
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: '50%',
                    backgroundColor: i <= activeStep ? '#FA8232' : '#e0e0e0',
                    border: `3px solid ${i <= activeStep ? '#FA8232' : '#e0e0e0'}`,
                    mb: 1,
                  }}
                />
                <Box sx={{ fontSize: '18px', mb: 0.5 }}>
                  {i === 0 && '📋'}
                  {i === 1 && '📦'}
                  {i === 2 && '🚚'}
                  {i === 3 && '🎁'}
                </Box>
                <Typography sx={{ fontSize: '11px', color: i <= activeStep ? '#FA8232' : '#aaa', fontFamily: "'Public Sans', sans-serif", textAlign: 'center' }}>
                  {step}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* ── Order Activity ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3, mb: 3 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', mb: 2.5, pb: 1.5, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
          Order Activity
        </Typography>

        {orderActivity.map((act, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: '50%',
                backgroundColor: act.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              {act.icon}
            </Box>
            <Box>
              <Typography sx={{ fontSize: '13px', color: '#444', fontFamily: "'Public Sans', sans-serif" }}>
                {act.text}
              </Typography>
              <Typography sx={{ fontSize: '11px', color: '#aaa', mt: 0.3, fontFamily: "'Public Sans', sans-serif" }}>
                {act.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── Products ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 3, mb: 3 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', mb: 2.5, pb: 1.5, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
          Product (02)
        </Typography>

        {/* Table Header */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr', gap: 1, pb: 1, borderBottom: '1px solid #e0e0e0', mb: 1 }}>
          {['PRODUCTS', 'PRICE', 'QUANTITY', 'SUB-TOTAL'].map((h) => (
            <Typography key={h} sx={{ fontSize: '11px', fontWeight: 700, color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
              {h}
            </Typography>
          ))}
        </Box>

        {products.map((p, i) => (
          <Box key={i} sx={{ display: 'grid', gridTemplateColumns: '3fr 1fr 1fr 1fr', gap: 1, py: 1.5, borderBottom: '1px solid #f5f5f5', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                component="img"
                src={p.img || ''}
                alt={p.name}
                sx={{ width: 50, height: 50, objectFit: 'contain', border: '1px solid #f0f0f0', borderRadius: '4px', bgcolor: '#fafafa' }}
              />
              <Box>
                <Typography sx={{ fontSize: '10px', color: '#FA8232', fontWeight: 600, fontFamily: "'Public Sans', sans-serif" }}>
                  {p.category}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#444', fontFamily: "'Public Sans', sans-serif", lineHeight: 1.4 }}>
                  {p.name}
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ fontSize: '13px', fontWeight: 600, fontFamily: "'Public Sans', sans-serif" }}>{p.price}</Typography>
            <Typography sx={{ fontSize: '13px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>{p.qty}</Typography>
            <Typography sx={{ fontSize: '13px', fontWeight: 600, fontFamily: "'Public Sans', sans-serif" }}>{p.subtotal}</Typography>
          </Box>
        ))}
      </Box>

      {/* ── Billing / Shipping / Notes ── */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>

        {/* Billing */}
        <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 2.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', mb: 1.5, pb: 1, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
            Billing Address
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '13px', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>Kevin Gilbert</Typography>
          <Typography sx={{ fontSize: '12px', color: '#777', mb: 0.5, lineHeight: 1.6, fontFamily: "'Public Sans', sans-serif" }}>
            East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka -1200, Bangladesh
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#777', mb: 0.3, fontFamily: "'Public Sans', sans-serif" }}>
            <strong>Phone Number:</strong> +1-202-555-0118
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
            <strong>Email:</strong> kevin.gilbert@gmail.com
          </Typography>
        </Box>

        {/* Shipping */}
        <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 2.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', mb: 1.5, pb: 1, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
            Shipping Address
          </Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '13px', mb: 0.5, fontFamily: "'Public Sans', sans-serif" }}>Kevin Gilbert</Typography>
          <Typography sx={{ fontSize: '12px', color: '#777', mb: 0.5, lineHeight: 1.6, fontFamily: "'Public Sans', sans-serif" }}>
            East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D, Dhaka -1200, Bangladesh
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#777', mb: 0.3, fontFamily: "'Public Sans', sans-serif" }}>
            <strong>Phone Number:</strong> +1-202-555-0118
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
            <strong>Email:</strong> kevin.gilbert@gmail.com
          </Typography>
        </Box>

        {/* Order Notes */}
        <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: 2.5 }}>
          <Typography sx={{ fontWeight: 700, fontSize: '13px', textTransform: 'uppercase', mb: 1.5, pb: 1, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
            Order Notes
          </Typography>
          <Typography sx={{ fontSize: '12px', color: '#777', lineHeight: 1.7, fontFamily: "'Public Sans', sans-serif" }}>
            Donec ac vehicula turpis. Aenean sagittis est eu arcu ornare, eget venenatis purus lobortis. Aliquam erat volutpat. Aliquam magna odio.
          </Typography>
        </Box>

      </Box>

      {/* ── Rating Dialog ── */}
      <Dialog
        open={openRating}
        onClose={() => setOpenRating(false)}
        PaperProps={{
          sx: { borderRadius: '8px', width: '420px', p: 0 },
        }}
      >
        <DialogContent sx={{ p: 3 }}>

          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
              Leave a Rating
            </Typography>
            <IconButton size="small" onClick={() => setOpenRating(false)}>
              <CloseIcon sx={{ fontSize: '18px', color: '#777' }} />
            </IconButton>
          </Box>

          {/* Rating Dropdown */}
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1a1a2e', mb: 1, fontFamily: "'Public Sans', sans-serif" }}>
            Rating
          </Typography>
          <FormControl fullWidth size="small" sx={{ mb: 2.5 }}>
            <Select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                borderRadius: '4px',
                fontSize: '13px',
                fontFamily: "'Public Sans', sans-serif",
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#e0e0e0' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#FA8232' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#FA8232' },
              }}
              renderValue={(val) => (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <span key={i} style={{ color: i < parseInt(val.charAt(0)) ? '#FA8232' : '#e0e0e0', fontSize: '16px' }}>★</span>
                    ))}
                  </Box>
                  <Typography sx={{ fontSize: '13px', fontFamily: "'Public Sans', sans-serif" }}>
                    {val}
                  </Typography>
                </Box>
              )}
            >
              {starRatingOptions.map((r) => (
                <MenuItem
                  key={r}
                  value={r}
                  sx={{
                    fontSize: '13px',
                    fontFamily: "'Public Sans', sans-serif",
                    '&:hover': { color: '#FA8232' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} style={{ color: i < parseInt(r.charAt(0)) ? '#FA8232' : '#e0e0e0', fontSize: '14px' }}>★</span>
                      ))}
                    </Box>
                    {r}
                  </Box>
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Feedback */}
          <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#1a1a2e', mb: 1, fontFamily: "'Public Sans', sans-serif" }}>
            Feedback
          </Typography>
          <TextField
            multiline
            rows={4}
            fullWidth
            placeholder="Write down your feedback about our product & services"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            sx={{
              mb: 2.5,
              '& .MuiOutlinedInput-root': {
                borderRadius: '4px',
                fontSize: '13px',
                fontFamily: "'Public Sans', sans-serif",
                '& fieldset': { borderColor: '#e0e0e0' },
                '&:hover fieldset': { borderColor: '#FA8232' },
                '&.Mui-focused fieldset': { borderColor: '#FA8232' },
              },
            }}
          />

          {/* Publish Button */}
          <Button
            variant="contained"
            fullWidth
            onClick={handlePublishReview}
            sx={{
              backgroundColor: '#FA8232',
              color: '#fff',
              fontWeight: 700,
              fontSize: '13px',
              fontFamily: "'Public Sans', sans-serif",
              py: 1.3,
              borderRadius: '4px',
              boxShadow: 'none',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              '&:hover': { backgroundColor: '#d44d20', boxShadow: 'none' },
            }}
          >
            Publish Review
          </Button>

        </DialogContent>
      </Dialog>

    </Box>
  );
};

export default OrderDetailsPage;