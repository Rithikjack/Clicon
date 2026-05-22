import React, { useState } from "react";
import {
    Box,
    Typography,
    Button,
    Rating,
    Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Buds from '../assets/Buds.png'

import Blue from '../assets/Bluetooth 2.png'
import Blue_2 from '../assets/Bluetooth 3.png'
import Red from '../assets/Bluetooth.png'
import Canon from '../assets/Canon.png'

import Home_Cam from '../assets/Home Cam.png'
import Dash from '../assets/Dash_Cam.png'
import Printer from '../assets/Printer.png'
import Wash from '../assets/Washing Machine.png'

// ─── DATA ─────────────────────────────────────────────────────────────────────
const tabs = ["All Product", "Keyboard & Mouse", "Headphone", "Webcam", "Printer"];




const products = [
    {
        id: 1,
        name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
        price: "$360",
        oldPrice: null,
        rating: 3.5,
        reviews: 994,
        badge: "BEST DEALS",
        badgeColor: "#2196f3",
        image: Blue,
    },
    {
        id: 2,
        name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
        price: "$80",
        oldPrice: null,
        rating: 4,
        reviews: 796,
        badge: null,
        image: Blue_2,
    },
    {
        id: 3,
        name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
        price: "$70",
        oldPrice: null,
        rating: 5,
        reviews: 600,
        badge: "HOT",
        badgeColor: "#f44336",
        image: Red,
    },
    {
        id: 4,
        name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
        price: "$250",
        oldPrice: null,
        rating: 5,
        reviews: 492,
        badge: null,
        image: Canon,
    },
    {
        id: 5,
        name: "Samsung Electronics Samsung Galaxy S21 5G",
        price: "$2,300",
        oldPrice: null,
        rating: 3.5,
        reviews: 740,
        badge: null,
        image: Home_Cam,
    },
    {
        id: 6,
        name: "4K UHD LED Smart TV with Chromecast Built-in",
        price: "$220",
        oldPrice: null,
        rating: 3.5,
        reviews: 556,
        badge: "SALE",
        badgeColor: "#4caf50",
        image: Dash,
    },
    {
        id: 7,
        name: "Wired Over-Ear Gaming Headphones with USB",
        price: "$1,500",
        oldPrice: null,
        rating: 3.5,
        reviews: 536,
        badge: null,
        backgroundColor: 'white',
        image: Printer,
    },
    {
        id: 8,
        name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
        price: "$1,200",
        oldPrice: "$1,600",
        rating: 3.5,
        reviews: 423,
        badge: "25% OFF",
        backgroundColor: 'white',
        badgeColor: "#ff9800",
        image: Wash,
    },
];

// ─── STAR RATING ──────────────────────────────────────────────────────────────
function StarRating({ value, count }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: "4px", mb: "6px" }}>
            <Rating
                value={value}
                precision={0.5}
                readOnly
                size="small"
                sx={{ color: "#f5a623", fontSize: "14px" }}
            />
            <Typography sx={{ fontSize: "11px", color: "#888", fontFamily: "sans-serif" }}>
                ({count})
            </Typography>
        </Box>
    );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────
