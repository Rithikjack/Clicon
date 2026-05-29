import React from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import Navbar from '../../Components/Home/Navbar'
import Footer from '../../Components/Home/Black_Footer_2'

// Images
import Earbuds from "../../assets/Board.png";
import Headphone from "../../assets/Bluetooth 3.png";
import WashingMachine from "../../assets/Banner.png";
import Speaker from "../../assets/Buds.png";
import Monitor from "../../assets/CalendarBlank.png";

const wishlistItems = [
    {
        id: 1,
        image: Earbuds,
        name:
            "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear Headphones for Workouts and Running, Triple Black",
        oldPrice: "$1299",
        price: "$999",
        stock: "IN STOCK",
        stockColor: "#2DB224",
        buttonColor: "#FA8232",
        link: '/add-card'
    },

    {
        id: 2,
        image: Headphone,
        name: "Simple Mobile 5G LTE Galaxy 12 Mini 512GB Gaming Phone",
        price: "$2,300.00",
        stock: "IN STOCK",
        stockColor: "#2DB224",
        buttonColor: "#FA8232",
    },

    {
        id: 3,
        image: WashingMachine,
        name:
            "Portable Washing Machine, 11lbs capacity Model 18NMFIAM",
        price: "$70.00",
        stock: "IN STOCK",
        stockColor: "#2DB224",
        buttonColor: "#FA8232",
    },

    {
        id: 4,
        image: Speaker,
        name:
            "TOZO T6 True Wireless Earbuds Bluetooth Headphones Touch Control",
        oldPrice: "$250.00",
        price: "$220.00",
        stock: "OUT OF STOCK",
        stockColor: "#EE5858",
        buttonColor: "#FA8232",
    },

    {
        id: 5,
        image: Monitor,
        name:
            "Wyze Cam Pan v2 1080p Pan/Tilt/Zoom Wi-Fi Indoor Smart Home Camera",
        price: "$1,499.99",
        stock: "IN STOCK",
        stockColor: "#2DB224",
        buttonColor: "#FA8232",
    },
];

