import React, { useState } from "react";
import Navbar from './Navbar'
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    Avatar,
    InputAdornment,
    Radio,
    RadioGroup,
    FormControlLabel,
    IconButton,
    Divider,
    Link,
    useMediaQuery,
} from "@mui/material";

import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";

// ================= ICONS =================
import SearchIcon from "@mui/icons-material/Search";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkIcon from "@mui/icons-material/Link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

// ================= FOOTER =================
import Footer from "../../Components/Home/Black_Footer_2";

// ================= LOCAL IMAGES =================
import pic from "../../assets/White Robot.png";
import pic2 from "../../assets/Black Phone.png";

import Blog1 from "../../assets/Banner.png";
import Blog2 from "../../assets/Backcase.png";
import Blog3 from "../../assets/Banner.png";

import Gallery1 from "../../assets/Avatar.png";
import Gallery2 from "../../assets/Backcase.png";
import Gallery3 from "../../assets/Blackarrow.png";
import Gallery4 from "../../assets/Bluetooth 2.png";
import Gallery5 from "../../assets/Black Phone.png";
import Gallery6 from "../../assets/CalendarBlank.png";
import Gallery7 from "../../assets/Board.png";
import Gallery8 from "../../assets/CalendarBlank.png";

import user1 from "../../assets/Avatar.png";
import user2 from "../../assets/Backcase.png";
import user3 from "../../assets/Blackarrow.png";
import user4 from "../../assets/Bluetooth 2.png";
import user5 from "../../assets/Bluetooth 2.png";

const commentsData = [
    {
        name: "Annette Black",
        date: "26 Apr, 2021",
        image: user1,
        text: "Ia a nisi commodo, porttitor ligula consequat, tincidunt dui. Nulla volutpat, metus eu aliquam malesuada, elit libero venenatis urna, consequat maximus arcu diam non diam.",
    },
    {
        name: "Devon Lane",
        date: "24 Apr, 2021",
        image: user2,
        text: "Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. Nam hendrerit, velit ut aliquam euismod, nibh tortor rutrum nisi, ac sodales nunc eros porta nisi. Sed scelerisque, est eget aliquam venenatis, est sem tempor eros.",
    },
    {
        name: "Jacob Jones",
        date: "20 Apr, 2021",
        image: user3,
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    },
    {
        name: "Jane Cooper",
        date: "18 Apr, 2021",
        image: user4,
        text: "Pellentesque feugiat, nibh vel vehicula pretium, nibh nibh bibendum elit, a volutpat arcu dui nec orci. Aenean dui odio, ullamcorper quis turpis ac, dictum imperdiet ex.",
    },
    {
        name: "Darrell Steward",
        date: "7 Apr, 2021",
        image: user5,
        text: "Nulla molestie interdum ultrices.",
    },
];

const ORANGE = "#FA8232";

// ================= THEME =================
const theme = createTheme({
    palette: {
        primary: { main: ORANGE },
    },
    typography: {
        fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif",
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,
            tv: 1920, // custom TV breakpoint
        },
    },
});

const IMG = {
    hero: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=85",
};

const categories = [
    "All",
    "Electronics Devices",
    "Computer & Laptop",
    "Computer Accessories",
    "SmartPhone",
    "Headphone",
    "Mobile Accessories",
    "Gaming Console",
    "Camera & Photo",
];

const blogs = [
    {
        image: Blog1,
        title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
        date: "28 Nov, 2015",
    },
    {
        image: Blog2,
        title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
        date: "28 Nov, 2015",
    },
    {
        image: Blog3,
        title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
        date: "28 Nov, 2015",
    },
];

const galleryImages = [
    Gallery1, Gallery2, Gallery3, Gallery4,
    Gallery5, Gallery6, Gallery7, Gallery8,
];

const tags = [
    "Game", "iPhone", "TV", "Asus Laptops", "Macbook", "SSD",
    "Graphics Card", "Speaker", "Tablet", "Microwave", "Samsung", "Power Bank",
];

// ================= META COMPONENT =================
function Meta({ icon, label }) {
    return (
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <Box sx={{ color: ORANGE, display: "flex", fontSize: 14 }}>{icon}</Box>
            <Typography sx={{ fontSize: { xs: 11, sm: 12.5 }, color: "#6B7280" }}>
                {label}
            </Typography>
        </Box>
    );
}

