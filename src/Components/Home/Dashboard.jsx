import React, { useState, useEffect, useRef } from 'react';
import {
  Box, Paper, Grid, Typography, Button, IconButton, Chip, Divider,
  List, ListItem, ListItemIcon, ListItemText,
  Card, CardContent,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Drawer, AppBar, Toolbar, CssBaseline, ThemeProvider, createTheme,
  Stack, Collapse
} from '@mui/material';

// MUI Icons (Run: npm install @mui/icons-material)
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';
import EditIcon from '@mui/icons-material/Edit';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

/* ===== Utility: Responsive Hook ===== */
const useIsMobile = (breakpoint = 960) => {
  const [mobile, setMobile] = useState(window.innerWidth < breakpoint);
  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth < breakpoint);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [breakpoint]);
  return mobile;
};

/* ===== localStorage Image Manager ===== */
const IMG_PREFIX = 'shopmart_img_';

const getImage = (key) => {
  try { return localStorage.getItem(IMG_PREFIX + key); } 
  catch { return null; }
};

const setImage = (key, val) => {
  try { localStorage.setItem(IMG_PREFIX + key, val); } 
  catch (e) { console.warn('Storage error', e); }
};

/* StorageImage Component: Handles empty states and local paths */
const StorageImage = ({ storageKey, localPath, alt, width, height, borderRadius = 8, objectFit = 'cover' }) => {
  const [src, setSrc] = useState(() => getImage(storageKey));
  const inputRef = useRef(null);

  const handleFile = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const b64 = ev.target.result;
      setImage(storageKey, b64);
      setSrc(b64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Box
      sx={{ width: width || '100%', height: height || '100%', borderRadius, overflow: 'hidden', position: 'relative', cursor: 'pointer', flexShrink: 0 }}
      onClick={() => inputRef.current && inputRef.current.click()}
    >
      {src ? (
        <Box component="img" src={src} alt={alt} sx={{ width: '100%', height: '100%', objectFit, display: 'block' }} />
      ) : (
        <Box sx={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', bgcolor: '#e8e8ec',
          border: '2px dashed #ccc', borderRadius,
        }}>
          <AddPhotoAlternateIcon sx={{ color: '#aaa', fontSize: 28 }} />
          {localPath && (
            <Typography variant="caption" sx={{ mt: 0.5, color: '#999', fontSize: 9, textAlign: 'center', px: 0.5, wordBreak: 'break-all', lineHeight: 1.3 }}>
              {localPath}
            </Typography>
          )}
        </Box>
      )}
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleFile} />
    </Box>
  );
};

/* ===== Data ===== */
const NAV_ITEMS = [
  { label: 'Dashboard', icon: <DashboardIcon /> },
  { label: 'Account', icon: <PersonIcon /> },
  { label: 'Orders', icon: <ShoppingBagIcon /> },
  { label: 'Wishlist', icon: <FavoriteBorderIcon /> },
  { label: 'Payment', icon: <CreditCardIcon /> },
  { label: 'Settings', icon: <SettingsIcon /> },
];

const ACCOUNT = {
  name: 'Kevin Gilbert',
  email: 'kevin.gilbert@gmail.com',
  phone: '+1 (555) 123-4567',
  avatarKey: 'user_avatar',
  avatarPath: '/images/avatar.png',
};

const BILLING = {
  name: 'Kevin Gilbert',
  street: '123 Main Street, Apt 4B',
  city: 'New York, NY 10001',
  country: 'United States',
};

