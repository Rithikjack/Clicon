import { useState } from "react";
import Navbar from './Navbar'
import Footer from './BlackFooter'
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Avatar,
    Chip,
    Button,
    Stack,
    Divider,
} from "@mui/material";
import { Check, PlayArrow } from "@mui/icons-material";
import AC from '../../assets/Key.png'


import ArrowForwardIcon from "@mui/icons-material/ArrowForward";


import Dash from '../../assets/Dash_Cam.png'
import Vivo from '../../assets/Vivo.png'
import Keyboard from '../../assets/Bluetooth.png'


import PS5 from '../../assets/PS5.png'
import Camera from '../../assets/Camera.png'
import Mobile from '../../assets/Mobile.png'


import TV from '../../assets/TV.png'
import Drone from '../../assets/Drone.png'
import Speaker from '../../assets/Speaker.png'


import Sony from '../../assets/Sony.png'
import Printer from '../../assets/Printer.png'
import Joystick from '../../assets/Joystick.png'

import Mac from '../../assets/Mac.png'



import { createTheme, ThemeProvider } from "@mui/material/styles";



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



const theme = createTheme({
    palette: {
        primary: { main: "#29ABE2" },
        success: { main: "#4CAF50" },
        text: { primary: "#1a1a2e", secondary: "#6b7280" },
        background: { default: "#ffffff", paper: "#ffffff" },
    },
    typography: {
        fontFamily: "'Public Sans', sans-serif",
        h3: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.3, color: "#111827" },
        h5: { fontWeight: 700, fontSize: "1.1rem", color: "#111827" },
        h4: { fontWeight: 700, fontSize: "1.55rem", color: "#111827" },
        body1: { fontSize: "0.875rem", color: "#6b7280", lineHeight: 1.7 },
        body2: { fontSize: "0.82rem" },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
                    border: "1px solid #f0f0f0",
                },
            },
        },
    },
});

const teamMembers = [
    { name: "Kevin Gilbert", role: "Chief Executive Officer", bg: "#f5e6c8", avatarColor: "#c49a3c" },
    { name: "Kevin Gilbert", role: "Assistant of CEO", bg: "#f5d0d0", avatarColor: "#b94040" },
    { name: "Kevin Gilbert", role: "Head of Designer", bg: "#d0e4f5", avatarColor: "#2d6e9e" },
    { name: "Kevin Gilbert", role: "UX Designer", bg: "#2d2d2d", avatarColor: "#888", dark: true },
    { name: "Kevin Gilbert", role: "Product Designer", bg: "#dce8f5", avatarColor: "#3a7abd" },
    { name: "Kevin Gilbert", role: "Head of Development", bg: "#3a3a3a", avatarColor: "#777", dark: true },
    { name: "Kevin Gilbert", role: "Design Engineer", bg: "#e0e0e0", avatarColor: "#666" },
    { name: "Kevin Gilbert", role: "UI Designer", bg: "#d0f0ec", avatarColor: "#2a9d8f" },
];

