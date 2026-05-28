import React from "react";
import {
    Box,
    Typography,
    Button,
    IconButton,
    Divider,
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
                    px: 20,
                }}
            >
                <Box
                    sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
                <CompareArrowsIcon fontSize="small" />
                Compare
            </Box>


            {/* Main Card */}
            <Box
                sx={{
                    maxWidth: "760px",
                    mx: "auto",
                    mt: 6,
                    maxWidth: '1200px',
                    bgcolor: "#FFFFFF",
                    border: "1px solid #E4E7E9",
                    mb: 10
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
                        display: "grid",
                        gridTemplateColumns: "3fr 1fr 1fr 1.5fr 40px",
                        bgcolor: "#F2F4F5",
                        px: 2,
                        py: 1.5,
                        borderTop: "1px solid #E4E7E9",
                        borderBottom: "1px solid #E4E7E9",
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
                            display: "grid",
                            gridTemplateColumns: "3fr 1fr 1fr 1.5fr 40px",
                            alignItems: "center",
                            px: 2,
                            py: 2,
                            borderBottom: "1px solid #E4E7E9",
                        }}
                    >
                        {/* Product */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.name}
                                sx={{
                                    width: 60,
                                    height: 60,
                                    objectFit: "contain",
                                }}
                            />

                            <Typography
                                sx={{
                                    fontSize: "12px",
                                    color: "#191C1F",
                                    lineHeight: 1.5,
                                    maxWidth: "320px",
                                }}
                            >
                                {item.name}
                            </Typography>
                        </Box>

                        {/* Price */}
                        <Box>
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
                                }}
                            >
                                {item.price}
                            </Typography>
                        </Box>

                        {/* Stock */}
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 500,
                                color: item.stockColor,
                            }}
                        >
                            {item.stock}
                        </Typography>

                        {/* Button */}
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
                                width: "140px",
                                height: "42px",

                                "&:hover": {
                                    bgcolor: item.buttonColor,
                                    boxShadow: "none",
                                },
                            }}
                        >
                            ADD TO CART
                        </Button>

                        {/* Remove */}
                        <IconButton>
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