import React, { useState } from 'react';
import {
    Box, Grid, Typography, Rating, Divider, Button, TextField,
    IconButton, Select, MenuItem, Tabs, Tab, Stack, Container
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SyncIcon from '@mui/icons-material/Sync';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";
import Navbar from '../Home/Navbar';
import Footer from '../Home/Black_Footer_2'


import Dash from '../../assets/Dash_Cam.png'
import Vivo from '../../assets/Vivo.png'
import Keyboard from '../../assets/Bluetooth.png'


import PS5 from '../../assets/PS5.png'
import Camera from '../../assets/Camera.png'
import Mobile from '../../assets/Mobile.png'
import Pay from '../../assets/Payment Method.png'


import TV from '../../assets/TV.png'
import Drone from '../../assets/Drone.png'
import Speaker from '../../assets/Speaker.png'


import Sony from '../../assets/Sony.png'
import Printer from '../../assets/Printer.png'
import Joystick from '../../assets/Joystick.png'

import Mac from '../../assets/Mac.png'

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "'Public Sans', sans-serif",
    },
});

// ─── PRODUCT DATA ─────────────────────────────────────────────────────────────
const sections = [
    {
        title: "FLASH SALE TODAY",
        products: [
            {
                img: Dash,
                id: 1,
                name: "Bose Sport Earbuds -Wireless Earphones -Bluetooth In Ear...",
                price: "$1,500",
            },
            {
                img: Vivo,
                id: 2,
                name: "Simple Mobile 4G LTE Prepaid Smartphone",
                price: "$1,500",
            },
            {
                img: Keyboard,
                id: 3,
                name: "4K UHD LED Smart TV with Chromecast Built-in",
                price: "$1,500",
            },
        ],
    },
    {
        title: "BEST SELLERS",
        products: [
            {
                img: PS5,
                id: 4,
                name: "Samsung Electronics Samsung Galaxy S21 5G",
                price: "$1,500",
            },
            {
                img: Camera,
                id: 5,
                name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
                price: "$1,500",
            },
            {
                img: Mobile,
                id: 6,
                name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
                price: "$1,500",
            },
        ],
    },
    {
        title: "TOP RATED",
        products: [
            {
                img: TV,
                id: 7,
                name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
                price: "$1,500",
            },
            {
                img: Drone,
                id: 8,
                name: "Sony DSCHX8 High Zoom Point & Shoot Camera",
                price: "$1,500",
            },
            {
                img: Speaker,
                id: 9,
                name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
                price: "$1,500",
            },
        ],
    },
    {
        title: "NEW ARRIVAL",
        products: [
            {
                img: Sony,
                id: 10,
                name: "TOZO T6 True Wireless Earbuds Bluetooth Headpho...",
                price: "$1,500",
            },
            {
                img: Printer,
                id: 11,
                name: "JBL FLIP 4 - Waterproof Portable Bluetooth Speaker...",
                price: "$1,500",
            },
            {
                img: Joystick,
                id: 12,
                name: "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smar...",
                price: "$1,500",
            },
        ],
    },
];

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product }) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    backgroundColor: "#fff",
                    border: "1px solid #e8e8e8",
                    borderRadius: "4px",
                    p: "10px",
                    cursor: "pointer",
                    mb: "10px",
                    "&:hover .name": { color: "#1a9cd8" },
                }}
            >
                {/* Image */}
                <Box
                    sx={{
                        width: 64,
                        height: 64,
                        minWidth: 64,
                        backgroundColor: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                    }}
                >
                    <Box
                        component="img"
                        src={product.img}
                        alt={product.name}
                        sx={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                {/* Info */}
                <Box>
                    <Typography
                        className="name"
                        sx={{
                            fontSize: "13px",
                            color: "#222",
                            lineHeight: 1.4,
                            fontFamily: "sans-serif",
                            transition: "color 0.2s",
                        }}
                    >
                        {product.name}
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "13px",
                            fontWeight: 700,
                            color: "#1a9cd8",
                            mt: "4px",
                            fontFamily: "sans-serif",
                        }}
                    >
                        {product.price}
                    </Typography>
                </Box>
            </Box>
        </>
    );
}