const checkItems = [
    "Great 24/7 customer services.",
    "600+ Dedicated employe.",
    "50+ Branches all over the world.",
    "Over 1 Million Electronics Products",
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






export default function KinboPage() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <Box sx={{ fontFamily: "'Nunito', sans-serif", bgcolor: "#fff" }}>

                {/* ── SECTION 1: Who We Are ── */}
                <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
                    <Grid container spacing={6} alignItems="center">
                        {/* Left */}
                        <Grid item xs={12} md={6}>
                            <Box>
                                <Chip
                                    label="WHO WE ARE"
                                    sx={{
                                        bgcolor: "#29ABE2",
                                        color: "#fff",
                                        fontWeight: 700,
                                        fontSize: "0.7rem",
                                        letterSpacing: 1.2,
                                        borderRadius: "4px",
                                        height: 26,
                                        mb: 2.5,
                                    }}
                                />

                                <Typography variant="h3" sx={{ mb: 2.5 }}>
                                    Kinbo - largest electronics
                                    <br />
                                    retail shop in the world.
                                </Typography>

                                <Typography variant="body1" sx={{ mb: 3.5, maxWidth: 420 }}>
                                    Pellentesque ultrices, dui vel hendrerit iaculis, ipsum velit vestibulum
                                    risus, ac tincidunt diam lectus id magna. Praesent maximus lobortis neque
                                    sit amet rhoncus. Nullam tempus lectus a dui aliquet, non ultricies nibh
                                    elementum. Nulla ac nulla dolor.
                                </Typography>

                                <Stack spacing={1.2}>
                                    {checkItems.map((item, i) => (
                                        <Box key={i} sx={{ display: "flex", alignItems: "center", gap: 1.2 }}>
                                            <Check sx={{ color: "#4CAF50", fontSize: 18, flexShrink: 0 }} />
                                            <Typography variant="body2" sx={{ color: "#374151", fontWeight: 500 }}>
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>

                        {/* Right: Image */}
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    width: "100%",
                                    height: { xs: 260, md: 340 },
                                    bgcolor: "#e8f4f8",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                }}
                            >
                                {/* Placeholder with two-person office illustration feel */}
                                <Box
                                    component="img"
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&q=80"
                                    alt="Kinbo team"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        objectPosition: "center top",
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                <Divider sx={{ borderColor: "#f0f0f0" }} />

                {/* ── SECTION 2: Core Team ── */}
                <Box sx={{ bgcolor: "#fafafa", py: { xs: 6, md: 8 } }}>
                    <Container maxWidth="lg">
                        <Typography
                            variant="h4"
                            align="center"
                            sx={{ mb: 5, fontWeight: 700 }}
                        >
                            Our core team member
                        </Typography>

                        <Grid container spacing={2.5}>
                            {teamMembers.map((member, i) => (
                                <Grid item xs={12} sm={6} md={6} lg={4} key={i}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            borderRadius: "16px",
                                            display: "flex",
                                            alignItems: "center",
                                            transition: "transform 0.2s, box-shadow 0.2s",

                                            "&:hover": {
                                                transform: "translateY(-3px)",
                                                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                                            },
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 5,
                                                py: "18px !important",
                                                px: 4,
                                                minHeight: 10,
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    width: 46,
                                                    height: 46,
                                                    bgcolor: member.bg,
                                                    flexShrink: 0,
                                                    border: "2px solid #fff",
                                                    boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        gap: 10,
                                                        width: "100%",
                                                        height: "100%",
                                                        borderRadius: "50%",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        bgcolor: member.bg,
                                                    }}
                                                >
                                                    {/* Avatar silhouette icon */}
                                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                                                        <circle cx="13" cy="9" r="5" fill={member.avatarColor} opacity="0.9" />
                                                        <ellipse cx="13" cy="22" rx="8" ry="5" fill={member.avatarColor} opacity="0.7" />
                                                    </svg>
                                                </Box>
                                            </Avatar>
                                            <Box>
                                                <Typography
                                                    sx={{
                                                        fontWeight: 700,
                                                        fontSize: "0.88rem",
                                                        color: "#111827",
                                                        lineHeight: 1.3,
                                                    }}
                                                >
                                                    {member.name}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: "0.75rem",
                                                        color: "#9ca3af",
                                                        mt: 0.5,
                                                        width: "100%",
                                                        wordBreak: "break-word",
                                                    }}
                                                >
                                                    {member.role}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* ── SECTION 3: Trusted Shop Banner ── */}
                <Box
                    sx={{
                        position: "relative",
                        minHeight: { xs: 340, md: 420 },
                        overflow: "hidden",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    {/* Background image */}
                    <Box
                        component="img"
                        src={AC}
                        alt="Electronics background"
                        sx={{
                            position: "absolute",
                            inset: 0,
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "center",
                            filter: "brightness(0.85)",
                        }}
                    />

                    {/* Soft white overlay on left for readability */}
                    <Box
                        sx={{
                            position: "absolute",
                            inset: 0,
                            background:
                                "linear-gradient(to right, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0) 75%)",
                        }}
                    />

                    {/* Content */}
                    <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                        <Box sx={{ maxWidth: { xs: "100%", md: 380 } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 800,
                                    fontSize: { xs: "1.5rem", md: "1.9rem" },
                                    lineHeight: 1.25,
                                    color: "#111827",
                                    mb: 2,
                                }}
                            >
                                Your trusted and
                                <br />
                                reliable retail shop
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{ color: "#4b5563", mb: 3.5, lineHeight: 1.75 }}
                            >
                                Praesent sed semper metus. Nunc aliquet dolor mauris, et fringilla elit
                                gravida eget. Nunc consequat auctor urna a placerat.
                            </Typography>

                            {/* Play button */}
                            <Box
                                sx={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: "50%",
                                    bgcolor: "#F5A623",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    boxShadow: "0 4px 14px rgba(245,166,35,0.45)",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                        boxShadow: "0 6px 20px rgba(245,166,35,0.6)",
                                    },
                                }}
                            >
                                <PlayArrow sx={{ color: "#fff", fontSize: 26, ml: "2px" }} />
                            </Box>
                        </Box>

                    </Container>
                </Box>


            </Box>

            <Box
                sx={{
                    backgroundColor: "#ffffff",
                    minHeight: "10vh",
                }}
            >
                <Box
                    sx={{
                        maxWidth: "1200px",
                        mx: "auto",
                        px: { xs: "16px", md: "32px" },
                        mt:10
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
            <Footer />
        </ThemeProvider>
    );
}
