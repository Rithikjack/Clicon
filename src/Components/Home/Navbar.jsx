import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import SignInPopup from '../signin/SignInPopup';
import ShoppingCartPopup from './ShoppingCartPopup';

// Assets
import logo from '../../assets/Mainlogo.png';
import twitter from '../../assets/Twitter.png';
import instagram from '../../assets/Instagram.png';
import reddit from '../../assets/Reddit.png';
import printrest from '../../assets/Pinterest.png';
import youtube from '../../assets/Youtube.png';
import cart from '../../assets/ShoppingCartSimple.png';
import favoute from '../../assets/Heart.png';
import user from '../../assets/User.png';

const categories = [
  "Computer & Laptop", "Computer Accessories", "SmartPhone", "Headphone",
  "Mobile Accessories", "Gaming Console", "Camera & Photo", "TV & Homes Appliances",
  "Watches & Accessories", "GPS & Navigation", "Warable Technology"
];

const languages = [
  { code: 'Eng', label: 'English' },
  { code: 'Ara', label: 'Arabic' },
  { code: 'Fra', label: 'French' },
  { code: 'Deu', label: 'German' },
  { code: 'Zho', label: 'Chinese' }
];

const currencies = [
  { code: 'USD', symbol: '$', label: 'US Dollar' },
  { code: 'EUR', symbol: '€', label: 'Euro' },
  { code: 'GBP', symbol: '£', label: 'British Pound' },
  { code: 'INR', symbol: '₹', label: 'Indian Rupee' },
  { code: 'AED', symbol: 'د.إ', label: 'UAE Dirham' }
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '4px',
  backgroundColor: '#ffffff',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: { marginLeft: theme.spacing(3), width: '600px' },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#757575',
  cursor: 'pointer'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#333',
  width: '100%',
  paddingLeft: '10px',
  '& .MuiInputBase-input': { padding: theme.spacing(1, 1, 1, 0), fontSize: '14px' },
}));

