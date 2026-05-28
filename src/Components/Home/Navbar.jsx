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
import SignInPopup from '../signin/SignInPopup';
import ShoppingCartPopup from './ShoppingCartPopup';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";
import compareIcon from '../../assets/Compareicon.png'
import trackIcon from '../../assets/TrackOrdericon.png';
import supportIcon from '../../assets/CustomerSupporticon.png';
import helpIcon from '../../assets/Helpicon.png';
import callIcon from '../../assets/PhoneCall.png';
import magnifiying from '../../assets/MagnifyingGlass.png'


// Assets
import logo from '../../assets/Mainlogo.png';
import twitter from '../../assets/Twitter.png';
import instagram from '../../assets/Instagram.png';
import reddit from '../../assets/Reddit.png';
import printrest from '../../assets/Pinterest.png';
import youtube from '../../assets/Youtube.png';
import facebook from '../../assets/Facebook.png';
import cart from '../../assets/ShoppingCartSimple.png';
import favoute from '../../assets/Heart.png';
import user from '../../assets/User.png';
import EastIcon from '@mui/icons-material/East';


import phone1 from '../../assets/PS5.png';
import phone2 from '../../assets/Camera.png';
import phone3 from '../../assets/Phone.png';
import Pho from '../../assets/homepod.png';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  ...theme.typography.body2,
  boxShadow: 'none',
  border: 'none',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('white', {
    backgroundColor: 'transparent',
  }),
}));

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
  borderRadius: '2px',
  backgroundColor: '#ffffff',
  height: '45px',
  display: 'flex',
  alignItems: 'center',
  marginRight: theme.spacing(2),
  marginLeft: 0,
  fontFamily: "'Public Sans', sans-serif",
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
  paddingLeft: '15px',
  fontFamily: "'Public Sans', sans-serif",
  fontSize:14,
  color:'#77878F',
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
          fontFamily: "'Public Sans', sans-serif",
          '&:hover': { opacity: 0.85 }
        }}
      >
        <Typography variant="body2" sx={{ fontSize: '13px', color,fontFamily: "'Public Sans', sans-serif" }}>
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
  const [phoneAnchor, setPhoneAnchor] = useState(null);

  const cartItemCount = 2;

  const handleCatClick = (event) => setCatAnchor(event.currentTarget);
  const handleCatClose = () => setCatAnchor(null);

  return (

    <Box sx={{ flexGrow: 1 }}>
      {/* 1. Top Utility Bar */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4, py: 1, bgcolor: '#1B6392', color: '#FFFFFF',fontFamily: "'Public Sans', sans-serif" }}>
        <Typography variant="body2" sx={{ fontSize: '13px' ,fontFamily: "'Public Sans', sans-serif"}}>
          Welcome to Clicon online eCommerce store.
        </Typography>

        <Typography
          component={Link}
          to="/wish"
          sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        >
          Wish
        </Typography>

        <Typography
          component={Link}
          to="/check"
          sx={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        >
          Check
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" sx={{ fontSize: '13px', mr: 0.5 ,fontFamily: "'Public Sans', sans-serif"}}>Follow us:</Typography>
            <img src={twitter}   style={{ width: 16, cursor: 'pointer',height:16 }} alt="Twitter" />
            <img src={facebook} style={{ width: 16, cursor: 'pointer',height:16 }} alt="Facebook" />
            <img src={printrest} style={{ width: 16, cursor: 'pointer',height:16 }} alt="Pinterest" />
            <img src={reddit}    style={{ width: 16, cursor: 'pointer',height:16 }} alt="Reddit" />
            <img src={youtube}   style={{ width: 16, cursor: 'pointer',height:16 }} alt="YouTube" />
            <img src={instagram} style={{ width: 16, cursor: 'pointer',height:16 }} alt="Instagram" />
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
            <img src={logo} alt="Logo" style={{ width: 48,height:48}} />
            <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } ,fontWeight:700,fontFamily: "'Public Sans', sans-serif",fontSize:32}}>CLICON</Typography>
          </Box>

          {/* Search */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', px: 2 }}>
            <Search>
              <StyledInputBase placeholder="Search for anything..." />
              <SearchIconWrapper><img src={magnifiying} alt="" /></SearchIconWrapper>
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
          sx={{
            display: 'flex',
            alignItems: 'center',
            bgcolor: '#f5f5f5',
            px: 2,
            py: 1,
            borderRadius: '4px',
            cursor: 'pointer',
            color: '#191C1F',
            transition: '0.2s ease',
            fontFamily: 'Public Sans, sans-serif',

            '&:hover': {
              bgcolor: 'orange',
              color: 'white',
            }
          }}
          onClick={handleCatClick}
        >
          <Typography variant="body2" sx={{ fontWeight: 'bold', mr: 1 ,fontFamily: "'Public Sans', sans-serif"}}>All Category</Typography>
          <KeyboardArrowDownIcon fontSize="small" />
        </Box>

        {/* CATEGORY MENU */}
        <Menu
          anchorEl={catAnchor}
          open={Boolean(catAnchor)}
          onClose={handleCatClose}
          PaperProps={{
            sx: {
              width: '250px',
              mt: 1.5,
              borderRadius: '6px',
              border: '1px solid #E4E7E9',
              overflow: 'visible',
            }
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat}
              sx={{ position: 'relative' }}
              onMouseEnter={(e) => {
                if (cat === 'SmartPhone') {
                  setPhoneAnchor(e.currentTarget);
                }
              }}
              onMouseLeave={() => {
                setPhoneAnchor(null);
              }}
            >
              <MenuItem
                onClick={handleCatClose}
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '13px',
                  '&:hover': {
                    bgcolor: '#FFF5EE',
                    color: '#FA8232'
                  }
                }}
              >
                {cat}
                {cat === 'SmartPhone' && (
                  <span style={{ color: '#929FA5' }}>›</span>
                )}
              </MenuItem>

              {/* SMARTPHONE POPOVER */}
              {cat === 'SmartPhone' && (
                <Popover
                  open={Boolean(phoneAnchor)}
                  anchorEl={phoneAnchor}
                  onClose={() => setPhoneAnchor(null)}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  disableRestoreFocus
                  PaperProps={{
                    sx: {
                      width: '700px',
                      p: 2,
                      borderRadius: '6px',
                      border: '1px solid #E4E7E9',
                      boxShadow: '0px 8px 24px rgba(0,0,0,0.08)',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', gap: 3 }}>

                    {/* LEFT BRANDS */}
                    <Box sx={{ width: '160px', marginTop: '20px', marginLeft: 2, alignContent: 'left' }}>
                      {[
                        'All',
                        'iPhone',
                        'Samsung',
                        'Realme',
                        'Xiaomi',
                        'Oppo',
                        'Vivo',
                        'OnePlus',
                        'Huawei',
                      ].map((brand) => (
                        <Typography
                          key={brand}
                          sx={{
                            fontSize: '13px',
                            py: 1.2,
                            cursor: 'pointer',

                            '&:hover': {
                              color: '#FA8232',
                              backgroundColor: '#F2F4F5'
                            }
                          }}
                        >
                          {brand}
                        </Typography>
                      ))}
                    </Box>

                    {/* FEATURED PRODUCTS */}
                    <Box sx={{ width: '250px', ml: 10, mt: 2, marginLeft: '-30px' }}>

                      <Typography
                        sx={{
                          fontSize: '14px',
                          fontWeight: 700,
                          mb: 2,

                        }}
                      >
                        FEATURED PHONES
                      </Typography>

                      {[
                        {
                          image: phone1,
                          name: 'Samsung Galaxy S21 5G',
                          price: '$160'
                        },
                        {
                          image: phone2,
                          name: 'iPhone 14 Pro Max',
                          price: '$220'
                        },
                        {
                          image: phone3,
                          name: 'OnePlus Nord CE',
                          price: '$140'
                        }
                      ].map((item, index) => (
                        <Box
                          key={index}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            mb: 2,
                            p: 1.2,
                            borderRadius: '6px',
                            border: '1px solid #E4E7E9',
                            cursor: 'pointer',
                            transition: '0.2s ease',
                            bgcolor: '#fff',

                            '&:hover': {
                              border: '1px solid #FA8232',
                              boxShadow: '0px 4px 12px rgba(250,130,50,0.15)',
                              transform: 'translateY(-2px)',
                            }
                          }}
                        >

                          {/* PRODUCT IMAGE */}
                          <Box
                            component="img"
                            src={item.image}
                            alt={item.name}
                            sx={{
                              width: 65,
                              height: 65,
                              objectFit: 'contain',
                              borderRadius: '4px',
                              bgcolor: '#f8f8f8',
                              p: 0.5
                            }}
                          />

                          {/* PRODUCT INFO */}
                          <Box>
                            <Typography
                              sx={{
                                fontSize: '13px',
                                fontWeight: 500,
                                color: '#191C1F',
                                mb: 0.5
                              }}
                            >
                              {item.name}
                            </Typography>

                            <Typography
                              sx={{
                                fontSize: '12px',
                                color: '#2DA5F3',
                                fontWeight: 700
                              }}
                            >
                              {item.price}
                            </Typography>
                          </Box>

                        </Box>
                      ))}

                    </Box>

                    {/* RIGHT OFFER BANNER */}
                    <Box
                      sx={{
                        width: '220px',
                        bgcolor: '#FDF1D6',
                        borderRadius: '4px',
                        p: 2,
                        textAlign: 'center'
                      }}
                    >
                      <Box
                        component="img"
                        src={Pho}
                        alt=""
                        sx={{
                          width: 120,
                          mx: 'auto',
                          mt: 1,
                          p: 2
                        }}
                      />

                      <Typography
                        sx={{
                          fontSize: '28px',
                          fontWeight: 700,
                          mb: 1,
                          fontWidth: 'bold'
                        }}
                      >
                        21% Discount
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: '13px',
                          color: '#5F6C72',
                          mb: 2
                        }}
                      >
                        Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
                      </Typography>

                      <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={0}>
                          <Grid size={6}>
                            <Item>
                              <Typography
                                sx={{
                                  fontSize: '13px',
                                  color: '#5F6C72',
                                  mb: 0
                                }}
                              >
                                Starting Price :
                              </Typography>
                            </Item>
                          </Grid>

                          <Grid size={6}>
                            <Item sx={{ marginLeft: '0px' }}>
                              <Typography
                                sx={{
                                  fontSize: '13px',
                                  color: 'black',
                                  mb: 2,
                                  mt: -1,
                                  backgroundColor: 'white',
                                  border: 8,
                                  borderColor: 'white',
                                  fontWeight: 'bold',
                                  fontFamily: 'Public Sans, sans-serif',
                                }}
                              >
                                $99 USD
                              </Typography>
                            </Item>
                          </Grid>
                        </Grid>
                      </Box>

                      <Button
                        variant="contained"
                        sx={{
                          width: '100%',
                          bgcolor: '#FA8232',
                          '&:hover': {
                            bgcolor: '#de732d',
                            borderRadius: 0
                          }
                        }}
                      >
                        SHOP NOW   < EastIcon sx={{ marginLeft: 1 }} />
                      </Button>
                    </Box>

                  </Box>
                </Popover>
              )}
            </Box>
          ))}
        </Menu>

        {/* Nav Links */}
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', color: '#5f6c73' }}>

          {/* Track Order → navigates to /track-order */}
          <Box
            onClick={() => navigate('/track-order')}
            sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: '14px', '&:hover': { color: '#FA8232' } }}
          >
            <Box sx={{width:'24px', height:'24px'}}>
              <img src={trackIcon} style={{ width: '20px', height: '20px', objectFit: 'contain' }} alt='trackorder'/>
              </Box>
            <Typography sx={{ fontSize: '14px', fontFamily: "'Public Sans', sans-serif", color: '#5f6c73',fontWeight:400}}>
              Track Order            
              </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: '14px', '&:hover': { color: '#FA8232' }, fontWeight:400}}>
            <Box sx={{width:'24px', height:'24px'}}>
              <img src={compareIcon} style={{ width: '20px', height: '20px', objectFit: 'contain' }} alt="Compare" />
              </Box>
            <Typography sx={{ fontSize: '14px', fontFamily: "'Public Sans', sans-serif", color: '#5f6c73',fontWeight:400}}>
              Compare           
              </Typography>
             
          </Box>

          <Box  onClick={() => navigate('/customer-support')}
          sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: '14px', '&:hover': { color: '#FA8232' } }}>
            <Box sx={{width:'24px', height:'24px'}}>
              <img src={supportIcon} style={{ width: '20px', height: '20px', objectFit: 'contain' }} alt="Customer Support" /> 
              </Box>
            <Typography sx={{ fontSize: '14px', fontFamily: "'Public Sans', sans-serif", color: '#5f6c73',fontWeight:400}}>
              Customer Support          
              </Typography>
            
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, cursor: 'pointer', fontSize: '14px', '&:hover': { color: '#FA8232' } }}>
            <Box sx={{width:'24px', height:'24px'}}>
              <img src={helpIcon} style={{ width: '20px', height: '20px', objectFit: 'contain' }} alt="Need Help" />
              </Box>
            <Typography sx={{ fontSize: '14px', fontFamily: "'Public Sans', sans-serif", color: '#5f6c73',fontWeight:400}}>
              Need Help           
              </Typography>
            
          </Box>

        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: '20px', height: '20px', objectFit: 'contain' }} >
            <img src={callIcon} style={{width:'20px', height:'20px'}} alt="Call" />
          </Box>    
          <Typography variant="body2" sx={{ fontWeight: 600, fontSize: '15px',fontFamily: "'Public Sans', sans-serif",color:'#191C1F'}}>+1-202-555-0104</Typography>
        </Box>
      </Box>

      {/* Popups */}
      <SignInPopup open={openSignIn} onClose={() => setOpenSignIn(false)} />
      <ShoppingCartPopup open={openCart} onClose={() => setOpenCart(false)} />

    </Box>
  );
};

export default Navbar;