function ProductCard({ product }) {
    return (
        <Box
            sx={{
                position: "relative",
                border: "1px solid #e8e8e8",
                borderRadius: "4px",
                backgroundColor: "#fff",
                p: "8px",
                cursor: "pointer",
                transition: "box-shadow 0.2s",
                "&:hover": { boxShadow: "0 4px 16px rgba(0,0,0,0.10)" },
            }}
        >
            {/* Badge */}
            {product.badge && (
                <Chip
                    label={product.badge}
                    size="small"
                    sx={{
                        position: "absolute",
                        top: "10px",
                        left: "10px",
                        backgroundColor: product.badgeColor,
                        color: "#fff",
                        fontWeight: 700,
                        fontSize: "10px",
                        height: "20px",
                        borderRadius: "3px",
                        fontFamily: "sans-serif",
                        zIndex: 1,
                    }}
                />
            )}

            {/* Image */}
            <Box
                sx={{
                    width: "100%",
                    height: "130px",
                    backgroundColor: "",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "12px",
                    borderRadius: "3px",
                    overflow: "hidden",
                }}
            >
                {product.image ? (
                    <img
                        src={product.image}
                        alt={product.name}
                        style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
                    />
                ) : (
                    <Typography sx={{ fontSize: "10px", color: "#ccc" }}>No Image</Typography>
                )}
            </Box>

            {/* Rating */}
            <StarRating value={product.rating} count={product.reviews} />

            {/* Name */}
            <Typography
                sx={{
                    fontSize: "13px",
                    color: "#222",
                    lineHeight: 1.45,
                    fontFamily: "sans-serif",
                    mb: "6px",
                    minHeight: "38px",
                }}
            >
                {product.name}
            </Typography>

            {/* Price */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                {product.oldPrice && (
                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: "#aaa",
                            textDecoration: "line-through",
                            fontFamily: "sans-serif",
                        }}
                    >
                        {product.oldPrice}
                    </Typography>
                )}
                <Typography
                    sx={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#1a9cd8",
                        fontFamily: "sans-serif",
                    }}
                >
                    {product.price}
                </Typography>
            </Box>
        </Box>
    );
}

// ─── PROMO CARD: EARBUDS ──────────────────────────────────────────────────────
function EarbudsPromo() {
    return (
        <Box
            sx={{
                backgroundColor: "#FFD580 ",
                borderRadius: "6px",
                p: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",

                // ✅ FIXED: removed mb here, gap handled by parent
            }}
        >
            {/* Image placeholder */}
            <Box
                sx={{
                    width: "70px",
                    height: "70px",
                    backgroundColor: "#f0ecd8",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: "14px",
                }}
            >
                <Box
                    component="img"
                    src={Buds}
                    alt="Xiaomi Earbuds"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                    }}
                />
            </Box>

            <Typography
                sx={{
                    fontSize: "14px",
                    fontWeight: 'bold',
                    color: "#111",
                    lineHeight: 1.25,
                    fontFamily: "sans-serif",
                    mb: "8px",
                }}
            >
                Xiaomi True
                <br />
                Wireless Earbuds
            </Typography>

            <Typography
                sx={{
                    fontSize: "12px",
                    color: "#666",
                    lineHeight: 1.55,
                    fontFamily: "sans-serif",
                    mb: "14px",
                    display: 'flex',
                    justifyContent: 'center',
                    width: '202%'
                }}
            >
                Escape the noise, <br />
                It’s time to hear the magic <br />
                with Xiaomi Earbuds.
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "6px",
                    mb: "14px",
                }}
            >
                <Typography sx={{ fontSize: "12px", color: "#888", fontFamily: "sans-serif" }}>
                    Only for:
                </Typography>
                <Box
                    sx={{
                        backgroundColor: "#fff",
                        border: "1px solid #ddd",
                        borderRadius: "3px",
                        px: "10px",
                        py: "4px",
                    }}
                >
                    <Typography sx={{ fontSize: "14px", fontWeight: 700, fontFamily: "sans-serif" }}>
                        $299 USD
                    </Typography>
                </Box>
            </Box>

            <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                disableElevation
                sx={{
                    backgroundColor: "#f5a623",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    px: "20px",
                    py: "8px",
                    borderRadius: "3px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontFamily: "sans-serif",
                    width: "100%",
                    "&:hover": { backgroundColor: "#e0941a" },
                }}
            >
                SHOP NOW
            </Button>
        </Box>
    );
}