const CARDS = [
  { type: 'VISA', number: '**** **** **** 4285', expiry: '12/26', holder: 'Kevin Gilbert', gradient: 'linear-gradient(135deg, #1a1f71 0%, #1545b5 100%)', chipColor: '#c9a84c' },
  { type: 'MASTERCARD', number: '**** **** **** 9172', expiry: '08/25', holder: 'Kevin Gilbert', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #c0392b 50%, #e67e22 100%)', chipColor: '#c9a84c' },
];

const ORDERS = [
  { id: '#86467870', date: 'May 20, 2026', status: 'IN PROGRESS', amount: '$129.99', items: 3 },
  { id: '#86467865', date: 'May 18, 2026', status: 'DELIVERED', amount: '$59.99', items: 1 },
  { id: '#86467850', date: 'May 15, 2026', status: 'DELIVERED', amount: '$249.99', items: 2 },
  { id: '#86467835', date: 'May 10, 2026', status: 'CANCELLED', amount: '$89.99', items: 1 },
  { id: '#86467820', date: 'May 5, 2026', status: 'DELIVERED', amount: '$34.99', items: 1 },
];

const HISTORY = [
  { id: 1, name: 'TODZO 76 True Wireless Earphones', price: '$129.99', orig: '$179.99', rating: 4.5, imgKey: 'prod_1', imgPath: '/images/earphones.jpg' },
  { id: 2, name: 'Smart Watch Pro Series 5', price: '$249.99', orig: '$299.99', rating: 4.2, imgKey: 'prod_2', imgPath: '/images/smartwatch.jpg' },
  { id: 3, name: 'Wireless Charging Pad', price: '$34.99', orig: '$49.99', rating: 4.7, imgKey: 'prod_3', imgPath: '/images/charger.jpg' },
  { id: 4, name: 'Noise Cancelling Headphones', price: '$189.99', orig: '$249.99', rating: 4.8, imgKey: 'prod_4', imgPath: '/images/headphones.jpg' },
];

const statusColor = (s) => {
  switch (s) {
    case 'IN PROGRESS': return { bg: '#fef3c7', fg: '#92400e' };
    case 'DELIVERED': return { bg: '#d1fae5', fg: '#065f46' };
    case 'CANCELLED': return { bg: '#fee2e2', fg: '#991b1b' };
    default: return { bg: '#f3f4f6', fg: '#374151' };
  }
};

/* ===== MUI Theme ===== */
const theme = createTheme({
  palette: {
    primary: { main: '#10b981', light: '#d1fae5', dark: '#065f46' },
    secondary: { main: '#f59e0b' },
    background: { default: '#f3f4f6', paper: '#ffffff' },
    text: { primary: '#111827', secondary: '#6b7280' },
    error: { main: '#ef4444' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
});

/* ===== Toast Component ===== */
const Toast = ({ message, open }) => (
  <Collapse in={open}>
    <Box sx={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 9999,
      bgcolor: '#065f46', color: '#fff', px: 3, py: 1.5, borderRadius: 2,
      boxShadow: '0 8px 30px rgba(0,0,0,0.2)', fontSize: 14, fontWeight: 500,
      display: 'flex', alignItems: 'center', gap: 1,
    }}>
      <CheckCircleIcon sx={{ color: '#6ee7b7', fontSize: 20 }} />
      {message}
    </Box>
  </Collapse>
);

/* ===== Sidebar ===== */
const Sidebar = ({ open, onClose, isMobile, activeNav, onNavChange }) => {
  const content = (
    <Box sx={{ width: 260, height: '100%', bgcolor: '#111827', color: '#fff', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box sx={{ width: 38, height: 38, borderRadius: 2, bgcolor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <StorefrontIcon sx={{ color: '#fff', fontSize: 22 }} />
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: 19, color: '#fff' }}>ShopMart</Typography>
      </Box>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mx: 2 }} />

      <List sx={{ px: 1.5, pt: 2, flexGrow: 1 }}>
        {NAV_ITEMS.map((item) => {
          const active = activeNav === item.label;
          return (
            <ListItem
              key={item.label}
              onClick={() => { onNavChange(item.label); if (isMobile) onClose(); }}
              sx={{
                borderRadius: 2, mb: 0.25, py: 1.2, px: 2,
                bgcolor: active ? 'rgba(16,185,129,0.14)' : 'transparent',
                color: active ? '#34d399' : '#9ca3af',
                cursor: 'pointer', transition: 'all 0.2s',
                '&:hover': { bgcolor: active ? 'rgba(16,185,129,0.18)' : 'rgba(255,255,255,0.05)', color: active ? '#6ee7b7' : '#d1d5db' },
              }}
            >
              <ListItemIcon sx={{ minWidth: 38, color: 'inherit' }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: active ? 600 : 400, fontSize: 14 }} />
              {active && <Box sx={{ width: 4, height: 22, borderRadius: 2, bgcolor: '#10b981', ml: 'auto' }} />}
            </ListItem>
          );
        })}
      </List>

      <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mx: 2 }} />

      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <StorageImage storageKey={ACCOUNT.avatarKey} localPath={ACCOUNT.avatarPath} alt="Avatar" width={38} height={38} borderRadius={19} />
        <Box sx={{ overflow: 'hidden' }}>
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#e5e7eb', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {ACCOUNT.name}
          </Typography>
          <Typography sx={{ fontSize: 11, color: '#6b7280' }}>{ACCOUNT.email}</Typography>
        </Box>
      </Box>

      <List sx={{ px: 1.5, pb: 2 }}>
        <ListItem sx={{
          borderRadius: 2, py: 1.2, px: 2, color: '#f87171', cursor: 'pointer', transition: 'all 0.2s',
          '&:hover': { bgcolor: 'rgba(248,113,113,0.1)' },
        }}>
          <ListItemIcon sx={{ minWidth: 38, color: 'inherit' }}><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Log Out" primaryTypographyProps={{ fontWeight: 500, fontSize: 14 }} />
        </ListItem>
      </List>
    </Box>
  );

  if (isMobile) {
    return (
      <Drawer open={open} onClose={onClose} PaperProps={{ sx: { borderRadius: 0 } }}>
        {content}
      </Drawer>
    );
  }
  return <Box sx={{ width: 260, flexShrink: 0, height: '100vh', position: 'sticky', top: 0 }}>{content}</Box>;
};

