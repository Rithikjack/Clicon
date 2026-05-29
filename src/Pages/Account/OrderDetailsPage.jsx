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
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// ── replace with real product images ──
import product1 from '../../assets/Googlepixel.png';
import product2 from '../../assets/Backcase.png';

import Tik from '../../assets/OrderHistory/Tik.png'
import User2 from '../../assets/OrderHistory/User2.png'
import Map from '../../assets/OrderHistory/Map.png'
import Location from '../../assets/OrderHistory/Location.png'
import Success from '../../assets/OrderHistory/Sucess.png'
import Completed from '../../assets/OrderHistory/Completed.png'

import progress from '../../assets/OrderHistory/Progress.png'
import orderplaced from '../../assets/OrderHistory/Notebook.png'
import packaging from '../../assets/OrderHistory/Package.png'
import onroad from '../../assets/OrderHistory/Truck.png'
import Deliverd from '../../assets/OrderHistory/Handshake.png'

const orderActivity = [
  { img: Tik,       text: 'Your order has been delivered. Thank you for shopping at Clicon!', date: '23 Jan, 2021 at 7:32 PM' },
  { img: User2,     text: 'Our delivery man (John Wick) Has picked-up your order for delivery.', date: '23 Jan, 2021 at 2:00 PM' },
  { img: Map,       text: 'Your order has reached at last mile hub.', date: '22 Jan, 2021 at 6:00 AM' },
  { img: Location,  text: 'Your order on the way to (last mile) hub.', date: '21, 2021 at 5:32 AM' },
  { img: Success,   text: 'Your order is successfully verified.', date: '20 Jan, 2021 at 7:32 PM' },
  { img: Completed, text: 'Your order has been confirmed.', date: '19 Jan, 2021 at 2:61 PM' },
];

const products = [
  {
    img: product1,
    category: 'SMARTPHONE',
    name: 'Google Pixel 6 Pro- 5G Android Phone - Unlocked Smartphone with Advanced Pixel C...',
    price: '$899',
    qty: 'x1',
    subtotal: '$899',
  },
  {
    img: product2,
    category: 'ACCESSORIES',
    name: 'Tech21 Evo Clear for Google Pixel 6 Pro - Crystal Clear Phone Case with 12ft Multi-Dr...',
    price: '$39',
    qty: 'x1',
    subtotal: '$39',
  },
];

const trackSteps = ['Order Placed', 'Packaging', 'On The Road', 'Delivered'];
const activeStep = 1;

const stepIcons = [orderplaced, packaging, onroad, Deliverd];

const starRatingOptions = ['1 Star Rating', '2 Star Rating', '3 Star Rating', '4 Star Rating', '5 Star Rating'];