// ─── PROMO CARD: DISCOUNT ─────────────────────────────────────────────────────
function DiscountPromo() {
    return (
        <Box
            sx={{
                backgroundColor: "#1a2744",
                borderRadius: "6px",
                p: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                minHeight: "200px",

            }}
        >
            <Typography
                sx={{
                    marginTop: '-10px',
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "#aab4cc",
                    letterSpacing: "1.5px",
                    mb: "2px",
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                }}
            >
                SUMMER SALES
            </Typography>

            <Typography
                sx={{
                    fontSize: "28px",
                    fontWeight: 900,
                    color: "#fff",
                    lineHeight: 1.1,
                    fontFamily: "sans-serif",
                    mb: "8px",
                }}
            >
                37% DISCOUNT
            </Typography>

            <Typography
                sx={{ fontSize: "13px", color: "#aab4cc", mb: "18px", fontFamily: "sans-serif" }}
            >
                only for{" "}
                <span style={{ color: "#f5a623", fontWeight: 700 }}>SmartPhone</span> product.
            </Typography>

            <Button
                variant="contained"
                endIcon={<ArrowForwardIcon />}
                disableElevation
                sx={{
                    backgroundColor: "#2196f3",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: 700,
                    px: "20px",
                    py: "8px",
                    borderRadius: "3px",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                    fontFamily: "sans-serif",
                    width: "100%",
                    "&:hover": { backgroundColor: "#1976d2" },
                }}
            >
                SHOP NOW
            </Button>
        </Box>
    );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export default function ComputerAccessories() {
    const [activeTab, setActiveTab] = useState("All Product");

    return (
        <Box sx={{ backgroundColor: "#fff", minHeight: "100vh", py: "32px" }}>
            <Box sx={{ maxWidth: "1200px", mx: "auto", px: { xs: "16px", md: "24px" } }}>

                {/* ── Outer Row: Left (header + grid) | Right (promo boxes) ── */}
                <Box sx={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>

                    {/* LEFT SIDE: Header + Product Grid stacked */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>

                        {/* Header Row */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: "0",
                                mb: "16px",
                            }}
                        >
                            {/* Section Title */}
                            <Typography
                                sx={{
                                    fontSize: "18px",
                                    fontWeight: 700,
                                    color: "#111",
                                    fontFamily: "sans-serif",
                                    mr: "28px",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                Computer Accessories
                            </Typography>

                            {/* Tabs */}
                            <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", flex: 1 }}>
                                {tabs.map((tab) => (
                                    <Typography
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        sx={{
                                            fontSize: "13px",
                                            fontWeight: activeTab === tab ? 600 : 400,
                                            color: activeTab === tab ? "#f5a623" : "#333",
                                            borderBottom: activeTab === tab ? "2px solid #f5a623" : "2px solid transparent",
                                            px: "12px",
                                            py: "8px",
                                            cursor: "pointer",
                                            fontFamily: "sans-serif",
                                            whiteSpace: "nowrap",
                                            transition: "color 0.2s",
                                            "&:hover": { color: "#f5a623" },
                                        }}
                                    >
                                        {tab}
                                    </Typography>
                                ))}

                                {/* Browse All */}
                                <Box sx={{ display: "flex", alignItems: "center", gap: "4px", ml: "8px", cursor: "pointer" }}>
                                    <Typography
                                        sx={{
                                            fontSize: "13px",
                                            color: "#f5a623",
                                            fontWeight: 600,
                                            fontFamily: "sans-serif",
                                            "&:hover": { textDecoration: "underline" },
                                        }}
                                    >
                                        Browse All Product
                                    </Typography>
                                    <ArrowForwardIcon sx={{ fontSize: "14px", color: "#f5a623" }} />
                                </Box>
                            </Box>
                        </Box>

                        {/* Product Grid: 4 cols × 2 rows */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: "repeat(4, 1fr)",
                                gap: "10px",
                            }}
                        >
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </Box>

                    </Box>

                    {/* RIGHT SIDE: Promo boxes — aligned to very top */}
                    <Box
                        sx={{
                            width: "210px",
                            minWidth: "210px",
                            flexShrink: 0,
                            display: "flex",
                            flexDirection: "column",
                            gap: "16px",
                            alignSelf: "flex-start",
                        }}
                    >
                        <EarbudsPromo />
                        <DiscountPromo />
                    </Box>

                </Box>
            </Box>
        </Box>
    );
}