// ─── SECTION COLUMN ───────────────────────────────────────────────────────────
function SectionColumn({ section }) {
    return (
        <Box>
            {/* Title */}
            <Typography
                sx={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#111",
                    mb: "14px",
                    fontFamily: "sans-serif",
                    letterSpacing: "0.2px",
                }}
            >
                {section.title}
            </Typography>

            {/* Products */}
            {section.products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </Box>
    );
}



// ─── PLACEMARK ASSET VALUES ─────────────────────────────────────────────────
const thumbnails = [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80", // Thumb 1
    "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80", // Thumb 2
    "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=500&q=80", // Thumb 3
    "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&q=80", // Thumb 4
    "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?w=500&q=80", // Thumb 5
    "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&q=80"  // Thumb 6
];

const paymentLogos = [
    { name: 'Visa', url: 'https://img.icons8.com/color/48/visa.png' },
    { name: 'Mastercard', url: 'https://img.icons8.com/color/48/mastercard.png' },
    { name: 'Paypal', url: 'https://img.icons8.com/color/48/paypal.png' },
    { name: 'Amex', url: 'https://img.icons8.com/color/48/amex.png' },
    { name: 'Visa Electron', url: 'https://img.icons8.com/color/48/visa-electron.png' },
    { name: 'Discover', url: 'https://img.icons8.com/color/48/discover.png' },
    { name: 'Maestro', url: 'https://img.icons8.com/color/48/maestro.png' }
];