const OrderDetailsPage = () => {
  const navigate = useNavigate();

  const [openRating, setOpenRating] = useState(false);
  const [rating, setRating] = useState('5 Star Rating');
  const [feedback, setFeedback] = useState('');

  const handlePublishReview = () => {
    console.log({ rating, feedback });
    setOpenRating(false);
    setFeedback('');
  };

  return (
    <Box sx={{ fontFamily: "'Public Sans', sans-serif", px: { xs: 1, sm: 2, md: 0 } }}>

      {/* ── Header ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: { xs: 2, sm: 3 }, mb: 3 }}>

        {/* Title Row */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Box
            onClick={() => navigate('/account/orders')}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer', color: '#444' }}
          >
            <ArrowBackIcon sx={{ fontSize: '18px' }} />
            <Typography sx={{ fontWeight: 700, fontSize: { xs: '12px', sm: '14px' }, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: "'Public Sans', sans-serif" }}>
              Order Details
            </Typography>
          </Box>
          <Typography
            onClick={() => setOpenRating(true)}
            sx={{ fontSize: { xs: '12px', sm: '13px' }, color: '#FA8232', cursor: 'pointer', fontFamily: "'Public Sans', sans-serif", '&:hover': { textDecoration: 'underline' } }}
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
            p: { xs: 1.5, sm: 2.5 },
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 2.5,
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: { xs: '15px', sm: '18px' }, color: '#1a1a2e', fontFamily: "'Public Sans', sans-serif" }}>
              #96459761
            </Typography>
            <Typography sx={{ fontSize: { xs: '11px', sm: '12px' }, color: '#777', mt: 0.5, fontFamily: "'Public Sans', sans-serif" }}>
              4 Products · Order Placed in 17 Jan, 2021 at 7:32 PM
            </Typography>
          </Box>
          <Typography sx={{ fontWeight: 700, fontSize: { xs: '18px', sm: '22px' }, color: '#FA8232', fontFamily: "'Public Sans', sans-serif" }}>
            $1199.00
          </Typography>
        </Box>

        {/* Expected Arrival */}
        <Typography sx={{ fontSize: { xs: '12px', sm: '13px' }, color: '#444', mb: 2, fontFamily: "'Public Sans', sans-serif" }}>
          Order expected arrival <strong>23 Jan, 2021</strong>
        </Typography>
        {/* Tracking Steps — image + labels */}
        <Box sx={{ mb: 1 }}>
          <img src={progress} alt="Order Progress" style={{ width: '80%', objectFit: 'contain',marginLeft: '85px'}} />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
            {trackSteps.map((step, i) => (
              <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '25%' }}>
                <Box sx={{ width: { xs: 20, sm: 28 }, height: { xs: 20, sm: 28 }, mb: 0.5 }}>
                  <img src={stepIcons[i]} alt={step} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </Box>
                <Typography sx={{ fontSize: { xs: '9px', sm: '11px' }, color: i <= activeStep ? '#FA8232' : '#aaa', fontFamily: "'Public Sans', sans-serif", textAlign: 'center' }}>
                  {step}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

      </Box>

      {/* ── Order Activity ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: { xs: 2, sm: 3 }, mb: 3 }}>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: '12px', sm: '14px' }, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', mb: 2.5, pb: 1.5, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
          Order Activity
        </Typography>

        {orderActivity.map((act, i) => (
          <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1.5, sm: 2 }, mb: 2 }}>
            <Box sx={{ width: { xs: 36, sm: 45 }, height: { xs: 36, sm: 45 }, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={act.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </Box>
            <Box>
              <Typography sx={{ fontSize: { xs: '12px', sm: '13px' }, color: '#444', fontFamily: "'Public Sans', sans-serif" }}>
                {act.text}
              </Typography>
              <Typography sx={{ fontSize: { xs: '10px', sm: '11px' }, color: '#aaa', mt: 0.3, fontFamily: "'Public Sans', sans-serif" }}>
                {act.date}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* ── Products ── */}
      <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: { xs: 2, sm: 3 }, mb: 3 }}>
        <Typography sx={{ fontWeight: 700, fontSize: { xs: '12px', sm: '14px' }, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', mb: 2.5, pb: 1.5, borderBottom: '1px solid #e0e0e0', fontFamily: "'Public Sans', sans-serif" }}>
          Product (02)
        </Typography>

        {/* Table Header — hidden on xs, shown on sm+ */}
        <Box sx={{ display: { xs: 'none', sm: 'grid' }, gridTemplateColumns: '3fr 1fr 1fr 1fr', gap: 1, pb: 1, borderBottom: '1px solid #e0e0e0', mb: 1 }}>
          {['PRODUCTS', 'PRICE', 'QUANTITY', 'SUB-TOTAL'].map((h) => (
            <Typography key={h} sx={{ fontSize: '11px', fontWeight: 700, color: '#777', fontFamily: "'Public Sans', sans-serif" }}>
              {h}
            </Typography>
          ))}
        </Box>

        {products.map((p, i) => (
          <Box key={i} sx={{ py: 1.5, borderBottom: '1px solid #f5f5f5' }}>
            {/* Mobile layout */}
            <Box sx={{ display: { xs: 'flex', sm: 'none' }, gap: 1.5, alignItems: 'flex-start' }}>
              <Box
                component="img"
                src={p.img || ''}
                alt={p.name}
                sx={{ width: 55, height: 55, objectFit: 'contain',  borderRadius: '4px', flexShrink: 0 }}
              />
              <Box sx={{ flex: 1 }}>
                <Typography sx={{ fontSize: '10px', color: '#FA8232', fontWeight: 600, fontFamily: "'Public Sans', sans-serif" }}>
                  {p.category}
                </Typography>
                <Typography sx={{ fontSize: '12px', color: '#444', fontFamily: "'Public Sans', sans-serif", lineHeight: 1.4, mb: 0.5 }}>
                  {p.name}
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, fontFamily: "'Public Sans', sans-serif" }}>{p.price}</Typography>
                  <Typography sx={{ fontSize: '12px', color: '#777', fontFamily: "'Public Sans', sans-serif" }}>{p.qty}</Typography>
                  <Typography sx={{ fontSize: '12px', fontWeight: 600, color: '#FA8232', fontFamily: "'Public Sans', sans-serif" }}>{p.subtotal}</Typography>
                </Box>
              </Box>
            </Box>

            {/* Desktop layout */}
            <Box sx={{ display: { xs: 'none', sm: 'grid' }, gridTemplateColumns: '3fr 1fr 1fr 1fr', gap: 1, alignItems: 'center' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  component="img"
                  src={p.img || ''}
                  alt={p.name}
                  sx={{ width: 50, height: 50, objectFit: 'contain', borderRadius: '4px', }}
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
          </Box>
        ))}
      </Box>

      {/* ── Billing / Shipping / Notes ── */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: { xs: 2, sm: 3 } }}>

        {/* Billing */}
        <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: { xs: 2, sm: 2.5 } }}>
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
        <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: { xs: 2, sm: 2.5 } }}>
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
        <Box sx={{ backgroundColor: '#fff', border: '1px solid #e0e0e0', borderRadius: '8px', p: { xs: 2, sm: 2.5 }, gridColumn: { xs: '1', sm: '1 / -1', md: 'auto' } }}>
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
        fullWidth
        PaperProps={{
          sx: { borderRadius: '8px', width: { xs: '95vw', sm: '420px' }, maxWidth: '420px', p: 0 },
        }}
      >
        <DialogContent sx={{ p: { xs: 2, sm: 3 } }}>

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
                  <Typography sx={{ fontSize: '13px', fontFamily: "'Public Sans', sans-serif" }}>{val}</Typography>
                </Box>
              )}
            >
              {starRatingOptions.map((r) => (
                <MenuItem key={r} value={r} sx={{ fontSize: '13px', fontFamily: "'Public Sans', sans-serif", '&:hover': { color: '#FA8232' } }}>
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