export default function WishlistPage() {
    return (
        <Box sx={{ bgcolor: "#F5F5F5", minHeight: "100vh" }}>
            <Navbar />

            {/* Breadcrumb */}
            <Box
                sx={{
                    bgcolor: "#FFFFFF",
                    borderBottom: "1px solid #E4E7E9",
                    py: 2,
                    px: {
                        xs: 2,
                        sm: 4,
                        md: 8,
                        lg: 20,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        flexWrap: "wrap",
                    }}
                >
                    <HomeOutlinedIcon
                        sx={{ fontSize: 16, color: "#5F6C72" }}
                    />

                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: "#5F6C72",
                        }}
                    >
                        Home
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "13px",
                            color: "#2DA5F3",
                        }}
                    >
                        Wishlist
                    </Typography>
                </Box>
            </Box>

            <Box
                component={Link}
                to="/shopcard"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    cursor: "pointer",
                    fontSize: "13px",
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": {
                        color: "#FA8232",
                    },
                }}
            >
            </Box>

            {/* Main Card */}
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    mx: "auto",
                    mt: 6,
                    mb: 10,
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E4E7E9",

                    px: {
                        xs: 0,
                        sm: 0,
                    },

                    overflowX: "auto",
                }}
            >
                {/* Title */}
                <Typography
                    sx={{
                        fontSize: "18px",
                        fontWeight: 600,
                        px: 3,
                        py: 2,
                    }}
                >
                    Wishlist
                </Typography>

                {/* Table Header */}
                <Box
                    sx={{
                        display: {
                            xs: "none",
                            md: "grid",
                        },
                        gridTemplateColumns: "3fr 1fr 1fr 1.5fr 40px",
                        bgcolor: "#F2F4F5",
                        px: 2,
                        py: 1.5,
                        borderTop: "1px solid #E4E7E9",
                        borderBottom: "1px solid #E4E7E9",
                        minWidth: "1000px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "11px",
                            color: "#5F6C72",
                            fontWeight: 500,
                        }}
                    >
                        PRODUCTS
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "11px",
                            color: "#5F6C72",
                            fontWeight: 500,
                        }}
                    >
                        PRICE
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "11px",
                            color: "#5F6C72",
                            fontWeight: 500,
                        }}
                    >
                        STOCK STATUS
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: "11px",
                            color: "#5F6C72",
                            fontWeight: 500,
                        }}
                    >
                        ACTIONS
                    </Typography>
                </Box>

                {/* Wishlist Items */}
                {wishlistItems.map((item) => (
                    <Box
                        component={Link}
                        to={item.link}
                        key={item.id}
                        sx={{
                            textDecoration: "none",

                            display: {
                                xs: "flex",
                                md: "grid",
                            },

                            flexDirection: {
                                xs: "column",
                                sm: "column",
                            },

                            gridTemplateColumns: "3fr 1fr 1fr 1.5fr 40px",

                            alignItems: {
                                xs: "flex-start",
                                md: "center",
                            },

                            gap: {
                                xs: 2,
                                md: 0,
                            },

                            px: {
                                xs: 2,
                                sm: 3,
                            },

                            py: 2,
                            borderBottom: "1px solid #E4E7E9",

                            minWidth: {
                                md: "1000px",
                            },
                        }}
                    >
                        {/* Product */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                                width: "100%",
                            }}
                        >
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    width: {
                                        xs: 70,
                                        sm: 80,
                                        md: 60,
                                    },

                                    height: {
                                        xs: 70,
                                        sm: 80,
                                        md: 60,
                                    },

                                    objectFit: "contain",
                                    flexShrink: 0,
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: {
                                        xs: "13px",
                                        sm: "14px",
                                        md: "12px",
                                    },

                                    color: "#191C1F",
                                    lineHeight: 1.5,

                                    maxWidth: {
                                        xs: "100%",
                                        md: "320px",
                                    },
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>

                        {/* Price */}
                        <Box
                            sx={{
                                width: {
                                    xs: "100%",
                                    md: "auto",
                                },
                            }}
                        >
                            <Typography
                                sx={{
                                    display: {
                                        xs: "block",
                                        md: "none",
                                    },
                                    fontSize: "11px",
                                    color: "#5F6C72",
                                    mb: 0.5,
                                    fontWeight: 600,
                                }}
                            >
                                PRICE
                            </Typography>

                            {item.oldPrice && (
                                <Typography
                                    sx={{
                                        fontSize: "12px",
                                        color: "#929FA5",
                                        textDecoration: "line-through",
                                        mr: 0.5,
                                        display: "inline",
                                    }}
                                >
                                    {item.oldPrice}
                                </Typography>
                            )}

                            <Typography
                                sx={{
                                    fontSize: "13px",
                                    fontWeight: 500,
                                    display: "inline",
                                    color: "#191C1F",
                                }}
                            >
                                {item.price}
                            </Typography>
                        </Box>

                        {/* Stock */}
                        <Box>
                            <Typography
                                sx={{
                                    display: {
                                        xs: "block",
                                        md: "none",
                                    },
                                    fontSize: "11px",
                                    color: "#5F6C72",
                                    mb: 0.5,
                                    fontWeight: 600,
                                }}
                            >
                                STOCK STATUS
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    fontWeight: 500,
                                    color: item.stockColor,
                                }}
                            >
                                {item.stock}
                            </Typography>
                        </Box>

                        {/* Button */}
                        <Box
                            sx={{
                                width: {
                                    xs: "100%",
                                    md: "auto",
                                },
                            }}
                        >
                            <Button
                                variant="contained"
                                endIcon={<ShoppingCartOutlinedIcon />}
                                sx={{
                                    bgcolor: item.buttonColor,
                                    color: "#fff",
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    borderRadius: 0,
                                    boxShadow: "none",

                                    width: {
                                        xs: "100%",
                                        sm: "220px",
                                        md: "140px",
                                    },

                                    height: "42px",

                                    "&:hover": {
                                        bgcolor: item.buttonColor,
                                        boxShadow: "none",
                                    },
                                }}
                            >
                                ADD TO CART
                            </Button>
                        </Box>

                        {/* Remove */}
                        <IconButton
                            sx={{
                                alignSelf: {
                                    xs: "flex-end",
                                    md: "center",
                                },
                            }}
                        >
                            <CloseIcon
                                sx={{
                                    fontSize: 16,
                                    color: "#929FA5",
                                }}
                            />
                        </IconButton>
                    </Box>
                ))}
            </Box>

            <Footer />
        </Box>
    );
}