/* ===== Account Info Card ===== */
const AccountInfoCard = () => (
  <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', height: '100%' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
      <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>Account Information</Typography>
      <EditIcon sx={{ fontSize: 18, color: '#10b981', cursor: 'pointer' }} />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
      <StorageImage storageKey={ACCOUNT.avatarKey} localPath={ACCOUNT.avatarPath} alt="Avatar" width={60} height={60} borderRadius={30} />
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>{ACCOUNT.name}</Typography>
        <Typography sx={{ fontSize: 13, color: '#10b981', fontWeight: 500 }}>Premium Member</Typography>
      </Box>
    </Box>
    <Divider sx={{ my: 2, borderColor: '#f3f4f6' }} />
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <EmailIcon sx={{ fontSize: 18, color: '#10b981' }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 11, color: '#9ca3af', fontWeight: 500, letterSpacing: 0.5 }}>EMAIL</Typography>
          <Typography sx={{ fontSize: 14, color: '#374151' }}>{ACCOUNT.email}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PhoneIcon sx={{ fontSize: 18, color: '#10b981' }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 11, color: '#9ca3af', fontWeight: 500, letterSpacing: 0.5 }}>PHONE</Typography>
          <Typography sx={{ fontSize: 14, color: '#374151' }}>{ACCOUNT.phone}</Typography>
        </Box>
      </Box>
    </Stack>
  </Paper>
);

/* ===== Billing Address Card ===== */
const BillingAddressCard = () => (
  <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb', height: '100%' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
      <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>Billing Address</Typography>
      <Button variant="text" sx={{ color: '#10b981', fontSize: 13, fontWeight: 600, '&:hover': { bgcolor: 'rgba(16,185,129,0.06)' } }}>Edit</Button>
    </Box>
    <Stack spacing={2}>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
        <Box sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0.2 }}>
          <PersonIcon sx={{ fontSize: 18, color: '#10b981' }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 11, color: '#9ca3af', fontWeight: 500, letterSpacing: 0.5 }}>NAME</Typography>
          <Typography sx={{ fontSize: 14, color: '#374151' }}>{BILLING.name}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5 }}>
        <Box sx={{ width: 34, height: 34, borderRadius: 2, bgcolor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 0.2 }}>
          <LocationOnIcon sx={{ fontSize: 18, color: '#10b981' }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 11, color: '#9ca3af', fontWeight: 500, letterSpacing: 0.5 }}>ADDRESS</Typography>
          <Typography sx={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{BILLING.street}<br />{BILLING.city}<br />{BILLING.country}</Typography>
        </Box>
      </Box>
    </Stack>
  </Paper>
);