// ================= SOCIAL ICON COMPONENT =================
function Circle({ icon, bg }) {
    return (
        <IconButton
            size="small"
            sx={{
                bgcolor: bg,
                color: "#fff",
                width: { xs: 28, sm: 32 },
                height: { xs: 28, sm: 32 },
                borderRadius: "50%",
                "&:hover": { bgcolor: bg, filter: "brightness(0.85)" },
                "& svg": { fontSize: { xs: 11, sm: 13 } },
            }}
        >
            {icon}
        </IconButton>
    );
}

export default function Blog() {
    const [cat, setCat] = useState("All");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [comment, setComment] = useState("");
    const orange = "#FA8232";

    return (
        <>
            <Navbar />
            <ThemeProvider theme={theme}>
                <Box sx={{ bgcolor: "#fff", overflowX: "hidden" }}>

                    {/* ================= HERO ================= */}
                    <Box
                        component="img"
                        src={IMG.hero}
                        alt="hero"
                        sx={{
                            width: "100%",
                            height: { xs: 160, sm: 220, md: 280, lg: 340, xl: 420 },
                            objectFit: "cover",
                            display: "block",
                        }}
                    />

                    {/* ================= MAIN CONTENT ================= */}
                    <Container
                        maxWidth="xl"
                        sx={{ py: { xs: 3, sm: 4, md: 6, xl: 8 }, px: { xs: 2, sm: 3, md: 4 } }}
                    >
                        <Grid container spacing={{ xs: 3, md: 4, lg: 5 }}>

                            {/* ================= LEFT CONTENT ================= */}
                            <Grid item xs={12} lg={8}>

                                {/* META */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        alignItems: "center",
                                        gap: { xs: 1, sm: 2 },
                                        mb: 2,
                                    }}
                                >
                                    <Meta icon={<LocalOfferOutlinedIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />} label="Electronics" />
                                    <Meta icon={<PersonOutlineIcon sx={{ fontSize: { xs: 12, sm: 14 } }} />} label="Marvin McKinney" />
                                    <Meta icon={<CalendarTodayOutlinedIcon sx={{ fontSize: { xs: 11, sm: 13 } }} />} label="8 Sep, 2020" />
                                    <Meta icon={<ChatBubbleOutlineIcon sx={{ fontSize: { xs: 11, sm: 13 } }} />} label="738" />
                                </Box>

                                {/* TITLE */}
                                <Typography
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: "1.2rem", sm: "1.5rem", md: "1.75rem", lg: "2rem", xl: "2.25rem" },
                                        lineHeight: 1.3,
                                        color: "#111827",
                                        mb: 3,
                                        width: "100%",
                                        textAlign: "start",
                                    }}
                                >
                                    How artist collective Meow Wolf's website complements their
                                    immersive venues
                                </Typography>

                                {/* AUTHOR + SOCIAL */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-between",
                                        flexWrap: "wrap",
                                        gap: 2,
                                        mb: 4,
                                    }}
                                >
                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                        <Avatar
                                            src="https://i.pravatar.cc/36?img=12"
                                            sx={{ width: { xs: 30, sm: 36 }, height: { xs: 30, sm: 36 } }}
                                        />
                                        <Typography sx={{ fontSize: { xs: 13, sm: 14 }, fontWeight: 500, color: "#374151" }}>
                                            Cameron Williamson
                                        </Typography>
                                    </Box>

                                    {/* Social icons — removed hardcoded marginRight */}
                                    <Box sx={{ display: "flex", gap: { xs: 0.5, sm: 1 } }}>
                                        <Circle icon={<WhatsAppIcon />} bg="#25D366" />
                                        <Circle icon={<FacebookIcon />} bg="#1877F2" />
                                        <Circle icon={<TwitterIcon />} bg="#1DA1F2" />
                                        <Circle icon={<LinkedInIcon />} bg="#0A66C2" />
                                        <Circle icon={<PinterestIcon />} bg="#E60023" />
                                        <Circle icon={<LinkIcon />} bg="#6B7280" />
                                    </Box>
                                </Box>

                                {/* PARAGRAPHS */}
                                {[
                                    "Sed a laoreet erat, in vehicula erat. Vivamus a viverra ipsum. Aliquam erat volutpat. Praesent vitae orci blandit, semper felis ac, interdum lacus.",
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nunc urna, id lobortis elit dapibus et. Etiam ultrices leo justo, nec vehicula augue auctor et.",
                                    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia pariatur sapiente dolor aut sed quibusdam ipsum tenetur atque, excepturi neque veritatis magni. Voluptatem amet porro nesciunt non debitis repellat facere eos laborum cupiditate architecto ipsa dolores, adipisci quo iusto libero voluptate sint. Officia quidem tempora deleniti adipisci magni obcaecati illum!"
                                ].map((text, i) => (
                                    <Typography
                                        key={i}
                                        sx={{
                                            fontSize: { xs: 14, sm: 15, xl: 16 },
                                            color: "#4B5563",
                                            lineHeight: 1.9,
                                            mb: 3,
                                            // Preserve original 70% on desktop, full on mobile
                                            width: { xs: "100%", lg: "70%" },
                                        }}
                                    >
                                        {text}
                                    </Typography>
                                ))}

                                {/* QUOTE */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "flex-start",
                                        gap: 2,
                                        bgcolor: "#FFF7ED",
                                        borderLeft: `4px solid ${ORANGE}`,
                                        borderRadius: "0 6px 6px 0",
                                        px: { xs: 2, sm: 3 },
                                        py: 3,
                                        my: 4,
                                        // Preserve original ~69% on desktop, full on mobile
                                        width: { xs: "100%", lg: "69%" },
                                    }}
                                >
                                    <FormatQuoteIcon sx={{ color: ORANGE, fontSize: { xs: 32, sm: 40 }, flexShrink: 0 }} />
                                    <Typography sx={{ fontStyle: "italic", fontSize: { xs: 14, sm: 15 }, lineHeight: 1.8, color: "#374151" }}>
                                        Vintage meets vogue is the only way to describe this serif typeface.
                                    </Typography>
                                </Box>

                                {/* INLINE IMAGES */}
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={6}>
                                        <Box
                                            component="img"
                                            src={pic}
                                            alt="robot"
                                            sx={{
                                                width: "100%",
                                                height: { xs: 180, sm: 220, md: 280, lg: 320, xl: 380 },
                                                objectFit: "cover",
                                                borderRadius: "6px",
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box
                                            component="img"
                                            src={pic2}
                                            alt="phone"
                                            sx={{
                                                width: "100%",
                                                height: { xs: 180, sm: 220, md: 280, lg: 320, xl: 380 },
                                                objectFit: "cover",
                                                borderRadius: "6px",
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                {/* CAPTION */}
                                <Typography
                                    sx={{
                                        fontStyle: "italic",
                                        fontSize: { xs: 13, sm: 15 },
                                        lineHeight: 1.8,
                                        color: "#374151",
                                        width: "100%",
                                        mt: 2,
                                    }}
                                >
                                    Vintage meets vogue is the only way to describe this serif typeface.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quos voluptatum eos mollitia veritatis autem consectetur labore nam atque dolores!
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cupiditate odio voluptas asperiores? Illo dolores doloremque voluptas ea officiis! Hic illo voluptas iusto suscipit sint.
                                </Typography>

                                {/* ================= COMMENT FORM ================= */}
                                <Box sx={{ py: { xs: 4, md: 6 } }}>
                                    <Typography sx={{ fontSize: { xs: "22px", sm: "28px" }, fontWeight: 600, color: "#191C1F", mb: 4 }}>
                                        Leave a Commends
                                    </Typography>

                                    <Grid container spacing={2} sx={{ mb: 2 }}>
                                        <Grid item xs={12} sm={6}>
                                            <Typography sx={{ fontSize: "14px", color: "#191C1F", mb: 1 }}>Full Name</Typography>
                                            <TextField
                                                fullWidth
                                                value={fullName}
                                                onChange={(e) => setFullName(e.target.value)}
                                                variant="outlined"
                                                size="small"
                                                sx={inputStyle}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Typography sx={{ fontSize: "14px", color: "#191C1F", mb: 1 }}>Email Address</Typography>
                                            <TextField
                                                fullWidth
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                variant="outlined"
                                                size="small"
                                                sx={inputStyle}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Typography sx={{ fontSize: "14px", color: "#191C1F", mb: 1 }}>Descripi</Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        rows={5}
                                        placeholder="What's your thought about this blog..."
                                        value={comment}
                                        onChange={(e) => setComment(e.target.value)}
                                        sx={{ ...inputStyle, mb: 3 }}
                                    />

                                    <Button
                                        variant="contained"
                                        sx={{
                                            bgcolor: orange,
                                            textTransform: "uppercase",
                                            fontWeight: 700,
                                            fontSize: { xs: "12px", sm: "13px" },
                                            px: { xs: 3, sm: 4 },
                                            py: 1.4,
                                            borderRadius: "2px",
                                            boxShadow: "none",
                                            mb: 6,
                                            "&:hover": { bgcolor: "#e9721e", boxShadow: "none" },
                                        }}
                                    >
                                        Post Commends
                                    </Button>

                                    {/* COMMENTS TITLE */}
                                    <Typography sx={{ fontSize: { xs: "22px", sm: "28px" }, fontWeight: 600, color: "#191C1F", mb: 4 }}>
                                        Commends
                                    </Typography>

                                    {/* COMMENTS LIST */}
                                    {commentsData.map((item, index) => (
                                        <Box key={index}>
                                            <Box sx={{ display: "flex", gap: { xs: 1.5, sm: 2 }, alignItems: "flex-start", py: 2 }}>
                                                <Avatar
                                                    src={item.image}
                                                    alt={item.name}
                                                    sx={{ width: { xs: 38, sm: 48 }, height: { xs: 38, sm: 48 }, flexShrink: 0 }}
                                                />
                                                <Box sx={{ flex: 1 }}>
                                                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap", mb: 1 }}>
                                                        <Typography sx={{ fontSize: { xs: "14px", sm: "15px" }, fontWeight: 600, color: "#191C1F" }}>
                                                            {item.name}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: { xs: "12px", sm: "13px" }, color: "#77878F" }}>
                                                            • {item.date}
                                                        </Typography>
                                                    </Box>
                                                    <Typography sx={{ fontSize: { xs: "13px", sm: "14px" }, lineHeight: 1.7, color: "#5F6C72" }}>
                                                        {item.text}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            {index !== commentsData.length - 1 && <Divider sx={{ borderColor: "#E4E7E9" }} />}
                                        </Box>
                                    ))}

                                    {/* LOAD MORE */}
                                    <Box sx={{ mt: 4 }}>
                                        <Link
                                            href="#"
                                            underline="none"
                                            sx={{
                                                display: "inline-flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                border: "1px solid #FFE7D6",
                                                color: orange,
                                                px: 3,
                                                py: 1.4,
                                                fontSize: { xs: "13px", sm: "14px" },
                                                fontWeight: 700,
                                                textTransform: "uppercase",
                                                transition: "0.3s",
                                                "&:hover": { bgcolor: "#FFF3EB" },
                                            }}
                                        >
                                            ↻ Load More
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* ================= RIGHT SIDEBAR ================= */}
                            {/* On mobile (xs/sm): renders below content naturally
                                On tablet (md): two-column with content
                                On desktop (lg+): 4-col sidebar beside 8-col content */}
                            <Grid item xs={12} md={5} lg={4}>
                                <Box sx={{ width: "100%" }}>

                                    {/* SEARCH */}
                                    <Box sx={{ border: "1px solid #E4E7E9", borderRadius: "4px", p: { xs: 2, sm: 3, lg: 4 }, mb: { xs: 2, lg: 4 } }}>
                                        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", lg: "20px" }, fontWeight: 500, color: "#191C1F", mb: 2 }}>
                                            SEARCH
                                        </Typography>
                                        <TextField
                                            fullWidth
                                            size="small"
                                            placeholder="Search..."
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <SearchIcon sx={{ fontSize: { xs: 18, sm: 22 } }} />
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Box>

                                    {/* CATEGORY */}
                                    <Box sx={{ border: "1px solid #E4E7E9", borderRadius: "4px", p: { xs: 2, sm: 2 }, mb: 2 }}>
                                        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", lg: "20px" }, fontWeight: 500, color: "#191C1F", mb: 1.5 }}>
                                            CATEGORY
                                        </Typography>
                                        <RadioGroup value={cat} onChange={(e) => setCat(e.target.value)}>
                                            {categories.map((item, index) => (
                                                <FormControlLabel
                                                    key={index}
                                                    value={item}
                                                    control={<Radio sx={{ color: "#ADB7BC", "&.Mui-checked": { color: ORANGE } }} />}
                                                    label={item}
                                                    sx={{
                                                        mb: -0.5,
                                                        "& .MuiTypography-root": {
                                                            fontSize: { xs: "14px", sm: "16px", lg: "18px" },
                                                            color: "#475156",
                                                        },
                                                    }}
                                                />
                                            ))}
                                        </RadioGroup>
                                    </Box>

                                    {/* LATEST BLOG */}
                                    <Box sx={{ border: "1px solid #E4E7E9", borderRadius: "4px", p: 2, mb: 2 }}>
                                        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", lg: "20px" }, fontWeight: 500, color: "#191C1F", mb: 2 }}>
                                            LATEST BLOG
                                        </Typography>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 2, lg: 3 } }}>
                                            {blogs.map((blog, index) => (
                                                <Box key={index} sx={{ display: "flex", gap: 1.5 }}>
                                                    <Box
                                                        component="img"
                                                        src={blog.image}
                                                        alt="blog"
                                                        sx={{
                                                            width: { xs: 60, sm: 70 },
                                                            height: { xs: 60, sm: 70 },
                                                            objectFit: "cover",
                                                            borderRadius: "4px",
                                                            flexShrink: 0,
                                                        }}
                                                    />
                                                    <Box>
                                                        <Typography sx={{ fontSize: { xs: 13, sm: 15 }, fontWeight: 500, lineHeight: "18px", color: "#191C1F", mb: 0.5 }}>
                                                            {blog.title}
                                                        </Typography>
                                                        <Typography sx={{ fontSize: { xs: 13, sm: 15 }, color: "#77878F" }}>
                                                            {blog.date}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                            ))}
                                        </Box>
                                    </Box>

                                    {/* GALLERY */}
                                    <Box sx={{ border: "1px solid #E4E7E9", borderRadius: "4px", p: { xs: 2, sm: 3 }, mb: 2 }}>
                                        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", lg: "19px" }, fontWeight: 500, color: "#191C1F", mb: 2 }}>
                                            GALLERY
                                        </Typography>
                                        <Grid container spacing={1}>
                                            {galleryImages.map((img, index) => (
                                                <Grid item xs={3} key={index}>
                                                    <Box
                                                        component="img"
                                                        src={img}
                                                        alt="gallery"
                                                        sx={{
                                                            width: "100%",
                                                            height: { xs: 48, sm: 56, xl: 64 },
                                                            objectFit: "cover",
                                                            borderRadius: "4px",
                                                        }}
                                                    />
                                                </Grid>
                                            ))}
                                        </Grid>
                                    </Box>

                                    {/* POPULAR TAG */}
                                    <Box>
                                        <Typography sx={{ fontSize: { xs: "16px", sm: "18px", lg: "20px" }, fontWeight: 500, color: "#191C1F", mb: 2 }}>
                                            POPULAR TAG
                                        </Typography>
                                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                                            {tags.map((tag, index) => (
                                                <Button
                                                    key={index}
                                                    variant={tag === "Graphics Card" ? "contained" : "outlined"}
                                                    sx={{
                                                        textTransform: "none",
                                                        fontSize: { xs: "13px", sm: "15px" },
                                                        borderRadius: "2px",
                                                        minWidth: "unset",
                                                        padding: { xs: "4px 8px", sm: "5px 10px" },
                                                        boxShadow: "none",
                                                        transition: "0.3s ease",
                                                        borderColor: tag === "Graphics Card" ? ORANGE : "#E4E7E9",
                                                        backgroundColor: tag === "Graphics Card" ? "#FFF3EB" : "#fff",
                                                        color: tag === "Graphics Card" ? ORANGE : "#191C1F",
                                                        "&:hover": {
                                                            backgroundColor: ORANGE,
                                                            color: "#fff",
                                                            borderColor: ORANGE,
                                                            transform: "translateY(-2px)",
                                                            boxShadow: "0px 4px 12px rgba(250,130,50,0.25)",
                                                        },
                                                    }}
                                                >
                                                    {tag}
                                                </Button>
                                            ))}
                                        </Box>
                                    </Box>

                                </Box>
                            </Grid>

                        </Grid>
                    </Container>
                </Box>
            </ThemeProvider>
            <Footer />
        </>
    );
}

// ================= INPUT STYLE =================
const inputStyle = {
    "& .MuiOutlinedInput-root": {
        borderRadius: "2px",
        "& fieldset": { borderColor: "#E4E7E9" },
        "&:hover fieldset": { borderColor: "#FA8232" },
        "&.Mui-focused fieldset": { borderColor: "#FA8232" },
    },
    "& .MuiInputBase-input": {
        fontSize: "14px",
        color: "#191C1F",
    },
};