const TopBarDropdown = ({ value, options, onSelect, color = '#fff' }) => {
  const [anchor, setAnchor] = useState(null);

  return (
    <>
      <Box
        onClick={(e) => setAnchor(e.currentTarget)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '3px',
          cursor: 'pointer',
          color,
          userSelect: 'none',
          '&:hover': { opacity: 0.85 }
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '13px', color }}>
          {value}
        </Typography>
        <KeyboardArrowDownIcon sx={{ fontSize: '16px', color }} />
      </Box>

      <Menu
        anchorEl={anchor}
        open={Boolean(anchor)}
        onClose={() => setAnchor(null)}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: '140px',
            borderRadius: '6px',
            border: '1px solid #E4E7E9',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {options.map((opt) => (
          <MenuItem
            key={opt.code}
            selected={opt.code === value}
            onClick={() => { onSelect(opt.code); setAnchor(null); }}
            sx={{
              fontSize: '13px',
              py: 1,
              px: 2,
              color: opt.code === value ? '#FA8232' : '#191C1F',
              fontWeight: opt.code === value ? 600 : 400,
              '&:hover': { bgcolor: '#FFF5EE', color: '#FA8232' },
              '&.Mui-selected': { bgcolor: '#FFF5EE' },
              '&.Mui-selected:hover': { bgcolor: '#FFF5EE' }
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', gap: 1 }}>
              <span>{opt.label}</span>
              <span style={{ color: '#929FA5', fontWeight: 400 }}>{opt.code}</span>
            </Box>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

const Navbar = () => {
  const navigate = useNavigate();

  const [catAnchor, setCatAnchor] = useState(null);
  const [language, setLanguage] = useState('Eng');
  const [currency, setCurrency] = useState('USD');
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const cartItemCount = 2;

  const handleCatClick = (event) => setCatAnchor(event.currentTarget);
  const handleCatClose = () => setCatAnchor(null);

  return (
    <Box sx={{ flexGrow: 1 }}>

      {/* 1. Top Utility Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4, py: 1, bgcolor: '#1B6392', color: '#FFFFFF' }}>
        <Typography variant="body2" sx={{ fontSize: '13px' }}>
          Welcome to Clicon online eCommerce store.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '13px', mr: 0.5 }}>Follow us:</Typography>
            <img src={twitter}   style={{ width: 14, cursor: 'pointer' }} alt="Twitter" />
            <img src={instagram} style={{ width: 14, cursor: 'pointer' }} alt="Instagram" />
            <img src={printrest} style={{ width: 14, cursor: 'pointer' }} alt="Pinterest" />
            <img src={reddit}    style={{ width: 14, cursor: 'pointer' }} alt="Reddit" />
            <img src={youtube}   style={{ width: 14, cursor: 'pointer' }} alt="YouTube" />
          </Box>

          <Box sx={{ width: '1px', height: '16px', bgcolor: 'rgba(255,255,255,0.3)' }} />
          <TopBarDropdown value={language} options={languages} onSelect={setLanguage} />
          <Box sx={{ width: '1px', height: '16px', bgcolor: 'rgba(255,255,255,0.3)' }} />
          <TopBarDropdown value={currency} options={currencies} onSelect={setCurrency} />
        </Box>
      </Box>

      {/* 2. Main Navigation Bar */}
      <AppBar position="static" sx={{ background: '#1B6392', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {/* Logo */}
          <Box
            onClick={() => navigate('/')}
            sx={{ display: 'flex', alignItems: 'center', gap: '5px', cursor: 'pointer' }}
          >
            <img src={logo} alt="Logo" style={{ width: 30 }} />
            <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>CLICON</Typography>
          </Box>

          {/* Search */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', px: 2 }}>
            <Search>
              <StyledInputBase placeholder="Search for anything..." />
              <SearchIconWrapper><SearchIcon /></SearchIconWrapper>
            </Search>
          </Box>

          {/* Icons */}
          <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>

            {/* Cart icon with badge */}
            <IconButton sx={{ p: 0 }} onClick={() => setOpenCart(true)}>
              <Badge
               
              >
                <img src={cart} style={{ width: 28 }} alt="Cart" />
              </Badge>
            </IconButton>

            {/* Wishlist */}
            <IconButton sx={{ p: 0 }}>
              <img src={favoute} style={{ width: 24 }} alt="Wishlist" />
            </IconButton>

            {/* Account */}
            <IconButton sx={{ p: 0 }} onClick={() => setOpenSignIn(true)}>
              <img src={user} style={{ width: 24 }} alt="Account" />
            </IconButton>

          </Box>
        </Toolbar>
      </AppBar>

      {/* 3. Category & Support Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4, py: 1.5, borderBottom: '1px solid #e0e0e0', bgcolor: '#ffffff' }}>
        <Box
          sx={{ display: 'flex', alignItems: 'center', bgcolor: '#f5f5f5', px: 2, py: 1, borderRadius: '4px', cursor: 'pointer', '&:hover': { bgcolor: '#ebebeb' } }}
          onClick={handleCatClick}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 }}>All Category</Typography>
          <KeyboardArrowDownIcon fontSize="small" />
        </Box>

        <Menu
          anchorEl={catAnchor}
          open={Boolean(catAnchor)}
          onClose={handleCatClose}
          PaperProps={{ sx: { width: '250px', mt: 1.5, borderRadius: '6px', border: '1px solid #E4E7E9' } }}
        >
          {categories.map((cat) => (
            <MenuItem
              key={cat}
              onClick={handleCatClose}
              sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', '&:hover': { bgcolor: '#FFF5EE', color: '#FA8232' } }}
            >
              {cat}
              {cat === 'SmartPhone' && <span style={{ color: '#929FA5' }}>›</span>}
            </MenuItem>
          ))}
        </Menu>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', color: '#5f6c73' }}>

          {/* Track Order → navigates to /track-order */}
          <Box
            onClick={() => navigate('/track-order')}
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: '13px', '&:hover': { color: '#FA8232' } }}
          >
            <LocationOnOutlinedIcon fontSize="small" /> Track Order
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: '13px', '&:hover': { color: '#FA8232' } }}>
            <CompareArrowsIcon fontSize="small" /> Compare
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: '13px', '&:hover': { color: '#FA8232' } }}>
            <HeadsetMicOutlinedIcon fontSize="small" /> Customer Support
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: '13px', '&:hover': { color: '#FA8232' } }}>
            <InfoOutlinedIcon fontSize="small" /> Need Help
          </Box>

        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <CallOutlinedIcon sx={{ fontSize: '18px', color: '#191C1F' }} />
          <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '13px' }}>+1-202-555-0104</Typography>
        </Box>
      </Box>

      {/* Popups */}
      <SignInPopup open={openSignIn} onClose={() => setOpenSignIn(false)} />
      <ShoppingCartPopup open={openCart} onClose={() => setOpenCart(false)} />

    </Box>
  );
};

export default Navbar;