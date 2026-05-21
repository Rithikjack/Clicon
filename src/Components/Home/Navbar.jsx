import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logo from '../../assets/Logo.png'
import twitter from '../../assets/Twitter.png'
import instagram from '../../assets/Instagram.png'
import facebook from '../../assets/Facebook.png'
import reddit from '../../assets/Reddit.png'
import youtube from '../../assets/Youtube.png'
import printerest from '../../assets/Pinterest.png'
import cart from '../../assets/ShoppingCartSimple.png'
import favoute from '../../assets/Heart.png'
import user from '../../assets/User.png'


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
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '600px',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#757575',
  cursor:'pointer'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#333',
  width: '100%',
  paddingLeft: '10px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: '14px',
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
            <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        px: 2, 
        py: 1, 
        backgroundColor: '#1B6392' ,
        color:'#FFFFFF'
        }}>
      
        <Typography variant="body2" sx={{fontSize:'14px'}}>
            Welcome to Clicon online eCommerce Store.
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1.5,cursor:'pointer'}}>
            Follow us:
            <img src= {twitter} alt="social" style={{ width: 16 }} />
            <img src={instagram} alt="social" style={{ width: 16 }} />
            <img src={facebook} alt="social" style={{ width: 16 }} />
            <img src={printerest} alt="social" style={{ width: 16 }} />
            <img src={reddit} alt="social" style={{ width: 16 }} />
            <img src={youtube} alt="social" style={{ width: 16 }} />
            
            </Typography>
            <select name="language" defaultValue="Eng" style={{border:'none',backgroundColor:'#1B6392',color:'#FFFFFF'}}>
            <option value="Eng">Eng</option>
            <option value="Tamil">Tamil</option>
            </select>

            <select name="currency" defaultValue="USD" style={{border:'none',backgroundColor:'#1B6392',
                color:'#FFFFFF'
            }}>
            <option value="USD">USD</option>
            <option value="INR">INR</option>
            </select>
        </Box>
        </Box>
      <AppBar position="static" sx={{background:'#1B6392'}}>
       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
  <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
    <img src={logo} alt="Logo" style={{ width: 30 }} />
    <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
      CLICON
    </Typography>
  </Box>
  <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', px: 2 }}>
    <Search>
      <StyledInputBase placeholder="Search for anything..." inputProps={{ 'aria-label': 'search' }} />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Search>
  </Box>
  <Box sx={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
    <IconButton sx={{ p: 0 }}><img src={cart} alt="Cart" style={{ width: 30 }}/></IconButton>
    <IconButton sx={{ p: 0 }}><img src={favoute} alt="Fav" style={{ width: 25 }} /></IconButton>
    <IconButton sx={{ p: 0 }}><img src={user} alt="User" style={{ width: 25 }}/></IconButton>
  </Box>
  </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
};

export default Navbar;