export default function ProductDetailsPage() {
    // State Engines
    const [activeImgIdx, setActiveImgIdx] = useState(0);
    const [color, setColor] = useState('space-gray');
    const [size, setSize] = useState('14-inch');
    const [memory, setMemory] = useState('16gb');
    const [storage, setStorage] = useState('1tb');
    const [quantity, setQuantity] = useState(1);
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>
            <Navbar />
            <Container
                maxWidth={false}
                sx={{
                    width: { xs: '100%', sm: '100%', md: '1285px' },
                    margin: '0 auto',
                    px: { xs: 2, sm: 3, md: 0 },
                }}
            >

                {/* ── TOP PRODUCT CONFIGURATION BOX SPLIT ──────────────────────────────── */}
                <Grid container spacing={4} sx={{ mb: 8 }}>

                    {/* LEFT COLUMN: INTERACTIVE GALLERY VIEWER */}
                    <Grid item xs={12} md={5} sx={{ marginTop: 5, p: { xs: 2, md: 5 } }}>
                        {/* Main Large Visual Frame */}
                        <Box sx={{
                            border: '1px solid #E4E7E9', borderRadius: '4px', p: 1,
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            height: { xs: 220, sm: 280, md: 320 },
                            bgcolor: '#fff', position: 'relative', mb: 2
                        }}>
                            <Box
                                component="img"
                                src={Mac}
                                alt="MacBook Pro"
                                sx={{ maxHeight: '150%', maxWidth: '150%', objectFit: 'contain' }}
                            />
                        </Box>

                        {/* Thumbnail Track Row with Flanking Actions */}
                        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', px: 3, mt: { xs: 4, md: 9 } }}>
                            <IconButton sx={{
                                bgcolor: '#FA8232', color: '#fff', boxShadow: 2, zIndex: 2,
                                position: 'absolute', left: 0, '&:hover': { bgcolor: '#E06F27' },
                                width: 28, height: 28
                            }}>
                                <KeyboardArrowLeftIcon />
                            </IconButton>

                            <Grid container spacing={1.5}>
                                {thumbnails.map((thumb, idx) => (
                                    <Grid item xs={2} key={idx}>
                                        <Box
                                            onClick={() => setActiveImgIdx(idx)}
                                            sx={{
                                                border: activeImgIdx === idx ? '2px solid #FA8232' : '1px solid #E4E7E9',
                                                borderRadius: '4px', p: 0.5, cursor: 'pointer',
                                                height: { xs: 40, sm: 48, md: 55 },
                                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                bgcolor: '#fff', transition: 'border 0.2s'
                                            }}
                                        >
                                            <img src={thumb} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            <IconButton sx={{
                                bgcolor: '#FA8232', color: '#fff', boxShadow: 2, zIndex: 2,
                                position: 'absolute', right: 0, '&:hover': { bgcolor: '#E06F27' },
                                width: 36, height: 36
                            }}>
                                <KeyboardArrowRightIcon />
                            </IconButton>
                        </Box>
                    </Grid>

                    {/* RIGHT COLUMN: PURCHASING CONTROL OPTIONS */}
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{
                            mt: 5,
                            maxWidth: { xs: '100%', md: '520px' },
                        }}
                    >
                        {/* Header Reviews Row */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: 1.5, flexWrap: 'wrap' }}>
                            <Rating value={5} size="small" readOnly sx={{ color: '#FA8232', fontSize: '14px' }} />
                            <Typography sx={{ fontSize: '13px', fontWeight: 600, color: '#191C1F', ml: 0.5 }}>4.7 Star Rating</Typography>
                            <Typography sx={{ fontSize: '13px', color: '#77878F' }}>(21,671 User feedback)</Typography>
                        </Box>

                        {/* Title Text */}
                        <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, fontWeight: 500, color: '#191C1F', mb: 2, lineHeight: 1.4 }}>
                            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray
                        </Typography>

                        {/* Meta Details Inventory Fields */}
                        <Grid container spacing={1.5} sx={{ mb: 2.5 }}>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>Sku: <Box component="span" sx={{ color: '#191C1F', fontWeight: 500 }}>A264671</Box></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>Availability: <Box component="span" sx={{ color: '#2DB224', fontWeight: 600 }}>In Stock</Box></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>Brand: <Box component="span" sx={{ color: '#191C1F', fontWeight: 500 }}>Apple</Box></Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>Category: <Box component="span" sx={{ color: '#191C1F', fontWeight: 500 }}>Electronics Devices</Box></Typography>
                            </Grid>
                        </Grid>

                        {/* Sale Display Pricing Matrix */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5, flexWrap: 'wrap' }}>
                            <Typography sx={{ fontWeight: 600, color: '#2DA5F3', fontSize: { xs: '20px', md: '24px' } }}>$1699</Typography>
                            <Typography sx={{ fontSize: '16px', color: '#929FA5', textDecoration: 'line-through' }}>$1999.00</Typography>
                            <Box sx={{ bgcolor: '#EFD33D', color: '#191C1F', px: 1, py: 0.4, borderRadius: '2px', fontSize: '12px', fontWeight: 600 }}>
                                21% OFF
                            </Box>
                        </Box>

                        <Divider sx={{ mb: 3, borderColor: '#E4E7E9' }} />

                        {/* Form Select Grid Rows */}
                        <Grid container spacing={2} sx={{ mb: 3.5 }}>
                            {/* Color Concentric Rings */}
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '14px', color: '#191C1F', mb: 1 }}>Color</Typography>
                                <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                                    <Box
                                        onClick={() => setColor('space-gray')}
                                        sx={{
                                            width: 28, height: 28, borderRadius: '50%', bgcolor: '#979B9E', cursor: 'pointer',
                                            border: '2px solid #fff', outline: color === 'space-gray' ? '2px solid #FA8232' : '1px solid #E4E7E9'
                                        }}
                                    />
                                    <Box
                                        onClick={() => setColor('silver')}
                                        sx={{
                                            width: 28, height: 28, borderRadius: '50%', bgcolor: '#E3E4E6', cursor: 'pointer',
                                            border: '2px solid #fff', outline: color === 'silver' ? '2px solid #FA8232' : '1px solid #E4E7E9'
                                        }}
                                    />
                                </Box>
                            </Grid>

                            {/* Size Options */}
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '14px', color: '#191C1F', mb: 1 }}>Size</Typography>
                                <Select fullWidth size="small" value={size} onChange={(e) => setSize(e.target.value)} sx={{ fontSize: '13px' }}>
                                    <MenuItem value="14-inch" sx={{ fontSize: '13px' }}>14-inch Liquid Retina XDR display</MenuItem>
                                    <MenuItem value="16-inch" sx={{ fontSize: '13px' }}>16-inch Liquid Retina XDR display</MenuItem>
                                </Select>
                            </Grid>

                            {/* Memory Configuration */}
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '14px', color: '#191C1F', mb: 1 }}>Memory</Typography>
                                <Select fullWidth size="small" value={memory} onChange={(e) => setMemory(e.target.value)} sx={{ fontSize: '13px' }}>
                                    <MenuItem value="16gb" sx={{ fontSize: '13px' }}>16GB unified memory</MenuItem>
                                    <MenuItem value="32gb" sx={{ fontSize: '13px' }}>32GB unified memory</MenuItem>
                                </Select>
                            </Grid>

                            {/* Storage Configuration */}
                            <Grid item xs={6}>
                                <Typography sx={{ fontSize: '14px', color: '#191C1F', mb: 1 }}>Storage</Typography>
                                <Select fullWidth size="small" value={storage} onChange={(e) => setStorage(e.target.value)} sx={{ fontSize: '13px' }}>
                                    <MenuItem value="1tb" sx={{ fontSize: '13px' }}>1TV SSD Storage</MenuItem>
                                    <MenuItem value="2tb" sx={{ fontSize: '13px' }}>2TB SSD Storage</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>

                        {/* Action Row Checkout Trigger Elements */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3.5, flexWrap: { xs: 'wrap', sm: 'nowrap' } }}>
                            {/* Inline Numeric Selector */}
                            <Box sx={{ display: 'flex', alignItems: 'center', border: '1px solid #E4E7E9', borderRadius: '4px', height: 44 }}>
                                <IconButton onClick={() => quantity > 1 && setQuantity(p => p - 1)} sx={{ px: 1.5 }} size="small">
                                    <RemoveIcon fontSize="small" />
                                </IconButton>
                                <Typography sx={{ minWidth: 32, textAlign: 'center', fontSize: '14px', color: '#191C1F', fontWeight: 500 }}>
                                    {String(quantity).padStart(2, '0')}
                                </Typography>
                                <IconButton onClick={() => setQuantity(p => p + 1)} sx={{ px: 1.5 }} size="small">
                                    <AddIcon fontSize="small" />
                                </IconButton>
                            </Box>

                            {/* Filled Core CTA */}
                            <Button
                                component={Link}
                                to="/wish"
                                variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                sx={{
                                    borderRadius: '0px',
                                    bgcolor: '#FA8232', color: '#fff', fontWeight: 700, px: 4, height: 44, boxShadow: 'none',
                                    flexGrow: 2, '&:hover': { bgcolor: '#E06F27', boxShadow: 'none' }, fontSize: '14px',
                                    width: { xs: '100%', sm: '60%' },
                                }}
                            >
                                ADD TO CARD
                            </Button>

                            {/* Outlined Accent Button */}
                            <Button
                                component={Link}
                                to="/check"
                                variant="outlined"
                                sx={{
                                    borderColor: '#FA8232',
                                    color: '#FA8232',
                                    fontWeight: 700,
                                    height: 44,
                                    width: { xs: '100%', sm: '20%' },
                                    fontSize: '13px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    whiteSpace: 'nowrap',
                                    borderRadius: '0px',
                                    '&:hover': {
                                        borderColor: '#E06F27',
                                        bgcolor: 'rgba(250,130,50,0.03)',
                                    },
                                }}
                            >
                                BUY NOW
                            </Button>
                        </Box>

                        {/* Social Utility Row */}
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, mb: 4, flexWrap: 'wrap' }}>
                            <Box sx={{ display: 'flex', gap: 2.5, flexWrap: 'wrap' }}>
                                <Button startIcon={<FavoriteBorderIcon />} sx={{ color: '#475156', textTransform: 'none', fontSize: '13px', p: 0, '&:hover': { color: '#191C1F', bg: 'none' } }}>
                                    Add to Wishlist
                                </Button>
                                <Button startIcon={<SyncIcon />} sx={{ color: '#475156', textTransform: 'none', fontSize: '13px', p: 0, '&:hover': { color: '#191C1F', bg: 'none' } }}>
                                    Add to Compare
                                </Button>
                            </Box>

                            <Stack direction="row" alignItems="center" spacing={1} sx={{ flexWrap: 'wrap' }}>
                                <Typography sx={{ fontSize: '13px', color: '#475156' }}>Share product:</Typography>
                                <IconButton size="small" sx={{ color: '#5F6C72' }}><ContentCopyIcon sx={{ fontSize: 16 }} /></IconButton>
                                <IconButton size="small" sx={{ color: '#5F6C72' }}><FacebookIcon sx={{ fontSize: 16 }} /></IconButton>
                                <IconButton size="small" sx={{ color: '#5F6C72' }}><TwitterIcon sx={{ fontSize: 16 }} /></IconButton>
                                <IconButton size="small" sx={{ color: '#5F6C72' }}><PinterestIcon sx={{ fontSize: 16 }} /></IconButton>
                            </Stack>
                        </Box>

                        {/* Checkout Merchants Wrapper */}
                        <Box sx={{ border: '1px solid #E4E7E9', borderRadius: '4px', p: 2 }}>
                            <Typography sx={{ fontSize: '13px', color: '#191C1F', mb: 1.5, fontWeight: 500 }}>
                                100% Guarantee Safe Checkout
                            </Typography>
                            <Stack direction="row" spacing={1.5}>
                                <Box
                                    component="img"
                                    src={Pay}
                                    alt="Payment"
                                    sx={{
                                        width: { xs: '100%', sm: 300 },
                                        height: 'auto',
                                        objectFit: 'contain'
                                    }}
                                />
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>

                {/* ── LOWER TABBED METRICS INTERACTION PANEL ─────────────────────────── */}
                <Box sx={{ border: '1px solid #E4E7E9', borderRadius: '4px' }}>
                    {/* Navigation Section Tab Header */}
                    <Box sx={{ borderBottom: '1px solid #E4E7E9', display: 'flex', justifyContent: 'center', overflowX: 'auto' }}>
                        <Tabs
                            value={tabIndex}
                            onChange={(_, value) => setTabIndex(value)}
                            variant="scrollable"
                            scrollButtons="auto"
                            TabIndicatorProps={{ style: { backgroundColor: '#FA8232', height: '3px' } }}
                            sx={{
                                '& .MuiTab-root': { textTransform: 'none', fontWeight: 600, fontSize: { xs: '11px', md: '13px' }, px: { xs: 1.5, md: 3 }, py: 2, color: '#77878F' },
                                '& .Mui-selected': { color: '#191C1F !important' }
                            }}
                        >
                            <Tab label="DESCRIPTION" />
                            <Tab label="ADDITIONAL INFORMATION" />
                            <Tab label="SPECIFICATION" />
                            <Tab label="REVIEW" />
                        </Tabs>
                    </Box>

                    {/* Dynamic Inner Tab Compartment Viewport */}
                    <Box sx={{ p: { xs: 3, md: 4 } }}>
                        {tabIndex === 0 && (
                            <Grid container spacing={4}>
                                {/* Detailed Editorial Text Area */}
                                <Grid item xs={12} lg={6}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#191C1F', mb: 1.5 }}>Description</Typography>
                                    <Typography sx={{ fontSize: '13px', color: '#5F6C72', lineHeight: 1.6, width: { xs: '100%', lg: 700 }, mb: 2 }}>
                                        The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.
                                    </Typography>
                                    <Typography sx={{ fontSize: '13px', color: '#5F6C72', width: { xs: '100%', lg: 700 }, lineHeight: 1.6 }}>
                                        Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.
                                    </Typography>
                                </Grid>

                                {/* Explicit Feature Layout Block List */}
                                <Grid item xs={12} sm={6} lg={3}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#191C1F', mb: 2 }}>Feature</Typography>
                                    <Stack spacing={1.5}>
                                        {[
                                            { text: 'Free 1 Year Warranty', icon: <WorkspacePremiumOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> },
                                            { text: 'Free Shipping & Fasted Delivery', icon: <LocalShippingOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> },
                                            { text: '100% Money-back guarantee', icon: <WorkspacePremiumOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> },
                                            { text: '24/7 Customer support', icon: <SupportAgentOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> },
                                            { text: 'Secure payment method', icon: <PaymentOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> }
                                        ].map((item, i) => (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                {item.icon}
                                                <Typography sx={{ fontSize: '13px', color: '#191C1F' }}>{item.text}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Grid>

                                {/* Delivery Logistics Content Panel */}
                                <Grid item xs={12} sm={6} lg={3} sx={{ borderLeft: { xs: 'none', sm: '2px solid rgb(213, 213, 213)' }, p: 1 }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#191C1F', mb: 2 }}>Shipping Information</Typography>
                                    <Stack spacing={1.5}>
                                        <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>
                                            <Box component="span" sx={{ color: '#191C1F', fontWeight: 500 }}>Courier:</Box> 2 - 4 days, free shipping
                                        </Typography>
                                        <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>
                                            <Box component="span" sx={{ color: '#191C1F', fontWeight: 500 }}>Local Shipping:</Box> up to one week, $19.00
                                        </Typography>
                                        <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>
                                            <Box component="span" sx={{ color: '#191C1F', fontWeight: 500 }}>UPS Ground Shipping:</Box> 4 - 6 days, $29.00
                                        </Typography>
                                        <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>
                                            <Box component="span" sx={{ color: '#191C1F', fontWeight: 500 }}>Unishop Global Export:</Box> 3 - 4 days, $39.00
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>
                        )}



                        {tabIndex === 1 && <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>

                            Additional informational parameters view.

                            <Grid container spacing={4}>
                                {/* Detailed Editorial Text Area */}
                                <Grid item xs={12} lg={6}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#191C1F', mb: 1.5 }}>Additional Info</Typography>
                                    <Typography sx={{ fontSize: '13px', color: '#5F6C72', lineHeight: 1.6, width: { xs: '100%', lg: 700 }, mb: 2 }}>
                                        Apple's Mac lineup runs on the Unix-based macOS operating system, powered by Apple silicon. It offers seamless iPhone integration, advanced privacy features, and system-wide Apple Intelligence with Writing Tools, Genmoji, and Image Playground                </Typography>
                                    <Typography component={'li'} sx={{ fontSize: '13px', color: '#5F6C72', width: { xs: '100%', lg: 700 }, lineHeight: 1.6 }}>
                                        MacBook Air: Available in 13-inch and 15-inch sizes. Thinner, highly portable, and uses the M5 chip for fast performance and all-day battery life.                </Typography>
                                    <Typography component={'li'} sx={{ fontSize: '13px', color: '#5F6C72', lineHeight: 1.6, width: { xs: '100%', lg: 700 }, mb: 2, marginTop: 1 }}>
                                        MacBook Pro: Available in 14-inch and 16-inch sizes. Powered by M5, M5 Pro, or M5 Max chips for demanding creative and pro workflows.
                                    </Typography>
                                </Grid>

                                {/* Explicit Feature Layout Block List */}
                                <Grid item xs={12} sm={6} lg={3}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#191C1F', mb: 2 }}>Feature</Typography>
                                    <Stack spacing={1.5}>
                                        {[
                                            { text: 'Free 1 Year Warranty', icon: <WorkspacePremiumOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> },
                                            { text: 'Free Shipping & Fasted Delivery', icon: <LocalShippingOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> },
                                            { text: '100% Money-back guarantee', icon: <WorkspacePremiumOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> },
                                            { text: '24/7 Customer support', icon: <SupportAgentOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> },
                                            { text: 'Secure payment method', icon: <PaymentOutlinedIcon sx={{ color: '#FA8232', fontSize: 20 }} /> }
                                        ].map((item, i) => (
                                            <Box key={i} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                                                {item.icon}
                                                <Typography sx={{ fontSize: '13px', color: '#191C1F' }}>{item.text}</Typography>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Grid>

                                {/* Delivery Logistics Content Panel */}
                                <Grid item xs={12} sm={6} lg={3} sx={{ borderLeft: { xs: 'none', sm: '2px solid rgb(213, 213, 213)' }, p: 1 }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: '15px', color: '#191C1F', mb: 2, marginLeft: { xs: 0, sm: 3 } }}>Shipping Information</Typography>
                                    <Stack spacing={1.5}>
                                        <Typography sx={{ fontSize: '13px', color: '#5F6C72', marginLeft: { xs: 0, sm: 3 } }}>
                                            <Box component="span" sx={{ color: '#191C1F', fontWeight: 500, marginLeft: { xs: 0, sm: 3 } }}>Courier:</Box> 2 - 4 days, free shipping
                                        </Typography>
                                        <Typography sx={{ fontSize: '13px', color: '#5F6C72', marginLeft: { xs: 0, sm: 3 } }}>
                                            <Box component="span" sx={{ color: '#191C1F', fontWeight: 500, marginLeft: { xs: 0, sm: 3 } }}>Local Shipping:</Box> up to one week, $19.00
                                        </Typography>
                                        <Typography sx={{ fontSize: '13px', color: '#5F6C72', marginLeft: { xs: 0, sm: 3 } }}>
                                            <Box component="span" sx={{ color: '#191C1F', fontWeight: 500, marginLeft: { xs: 0, sm: 3 } }}>UPS Ground Shipping:</Box> 4 - 6 days, $29.00
                                        </Typography>
                                        <Typography sx={{ fontSize: '13px', color: '#5F6C72', marginLeft: { xs: 0, sm: 3 } }}>
                                            <Box component="span" sx={{ color: '#191C1F', fontWeight: 500, marginLeft: { xs: 0, sm: 3 } }}>Unishop Global Export:</Box> 3 - 4 days, $39.00
                                        </Typography>
                                    </Stack>
                                </Grid>
                            </Grid>


                        </Typography>}
                        {tabIndex === 2 && <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>Detailed mechanical metrics specifications view.</Typography>}
                        {tabIndex === 3 && <Typography sx={{ fontSize: '13px', color: '#5F6C72' }}>User review distributions log view.</Typography>}
                    </Box>
                </Box>




                <Box
                    sx={{
                        mt: 5,
                        backgroundColor: "#ffffff",
                        minHeight: "100vh",
                        pb: 0,
                        minHeight: "auto",
                        mb: 0,
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: "1200px",
                            mx: "auto",
                            px: { xs: "16px", md: "32px" },
                        }}
                    >

                        {/* 4 Column Layout */}
                        <Grid container spacing={3}>
                            {sections.map((section) => (
                                <Grid
                                    size={{ xs: 12, sm: 6, md: 3 }}
                                    key={section.title}
                                >
                                    <SectionColumn section={section} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Box>

            </Container>
            <Footer />
        </>
    );
}
