import React, { useState, useRef } from 'react';
import {
  Box, Paper, Grid, Typography, Button, IconButton, Divider,
  List, ListItem, ListItemIcon, ListItemText,
  Card, CardContent,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Drawer, AppBar, Toolbar, CssBaseline, ThemeProvider, createTheme,
  Stack, Collapse, useMediaQuery
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// ── Your existing stat image imports (keep as-is) ──
import totalOrderImg     from '../../assets/dashboard/Rocket.png';
import pendingOrderImg   from '../../assets/dashboard/Pending.png';
import completedOrderImg from '../../assets/dashboard/Storefront.png';

// ── Add these two imports for the card logos ──
import visaLogo       from '../../assets/Visa.png';
import mastercardLogo from '../../assets/Mastercard.png';

// ── StorageImage: still used for avatar & browse history product images ──
const IMG_PREFIX = 'shopmart_img_';
const getImage   = (key) => { try { return localStorage.getItem(IMG_PREFIX + key); } catch { return null; } };
const setImageLS = (key, val) => { try { localStorage.setItem(IMG_PREFIX + key, val); } catch (e) { console.warn(e); } };

const StorageImage = ({ storageKey, localPath, alt, width, height, borderRadius = 8, objectFit = 'cover' }) => {
  const [src, setSrc] = useState(() => getImage(storageKey));
  const inputRef = useRef(null);
  const handleFile = (e) => {
    const file = e.target.files?.[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => { setImageLS(storageKey, ev.target.result); setSrc(ev.target.result); };
    reader.readAsDataURL(file);
  };
  return (
    <Box
      sx={{ width: width || '100%', height: height || '100%', borderRadius, overflow: 'hidden', position: 'relative', cursor: 'pointer', flexShrink: 0, }}
      onClick={() => inputRef.current?.click()}
    >
      {src
        ? <Box component="img" src={src} alt={alt} sx={{ width: '100%', height: '100%', objectFit, display: 'block' }} />
        : <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#e8e8ec', border: '2px dashed #ccc', borderRadius }}>
            <AddPhotoAlternateIcon sx={{ color: '#aaa', fontSize: 28 }} />
            {localPath && <Typography variant="caption" sx={{ mt: 0.5, color: '#999', fontSize: 9, textAlign: 'center', px: 0.5, wordBreak: 'break-all', lineHeight: 1.3 }}>{localPath}</Typography>}
          </Box>
      }
      <input ref={inputRef} type="file" accept="image/*" hidden onChange={handleFile} />
    </Box>
  );
};

/* ===== Data ===== */
const NAV_ITEMS = [
  { label: 'Dashboard', icon: <DashboardIcon /> },
  { label: 'Account',   icon: <PersonIcon /> },
  { label: 'Orders',    icon: <ShoppingBagIcon /> },
  { label: 'Wishlist',  icon: <FavoriteBorderIcon /> },
  { label: 'Payment',   icon: <CreditCardIcon /> },
  { label: 'Settings',  icon: <SettingsIcon /> },
];

const ACCOUNT = {
  name: 'Kevin Gilbert', email: 'kevin.gilbert@gmail.com',
  phone: '+1-202-555-0118', secEmail: 'kevin12345@gmail.com',
  avatarKey: 'user_avatar', avatarPath: '/images/avatar.png',
};

const BILLING = {
  name: 'Kevin Gilbert',
  street: 'East Tejturi Bazar, Word No. 04, Road No. 13/x, House no. 1320/C, Flat No. 5D,',
  city: 'Dhaka -1200, Bangladesh',
  phone: '+1-202-555-0118', email: 'kevin.gilbert@gmail.com',
};

// ── imgSrc now uses the imported images ──
const STAT_CARDS = [
  { label: 'Total Orders',     value: '154', imgSrc: totalOrderImg,     bg: '#EEF2FF' },
  { label: 'Pending Orders',   value: '05',  imgSrc: pendingOrderImg,   bg: '#FFF7ED' },
  { label: 'Completed Orders', value: '149', imgSrc: completedOrderImg, bg: '#F0FDF4' },
];

// ── logoSrc uses the imported visa/mastercard images ──
const CARDS = [
  { id: 1, balance: '$95,400.00 USD', number: '**** **** **** 3814', holder: 'Kevin Gilbert', type: 'visa',       logoSrc: visaLogo,       bg: '#1B3A6B' },
  { id: 2, balance: '$87,583.00 USD', number: '**** **** **** 1761', holder: 'Kevin Gilbert', type: 'mastercard', logoSrc: mastercardLogo, bg: '#2E7D32' },
];

const ORDERS = [
  { id: '#96459761', date: 'Dec 30, 2019 05:18', status: 'IN PROGRESS', amount: '$129.99' },
  { id: '#71667167', date: 'Feb 2, 2019 19:28',  status: 'COMPLETED',   amount: '$59.99'  },
  { id: '#86467850', date: 'May 15, 2026',        status: 'COMPLETED',   amount: '$249.99' },
  { id: '#86467835', date: 'May 10, 2026',        status: 'CANCELLED',   amount: '$89.99'  },
  { id: '#86467820', date: 'May 5, 2026',         status: 'COMPLETED',   amount: '$34.99'  },
];

const HISTORY = [
  { id: 1, name: 'TODZO 76 True Wireless Earphones', price: '$129.99', orig: '$179.99', rating: 4.5, imgKey: 'prod_1', imgPath: '/images/earphones.jpg'   },
  { id: 2, name: 'Smart Watch Pro Series 5',         price: '$249.99', orig: '$299.99', rating: 4.2, imgKey: 'prod_2', imgPath: '/images/smartwatch.jpg'  },
  { id: 3, name: 'Wireless Charging Pad',            price: '$34.99',  orig: '$49.99',  rating: 4.7, imgKey: 'prod_3', imgPath: '/images/charger.jpg'     },
  { id: 4, name: 'Noise Cancelling Headphones',      price: '$189.99', orig: '$249.99', rating: 4.8, imgKey: 'prod_4', imgPath: '/images/headphones.jpg'  },
];

const statusColor = (s) => {
  if (s === 'IN PROGRESS') return { fg: '#92400e' };
  if (s === 'COMPLETED')   return { fg: '#065f46' };
  if (s === 'CANCELLED')   return { fg: '#991b1b' };
  return { fg: '#374151' };
};

const DRAWER_WIDTH = 260;

/* ===== Theme ===== */
const theme = createTheme({
  palette: {
    primary:    { main: '#10b981', light: '#d1fae5', dark: '#065f46' },
    secondary:  { main: '#f59e0b' },
    background: { default: '#f3f4f6', paper: '#ffffff' },
    text:       { primary: '#111827', secondary: '#6b7280' },
    error:      { main: '#ef4444' },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h4: { fontWeight: 700, letterSpacing: '-0.02em' },
    h5: { fontWeight: 600 }, h6: { fontWeight: 600 },
  },
  shape: { borderRadius: 10 },
  breakpoints: { values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 } },
});

/* ===== Toast ===== */
const Toast = ({ message, open }) => (
  <Collapse in={open}>
    <Box sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999, bgcolor: '#065f46', color: '#fff', px: 3, py: 1.5, borderRadius: 2, boxShadow: '0 8px 30px rgba(0,0,0,0.2)', fontSize: 14, fontWeight: 500, display: 'flex', alignItems: 'center', gap: 1 }}>
      <CheckCircleIcon sx={{ color: '#6ee7b7', fontSize: 20 }} />{message}
    </Box>
  </Collapse>
);