/* ===== Credit Card Component ===== */
const CreditCard = ({ card }) => (
  <Box sx={{
    background: card.gradient, borderRadius: 3, p: 2.5, color: '#fff',
    position: 'relative', overflow: 'hidden', minHeight: 175,
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 12px 40px rgba(0,0,0,0.25)' },
  }}>
    <Box sx={{ position: 'absolute', top: '-25%', right: '-15%', width: 200, height: 200, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
    <Box sx={{ position: 'absolute', bottom: '-35%', left: '-8%', width: 170, height: 170, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <Box sx={{ width: 36, height: 26, borderRadius: 1, bgcolor: card.chipColor, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
        <Box sx={{ width: '60%', height: '50%', borderTop: '1.5px solid rgba(0,0,0,0.3)', borderBottom: '1.5px solid rgba(0,0,0,0.3)' }} />
      </Box>
      <Chip label={card.type} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.18)', color: '#fff', fontWeight: 700, fontSize: 10, letterSpacing: 1.5 }} />
    </Box>

    <Box sx={{ position: 'relative', zIndex: 1 }}>
      <Typography sx={{ letterSpacing: 3.5, fontWeight: 500, mb: 2, fontSize: 17, fontVariantNumeric: 'tabular-nums' }}>
        {card.number}
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Box>
          <Typography sx={{ opacity: 0.6, fontSize: 9, letterSpacing: 1.5, mb: 0.3 }}>CARD HOLDER</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 13 }}>{card.holder}</Typography>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography sx={{ opacity: 0.6, fontSize: 9, letterSpacing: 1.5, mb: 0.3 }}>EXPIRES</Typography>
          <Typography sx={{ fontWeight: 500, fontSize: 13 }}>{card.expiry}</Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

/* ===== Payment Section ===== */
const PaymentSection = () => (
  <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
      <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>Payment Options</Typography>
      <Button
        variant="outlined"
        size="small"
        startIcon={<AddIcon />}
        sx={{ borderColor: '#10b981', color: '#10b981', fontSize: 12, fontWeight: 600, '&:hover': { borderColor: '#059669', bgcolor: 'rgba(16,185,129,0.04)' } }}
      >
        Add Card
      </Button>
    </Box>
    <Grid container spacing={2}>
      {CARDS.map((c) => (
        <Grid item xs={12} sm={6} key={c.type}>
          <CreditCard card={c} />
        </Grid>
      ))}
    </Grid>
  </Paper>
);

/* ===== Recent Orders Section ===== */
const RecentOrders = () => {
  const isSmall = useIsMobile(768);

  return (
    <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
        <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>Recent Orders</Typography>
        <Button variant="text" sx={{ color: '#10b981', fontSize: 13, fontWeight: 600, '&:hover': { bgcolor: 'rgba(16,185,129,0.06)' } }}>View All</Button>
      </Box>

      {!isSmall ? (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                {['ORDER ID', 'DATE', 'ITEMS', 'AMOUNT', 'STATUS', ''].map((h) => (
                  <TableCell key={h} sx={{ fontWeight: 700, color: '#9ca3af', fontSize: 11, letterSpacing: 0.8, borderBottom: '2px solid #e5e7eb', py: 1.5 }}>
                    {h}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ORDERS.map((o) => {
                const sc = statusColor(o.status);
                return (
                  <TableRow key={o.id} hover sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
                    <TableCell sx={{ fontWeight: 600, color: '#111827', fontSize: 14, py: 2 }}>{o.id}</TableCell>
                    <TableCell sx={{ color: '#6b7280', fontSize: 14, py: 2 }}>{o.date}</TableCell>
                    <TableCell sx={{ color: '#374151', fontSize: 14, py: 2 }}>{o.items} items</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#111827', fontSize: 14, py: 2 }}>{o.amount}</TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <Chip label={o.status} size="small" sx={{ bgcolor: sc.bg, color: sc.fg, fontWeight: 600, fontSize: 10, letterSpacing: 0.5, height: 28 }} />
                    </TableCell>
                    <TableCell sx={{ py: 2 }}>
                      <IconButton size="small"><ChevronRightIcon sx={{ color: '#9ca3af' }} /></IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Stack spacing={1.5}>
          {ORDERS.map((o) => {
            const sc = statusColor(o.status);
            return (
              <Box key={o.id} sx={{ p: 2, border: '1px solid #e5e7eb', borderRadius: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>{o.id}</Typography>
                  <Chip label={o.status} size="small" sx={{ bgcolor: sc.bg, color: sc.fg, fontWeight: 600, fontSize: 10, letterSpacing: 0.5, height: 24 }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 13, color: '#6b7280' }}>{o.date}</Typography>
                  <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{o.amount}</Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      )}
    </Paper>
  );
};

/* ===== Browse History Section ===== */
const BrowseHistory = () => (
  <Paper elevation={0} sx={{ p: 3, border: '1px solid #e5e7eb' }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
      <Typography sx={{ fontWeight: 600, fontSize: 16, color: '#111827' }}>Browse History</Typography>
      <Button variant="text" sx={{ color: '#10b981', fontSize: 13, fontWeight: 600, '&:hover': { bgcolor: 'rgba(16,185,129,0.06)' } }}>Clear History</Button>
    </Box>
    <Grid container spacing={2}>
      {HISTORY.map((p) => (
        <Grid item xs={6} sm={6} md={3} key={p.id}>
          <Card elevation={0} sx={{
            border: '1px solid #e5e7eb', borderRadius: 2, overflow: 'hidden',
            transition: 'all 0.3s', cursor: 'pointer',
            '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.08)', transform: 'translateY(-3px)', borderColor: '#d1d5db' },
          }}>
            <StorageImage storageKey={p.imgKey} localPath={p.imgPath} alt={p.name} height={150} borderRadius={0} />
            <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
              <Typography sx={{ fontWeight: 600, fontSize: 12.5, color: '#111827', mb: 0.5, lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: 35 }}>
                {p.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3, mb: 0.5 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ fontSize: 12, color: i < Math.floor(p.rating) ? '#f59e0b' : '#e5e7eb' }} />
                ))}
                <Typography sx={{ fontSize: 11, color: '#9ca3af', ml: 0.3 }}>{p.rating}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
                <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: 15 }}>{p.price}</Typography>
                <Typography sx={{ color: '#9ca3af', textDecoration: 'line-through', fontSize: 12 }}>{p.orig}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

/* ===== Main App Component ===== */
export default function AccountDashboard() {
  const isMobile = useIsMobile(960);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Account');
  const [toast, setToast] = useState({ open: false, msg: '' });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f3f4f6' }}>
        
        <Sidebar
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          isMobile={isMobile}
          activeNav={activeNav}
          onNavChange={setActiveNav}
        />

        <Box sx={{ flexGrow: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          
          {isMobile && (
            <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '1px solid #e5e7eb' }}>
              <Toolbar sx={{ minHeight: 56, px: 2 }}>
                <IconButton edge="start" onClick={() => setDrawerOpen(true)} sx={{ mr: 1.5 }}>
                  <MenuIcon sx={{ color: '#111827' }} />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 30, height: 30, borderRadius: 1.5, bgcolor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StorefrontIcon sx={{ color: '#fff', fontSize: 18 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: 17 }}>ShopMart</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton>
                  <NotificationsNoneIcon sx={{ color: '#6b7280' }} />
                </IconButton>
              </Toolbar>
            </AppBar>
          )}

          <Box sx={{ flexGrow: 1, p: { xs: 2, sm: 3, md: 4 }, overflowY: 'auto' }}>
            {/* Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, mb: 3, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1.5, sm: 0 } }}>
              <Box>
                <Typography variant="h4" sx={{ fontSize: { xs: 24, md: 30 }, color: '#111827' }}>
                  Hello, Kevin
                </Typography>
                <Typography sx={{ color: '#6b7280', mt: 0.5, fontSize: 15 }}>
                  Welcome back, here's your account overview
                </Typography>
              </Box>
              {!isMobile && (
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <IconButton sx={{ bgcolor: '#fff', border: '1px solid #e5e7eb', width: 40, height: 40, '&:hover': { bgcolor: '#f9fafb' } }}>
                    <NotificationsNoneIcon sx={{ color: '#6b7280' }} />
                  </IconButton>
                  <IconButton sx={{ bgcolor: '#fff', border: '1px solid #e5e7eb', width: 40, height: 40, '&:hover': { bgcolor: '#f9fafb' } }}>
                    <ShoppingCartIcon sx={{ color: '#6b7280' }} />
                  </IconButton>
                </Box>
              )}
            </Box>

            {/* Grid System for Content Alignment */}
            <Grid container spacing={3}>
              {/* Account Info & Billing Row */}
              <Grid item xs={12} md={6}>
                <AccountInfoCard />
              </Grid>
              <Grid item xs={12} md={6}>
                <BillingAddressCard />
              </Grid>

              {/* Payment Options Row */}
              <Grid item xs={12}>
                <PaymentSection />
              </Grid>

              {/* Recent Orders Row */}
              <Grid item xs={12}>
                <RecentOrders />
              </Grid>

              {/* Browse History Row */}
              <Grid item xs={12}>
                <BrowseHistory />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>

      <Toast message={toast.msg} open={toast.open} />
    </ThemeProvider>
  );
}