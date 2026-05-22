import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import Dash from '../assets/Dash_Cam.png'
import Vivo from '../assets/Vivo.png'
import Keyboard from '../assets/Bluetooth.png'


import PS5 from '../assets/PS5.png'
import Camera from '../assets/Camera.png'
import Mobile from '../assets/Mobile.png'


import TV from '../assets/TV.png'
import Drone from '../assets/Drone.png'
import Speaker from '../assets/Speaker.png'


import Sony from '../assets/Sony.png'
import Printer from '../assets/Printer.png'
import Joystick from '../assets/Joystick.png'

import Mac from '../assets/Mac.png'

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

// ─── HERO BANNER ─────────────────────────────────────────────────────────────
function HeroBanner() {
    return (
        <Box
            sx={{
                backgroundColor: "#fce8d5",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: { xs: "28px", md: "60px" },
                py: { xs: "36px", md: "44px" },
                mb: "48px",
                position: "relative",
                overflow: "hidden",
                minHeight: "280px",
            }}
        >
            {/* LEFT: Text Content */}
            <Box sx={{ zIndex: 1, maxWidth: "400px" }}>
                {/* Badge */}
                <Box
                    sx={{
                        display: "inline-block",
                        backgroundColor: "#2196f3",
                        color: "#fff",
                        fontSize: "11px",
                        fontWeight: 700,
                        px: "10px",
                        py: "5px",
                        borderRadius: "3px",
                        mb: "16px",
                        letterSpacing: "0.6px",
                        fontFamily: "sans-serif",
                    }}
                >
                    SAVE UP TO $200.00
                </Box>

                {/* Heading */}
                <Typography
                    sx={{
                        fontSize: { xs: "34px", md: "46px" },
                        color: "#111",
                        lineHeight: 1.1,
                        fontFamily: "sans-serif",
                        mb: "14px",
                    }}
                >
                    Macbook Pro
                </Typography>

                {/* Description */}
                <Typography
                    sx={{
                        fontSize: "15px",
                        color: "#444",
                        lineHeight: 1.65,
                        fontFamily: "sans-serif",
                        mb: "28px",
                    }}
                >
                    Apple M1 Max Chip. 32GB Unified Memory,
                    <br />
                    1TB SSD Storage
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    endIcon={<ArrowForwardIcon />}
                    disableElevation
                    sx={{
                        backgroundColor: "#f5a623",
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "12px",
                        letterSpacing: "1.5px",
                        px: "26px",
                        py: "13px",
                        borderRadius: "3px",
                        textTransform: "uppercase",
                        fontFamily: "sans-serif",
                        "&:hover": { backgroundColor: "#ff8c00" },
                    }}
                >
                    SHOP NOW
                </Button>
            </Box>

            {/* RIGHT */}
            <Box
                sx={{
                    position: "relative",
                    display: { xs: "none", md: "flex" },
                    alignItems: "center",
                    justifyContent: "center",
                    width: "420px",
                    height: "260px",
                    flexShrink: 0,
                }}
            >
                {/* Price Bubble */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "0px",
                        left: "30px",
                        width: "84px",
                        height: "84px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #fce8d5,rgb(250, 172, 112))",
                        border: "5px solid rgb(255, 255, 255)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "16px",
                            fontWeight: 800,
                            color: "#222",
                            fontFamily: "sans-serif",
                        }}
                    >
                        $1999
                    </Typography>
                </Box>

                {/* Laptop Image */}
                <Box
                    component="img"
                    src={Mac}
                    alt="Macbook Pro"
                    sx={{
                        width: "340px",
                        height: "230px",
                        objectFit: "contain",
                        ml: "40px",
                    }}
                />
            </Box>
        </Box>
    );
}

// ─── PAGE ROOT ────────────────────────────────────────────────────────────────
export default function ShopPage() {
    return (
        <Box
            sx={{
                backgroundColor: "#ffffff",
                minHeight: "100vh",
                py: "40px",
            }}
        >
            <Box
                sx={{
                    maxWidth: "1200px",
                    mx: "auto",
                    px: { xs: "16px", md: "32px" },
                }}
            >
                {/* Hero Banner */}
                <HeroBanner />

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
    );
}