/* ===== Sidebar ===== */
const SidebarContent = ({ activeNav, onNavChange, onClose, isMobile }) => (
  <Box sx={{ width: DRAWER_WIDTH, height: '100%', bgcolor: '#111827', color: '#fff', display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ p: 2.5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box sx={{ width: 38, height: 38, borderRadius: 2, bgcolor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <StorefrontIcon sx={{ color: '#fff', fontSize: 22 }} />
        </Box>
        <Typography sx={{ fontWeight: 700, fontSize: 19, color: '#fff' }}>ShopMart</Typography>
      </Box>
      {isMobile && <IconButton size="small" onClick={onClose} sx={{ color: '#9ca3af' }}><CloseIcon fontSize="small" /></IconButton>}
    </Box>
    <Divider sx={{ borderColor: 'rgba(255,255,255,0.07)', mx: 2 }} />
    <List sx={{ px: 1.5, pt: 2, flexGrow: 1 }}>
      {NAV_ITEMS.map((item) => {
        const active = activeNav === item.label;
        return (
          <ListItem key={item.label} onClick={() => { onNavChange(item.label); if (isMobile) onClose(); }}
            sx={{ borderRadius: 2, mb: 0.25, py: 1.2, px: 2, bgcolor: active ? 'rgba(16,185,129,0.14)' : 'transparent', color: active ? '#34d399' : '#9ca3af', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { bgcolor: active ? 'rgba(16,185,129,0.18)' : 'rgba(255,255,255,0.05)', color: active ? '#6ee7b7' : '#d1d5db' } }}>
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
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#e5e7eb', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{ACCOUNT.name}</Typography>
        <Typography sx={{ fontSize: 11, color: '#6b7280' }}>{ACCOUNT.email}</Typography>
      </Box>
    </Box>
    <List sx={{ px: 1.5, pb: 2 }}>
      <ListItem sx={{ borderRadius: 2, py: 1.2, px: 2, color: '#f87171', cursor: 'pointer', transition: 'all 0.2s', '&:hover': { bgcolor: 'rgba(248,113,113,0.1)' } }}>
        <ListItemIcon sx={{ minWidth: 38, color: 'inherit' }}><LogoutIcon /></ListItemIcon>
        <ListItemText primary="Log Out" primaryTypographyProps={{ fontWeight: 500, fontSize: 14 }} />
      </ListItem>
    </List>
  </Box>
);

/* ===== Account Info Card ===== */
const AccountInfoCard = () => (
  <Paper elevation={0} sx={{ p: { xs: 2, sm: 2.5 }, border: '1px solid #e5e7eb', height: '100%', borderRadius: 2 }}>
    <Typography sx={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', mb: 2, pb: 1, borderBottom: '1px solid #e5e7eb' }}>
      Account Info
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
      <StorageImage storageKey={ACCOUNT.avatarKey} localPath={ACCOUNT.avatarPath} alt="Avatar" width={52} height={52} borderRadius={26} />
      <Box>
        <Typography sx={{ fontWeight: 600, fontSize: 15, color: '#111827' }}>{ACCOUNT.name}</Typography>
        <Typography sx={{ fontSize: 12, color: '#6b7280' }}>Dhaka -1207, Bangladesh</Typography>
      </Box>
    </Box>
    <Stack spacing={0.75} sx={{ mb: 2 }}>
      <Typography sx={{ fontSize: 13, color: '#444' }}><strong>Email:</strong> {ACCOUNT.email}</Typography>
      <Typography sx={{ fontSize: 13, color: '#444' }}><strong>Sec Email:</strong> {ACCOUNT.secEmail}</Typography>
      <Typography sx={{ fontSize: 13, color: '#444' }}><strong>Phone:</strong> {ACCOUNT.phone}</Typography>
    </Stack>
    <Button variant="outlined" size="small"
      sx={{ borderColor: '#e0e0e0', color: '#444', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', borderRadius: '4px', px: 2, '&:hover': { borderColor: '#10b981', color: '#10b981' } }}>
      Edit Account
    </Button>
  </Paper>
);

/* ===== Billing Address Card ===== */
const BillingAddressCard = () => (
  <Paper elevation={0} sx={{ p: { xs: 2, sm: 2.5 }, border: '1px solid #e5e7eb', height: '100%', borderRadius: 2 }}>
    <Typography sx={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e', mb: 2, pb: 1, borderBottom: '1px solid #e5e7eb' }}>
      Billing Address
    </Typography>
    <Stack spacing={0.75} sx={{ mb: 2 }}>
      <Typography sx={{ fontWeight: 600, fontSize: 14, color: '#111827' }}>{BILLING.name}</Typography>
      <Typography sx={{ fontSize: 13, color: '#555', lineHeight: 1.6 }}>{BILLING.street} {BILLING.city}</Typography>
      <Typography sx={{ fontSize: 13, color: '#555' }}><strong>Phone Number:</strong> {BILLING.phone}</Typography>
      <Typography sx={{ fontSize: 13, color: '#555' }}><strong>Email:</strong> {BILLING.email}</Typography>
    </Stack>
    <Button variant="outlined" size="small"
      sx={{ borderColor: '#e0e0e0', color: '#444', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', borderRadius: '4px', px: 2, '&:hover': { borderColor: '#10b981', color: '#10b981' } }}>
      Edit Address
    </Button>
  </Paper>
);

/* ===== Credit Card — uses <img> for logo ===== */
const CreditCardItem = ({ card, onMenu }) => (
  <Box sx={{ background: card.bg, borderRadius: '12px', p: { xs: 2, sm: 2.5 }, color: '#fff', position: 'relative', overflow: 'hidden', minHeight: 160 }}>
    {/* Decorative circles */}
    <Box sx={{ position: 'absolute', top: '-30%', right: '-10%', width: 180, height: 180, borderRadius: '50%', background: 'rgba(255,255,255,0.07)' }} />
    <Box sx={{ position: 'absolute', bottom: '-30%', left: '-5%',  width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

    {/* Top row */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5, position: 'relative', zIndex: 1 }}>
      <Typography sx={{ fontWeight: 700, fontSize: { xs: 14, sm: 16 }, color: '#fff' }}>{card.balance}</Typography>
      <IconButton size="small" onClick={onMenu} sx={{ color: '#fff', p: 0 }}><MoreHorizIcon /></IconButton>
    </Box>

    {/* Card number */}
    <Box sx={{ mb: 2, position: 'relative', zIndex: 1 }}>
      <Typography sx={{ fontSize: 10, color: 'rgba(255,255,255,0.65)', mb: 0.4, letterSpacing: '0.08em' }}>CARD NUMBER</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Typography sx={{ fontSize: { xs: 13, sm: 15 }, letterSpacing: '0.15em', color: '#fff' }}>{card.number}</Typography>
        <IconButton size="small" sx={{ color: 'rgba(255,255,255,0.65)', p: 0 }}>
          <ContentCopyOutlinedIcon sx={{ fontSize: 14 }} />
        </IconButton>
      </Box>
    </Box>

    {/* Bottom row — <img> logo + holder name */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 1 }}>
      <img src={card.logoSrc} alt={card.type} style={{ height: 28, objectFit: 'contain' }} />
      <Typography sx={{ fontSize: 13, color: '#fff' }}>{card.holder}</Typography>
    </Box>
  </Box>
);

/* ===== Payment Section ===== */
const PaymentSection = () => (
  <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, border: '1px solid #e5e7eb', borderRadius: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e' }}>Payment Option</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#FA8232' }}>Add Card</Typography>
        <ArrowForwardIcon sx={{ fontSize: 15, color: '#FA8232' }} />
      </Box>
    </Box>
    <Grid container spacing={{ xs: 1.5, sm: 2 }}>
      {CARDS.map((card) => (
        <Grid item xs={12} sm={6} key={card.id}>
          <CreditCardItem card={card} onMenu={() => {}} />
        </Grid>
      ))}
    </Grid>
  </Paper>
);

/* ===== Recent Orders ===== */
const RecentOrders = () => {
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, border: '1px solid #e5e7eb', borderRadius: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e' }}>Recent Order</Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', '&:hover': { opacity: 0.8 } }}>
          <Typography sx={{ fontSize: 13, fontWeight: 600, color: '#FA8232' }}>View All</Typography>
          <ArrowForwardIcon sx={{ fontSize: 15, color: '#FA8232' }} />
        </Box>
      </Box>
      {!isSmall ? (
        <TableContainer sx={{ overflowX: 'auto' }}>
          <Table size="small">
            <TableHead>
              <TableRow sx={{ bgcolor: '#f9fafb' }}>
                {['ORDER ID', 'STATUS', 'DATE', 'TOTAL', 'ACTION'].map((h) => (
                  <TableCell key={h} sx={{ fontWeight: 700, color: '#9ca3af', fontSize: 11, letterSpacing: 0.8, borderBottom: '1px solid #e5e7eb', py: 1.5, whiteSpace: 'nowrap' }}>{h}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {ORDERS.map((o) => {
                const sc = statusColor(o.status);
                return (
                  <TableRow key={o.id} hover sx={{ '&:hover': { bgcolor: '#f9fafb' } }}>
                    <TableCell sx={{ fontWeight: 600, color: '#111827', fontSize: 13, py: 1.5 }}>{o.id}</TableCell>
                    <TableCell sx={{ py: 1.5 }}>
                      <Typography sx={{ fontWeight: 600, fontSize: 12, color: sc.fg }}>{o.status}</Typography>
                    </TableCell>
                    <TableCell sx={{ color: '#6b7280', fontSize: 13, py: 1.5, whiteSpace: 'nowrap' }}>{o.date}</TableCell>
                    <TableCell sx={{ fontWeight: 600, color: '#111827', fontSize: 13, py: 1.5 }}>{o.amount}</TableCell>
                    <TableCell sx={{ py: 1.5 }}>
                      <IconButton size="small"><ChevronRightIcon sx={{ color: '#9ca3af', fontSize: 18 }} /></IconButton>
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
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                  <Typography sx={{ fontWeight: 600, fontSize: 13, color: '#111827' }}>{o.id}</Typography>
                  <Typography sx={{ fontWeight: 600, fontSize: 12, color: sc.fg }}>{o.status}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ fontSize: 12, color: '#6b7280' }}>{o.date}</Typography>
                  <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{o.amount}</Typography>
                </Box>
              </Box>
            );
          })}
        </Stack>
      )}
    </Paper>
  );
};

/* ===== Browse History ===== */
const BrowseHistory = () => (
  <Paper elevation={0} sx={{ p: { xs: 2, sm: 3 }, border: '1px solid #e5e7eb', borderRadius: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2.5 }}>
      <Typography sx={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#1a1a2e' }}>Browse History</Typography>
      <Button variant="text" sx={{ color: '#10b981', fontSize: 13, fontWeight: 600 }}>Clear History</Button>
    </Box>
    <Grid container spacing={{ xs: 1.5, sm: 2 }}>
      {HISTORY.map((p) => (
        <Grid item xs={6} sm={6} md={3} key={p.id}>
          <Card elevation={0} sx={{ border: '1px solid #e5e7eb', borderRadius: 2, overflow: 'hidden', cursor: 'pointer', transition: 'all 0.3s', '&:hover': { boxShadow: '0 6px 24px rgba(0,0,0,0.08)', transform: 'translateY(-3px)' } }}>
            <StorageImage storageKey={p.imgKey} localPath={p.imgPath} alt={p.name} height={130} borderRadius={0} />
            <CardContent sx={{ p: 1.5, '&:last-child': { pb: 1.5 } }}>
              <Typography sx={{ fontWeight: 600, fontSize: { xs: 11, sm: 12.5 }, color: '#111827', mb: 0.5, lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', minHeight: 32 }}>
                {p.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3, mb: 0.5 }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} sx={{ fontSize: 11, color: i < Math.floor(p.rating) ? '#f59e0b' : '#e5e7eb' }} />)}
                <Typography sx={{ fontSize: 10, color: '#9ca3af', ml: 0.3 }}>{p.rating}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5, flexWrap: 'wrap' }}>
                <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: { xs: 13, sm: 15 } }}>{p.price}</Typography>
                <Typography sx={{ color: '#9ca3af', textDecoration: 'line-through', fontSize: { xs: 10, sm: 12 } }}>{p.orig}</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Paper>
);

/* ===== Main ===== */
export default function AccountDashboard() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeNav, setActiveNav]   = useState('Account');
  const [toast]                     = useState({ open: false, msg: '' });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: '#f3f4f6' }}>

        {/* Persistent sidebar md+ */}
        {!isMobile && (
          <Box sx={{ width: DRAWER_WIDTH, flexShrink: 0, height: '100vh', position: 'sticky', top: 0, overflowY: 'auto' }}>
            <SidebarContent activeNav={activeNav} onNavChange={setActiveNav} onClose={() => {}} isMobile={false} />
          </Box>
        )}

        {/* Drawer mobile */}
        {isMobile && (
          <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} PaperProps={{ sx: { width: DRAWER_WIDTH } }}>
            <SidebarContent activeNav={activeNav} onNavChange={setActiveNav} onClose={() => setDrawerOpen(false)} isMobile />
          </Drawer>
        )}

        {/* Main */}
        <Box sx={{ flexGrow: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>

          {/* Mobile AppBar */}
          {isMobile && (
            <AppBar position="sticky" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '1px solid #e5e7eb' }}>
              <Toolbar sx={{ minHeight: { xs: 52, sm: 56 }, px: { xs: 1.5, sm: 2 } }}>
                <IconButton edge="start" onClick={() => setDrawerOpen(true)} sx={{ mr: 1 }}>
                  <MenuIcon sx={{ color: '#111827' }} />
                </IconButton>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ width: 30, height: 30, borderRadius: 1.5, bgcolor: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <StorefrontIcon sx={{ color: '#fff', fontSize: 18 }} />
                  </Box>
                  <Typography sx={{ fontWeight: 700, color: '#111827', fontSize: 17 }}>ShopMart</Typography>
                </Box>
                <Box sx={{ flexGrow: 1 }} />
                <IconButton size="small"><NotificationsNoneIcon sx={{ color: '#6b7280' }} /></IconButton>
              </Toolbar>
            </AppBar>
          )}

          <Box sx={{ flexGrow: 1, p: { xs: 1.5, sm: 2.5, md: 3, lg: 4 }, overflowY: 'auto' }}>

            {/* Page Header */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, mb: { xs: 2, sm: 3 }, flexDirection: { xs: 'column', sm: 'row' }, gap: { xs: 1, sm: 0 } }}>
              <Box>
                <Typography variant="h4" sx={{ fontSize: { xs: 20, sm: 24, md: 28 }, color: '#111827' }}>Hello, Kevin</Typography>
                <Typography sx={{ color: '#6b7280', mt: 0.5, fontSize: { xs: 13, sm: 14 } }}>
                  From your dashboard, you can easily check & view your{' '}
                  <Box component="span" sx={{ color: '#10b981', cursor: 'pointer' }}>Shipping and Billing Addresses</Box>
                  {' '}and{' '}
                  <Box component="span" sx={{ color: '#10b981', cursor: 'pointer' }}>Account Details</Box>.
                </Typography>
              </Box>
              {!isMobile && (
                <Box sx={{ display: 'flex', gap: 1.5 }}>
                  <IconButton sx={{ bgcolor: '#fff', border: '1px solid #e5e7eb', width: 40, height: 40 }}><NotificationsNoneIcon sx={{ color: '#6b7280' }} /></IconButton>
                  <IconButton sx={{ bgcolor: '#fff', border: '1px solid #e5e7eb', width: 40, height: 40 }}><ShoppingCartIcon sx={{ color: '#6b7280' }} /></IconButton>
                </Box>
              )}
            </Box>

            {/* Content */}
            <Grid container spacing={{ xs: 1.5, sm: 2, md: 3 }}>

              {/* Account Info + Billing */}
              <Grid item xs={12} md={8}>
                <Grid container spacing={{ xs: 1.5, sm: 2 }}>
                  <Grid item xs={12} sm={6}><AccountInfoCard /></Grid>
                  <Grid item xs={12} sm={6}><BillingAddressCard /></Grid>
                </Grid>
              </Grid>

              {/* Stat Cards — now use <img> with imported imgSrc */}
              <Grid item xs={12} md={4}>
                <Stack spacing={{ xs: 1.5, sm: 2 }} height="100%">
                  {STAT_CARDS.map((s) => (
                    <Paper key={s.label} elevation={0} sx={{ p: { xs: 2, sm: 2.5 }, border: '1px solid #e5e7eb', borderRadius: 2, display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
                      <Box sx={{ width: 52, height: 52, borderRadius: 2, bgcolor: s.bg, overflow: 'hidden', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src={s.imgSrc} alt={s.label} style={{ width: 32, height: 32, objectFit: 'contain' }} />
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: { xs: 22, sm: 26 }, color: '#111827', lineHeight: 1 }}>{s.value}</Typography>
                        <Typography sx={{ fontSize: 13, color: '#6b7280', mt: 0.3 }}>{s.label}</Typography>
                      </Box>
                    </Paper>
                  ))}
                </Stack>
              </Grid>

              {/* Payment */}
              <Grid item xs={12}><PaymentSection /></Grid>

              {/* Orders */}
              <Grid item xs={12}><RecentOrders /></Grid>

              {/* History */}
              <Grid item xs={12}><BrowseHistory /></Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
      <Toast message={toast.msg} open={toast.open} />
    </ThemeProvider>
  );
}