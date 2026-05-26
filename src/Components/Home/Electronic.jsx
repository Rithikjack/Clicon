import { useState } from "react";
import '../../Components/Home/Navbar'
import { Link } from 'react-router-dom';

import Footer from './Footer'

import {
  Box,
  Typography,
  Button,
  Rating,
  Select,
  MenuItem,
  IconButton,
  InputBase,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Grid,
  Container,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import Navbar from "../../Components/Home/Navbar";

const ORANGE = "#FF6B00";
const BLUE = "#0d6efd";

const categories = [
  "Electronics Devices",
  "Computer & Laptop",
  "Computer Accessories",
  "SmartPhone",
  "Headphone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
  "TV & Homes Appliances",
  "Watchs & Accessories",
  "GPS & Navigation",
  "Wearable Technology",
];

const products = [

  {
    id: 6,
    badge: null,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
    rating: 4,
    reviews: 344,
    name: "Dell XPS 15 Laptop, 15.6-inch OLED Touch Display...",
    price: "$1,799",
    link :'/Laps'
  },
  {
    id: 7,
    badge: { label: "BEST DEALS", color: BLUE },
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&auto=format",
    rating: 4,
    reviews: 290,
    name: "OnePlus 11 5G Smartphone, 16GB RAM, 256GB Storage...",
    price: "$699",
  },
  {
    id: 8,
    badge: null,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&auto=format",
    rating: 5,
    reviews: 501,
    name: "Sony Alpha ZV-E10 Mirrorless Camera with 16-50mm...",
    price: "$748",
  },

  {
    id: 6,
    badge: null,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
    rating: 4,
    reviews: 344,
    name: "Dell XPS 15 Laptop, 15.6-inch OLED Touch Display...",
    price: "$1,799",
  },
  {
    id: 7,
    badge: { label: "BEST DEALS", color: BLUE },
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&auto=format",
    rating: 4,
    reviews: 290,
    name: "OnePlus 11 5G Smartphone, 16GB RAM, 256GB Storage...",
    price: "$699",
  },
  {
    id: 8,
    badge: null,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&auto=format",
    rating: 5,
    reviews: 501,
    name: "Sony Alpha ZV-E10 Mirrorless Camera with 16-50mm...",
    price: "$748",
  },

  {
    id: 6,
    badge: null,
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&auto=format",
    rating: 4,
    reviews: 344,
    name: "Dell XPS 15 Laptop, 15.6-inch OLED Touch Display...",
    price: "$1,799",
  },
  {
    id: 7,
    badge: { label: "BEST DEALS", color: BLUE },
    img: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=300&fit=crop&auto=format",
    rating: 4,
    reviews: 290,
    name: "OnePlus 11 5G Smartphone, 16GB RAM, 256GB Storage...",
    price: "$699",
  },
  {
    id: 8,
    badge: null,
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop&auto=format",
    rating: 5,
    reviews: 501,
    name: "Sony Alpha ZV-E10 Mirrorless Camera with 16-50mm...",
    price: "$748",
  },
];

function Electronic({ product }) {
  const [hovered, setHovered] = useState(false);

return (
  <Link to={product.link || "/"} style={{ textDecoration: "none" }}>
    <Box
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          bgcolor: "white",
          border: `1.5px solid ${hovered ? ORANGE : "#e8e8e8"}`,
          borderRadius: "8px",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          transform: hovered ? "translateY(-5px)" : "translateY(0px)",
          boxShadow: hovered
            ? "0 16px 40px rgba(255,107,0,0.13), 0 4px 16px rgba(0,0,0,0.07)"
            : "0 1px 4px rgba(0,0,0,0.05)",
          transition: "all 0.28s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        {/* Badge */}
        {product.badge && (
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              zIndex: 3,
              bgcolor: product.badge.color,
              color: "white",
              fontSize: "11px",
              fontWeight: 800,
              px: "8px",
              py: "2px",
              borderRadius: "4px",
              letterSpacing: "0.5px",
            }}
          >
            {product.badge.label}
          </Box>
        )}

        {/* Hover Action Icons */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            opacity: hovered ? 1 : 0,
            transform: hovered ? "translateX(0px)" : "translateX(10px)",
            transition: "all 0.25s ease",
          }}
        >
          {[
            { icon: <FavoriteBorderIcon sx={{ fontSize: 15 }} />, label: "Wishlist" },
            { icon: <CompareArrowsIcon sx={{ fontSize: 15 }} />, label: "Compare" },
            { icon: <VisibilityIcon sx={{ fontSize: 15 }} />, label: "Quick View" },
          ].map((btn, i) => (
            <IconButton
              key={i}
              size="small"
              title={btn.label}
              sx={{
                width: 30,
                height: 30,
                bgcolor: "white",
                border: "1px solid #e0e0e0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                color: "#555",
                "&:hover": {
                  bgcolor: ORANGE,
                  color: "white",
                  borderColor: ORANGE,
                },
                transition: "all 0.18s ease",
              }}
            >
              {btn.icon}
            </IconButton>
          ))}
        </Box>

        {/* Image — fixed height, object-fit cover, zoom on hover */}
        <Box
          sx={{
            width: "100%",
            height: "200px",
            bgcolor: "#f6f7f8",
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
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              transform: hovered ? "scale(1.06)" : "scale(1)",
              transition: "transform 0.38s ease",
            }}
          />
        </Box>

        {/* Card Body */}
        <Box sx={{ px: "14px", pt: "12px", pb: "14px" }}>
          {/* Stars */}
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px", mb: "6px" }}>
            <Rating
              value={product.rating}
              precision={0.5}
              readOnly
              size="small"
              sx={{ fontSize: "16px", color: "#f5a623" }}
            />
            <Typography sx={{ fontSize: "12px", color: "#999" }}>
              ({product.reviews})
            </Typography>
          </Box>

          {/* Name */}
          <Typography
            sx={{
              fontSize: "13.5px",
              fontWeight: 500,
              color: "#1a1a1a",
              lineHeight: 1.4,
              mb: "8px",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: "38px",
            }}
          >
            {product.name}
          </Typography>

          {/* Price */}
          <Typography
            sx={{ fontSize: "16px", fontWeight: 700, color: ORANGE }}
          >
            {product.price}
          </Typography>

          {/* Add to Cart slides up on hover */}
          <Box
            sx={{
              maxHeight: hovered ? "48px" : "0px",
              opacity: hovered ? 1 : 0,
              overflow: "hidden",
              transition: "max-height 0.28s ease, opacity 0.22s ease, margin 0.22s ease",
              mt: hovered ? "10px" : 0,
            }}
          >
            <Button
              fullWidth
              startIcon={<ShoppingCartIcon sx={{ fontSize: 16 }} />}
              sx={{
                bgcolor: ORANGE,
                color: "white",
                textTransform: "none",
                fontWeight: 700,
                fontSize: "13px",
                borderRadius: "6px",
                py: "7px",
                "&:hover": { bgcolor: "#e05a00" },
              }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
</Link>

);
}

export default function ShopGrid() {
  const [activeCategory, setActiveCategory] = useState("Electronics Devices");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState(["Electronics Devices", "5 Star Rating"]);

  const removeFilter = (f) => setFilters(filters.filter((x) => x !== f));

  return (

      <Box sx={{ bgcolor: "#f7f8fa", minHeight: "100vh", fontFamily: "'Segoe UI', sans-serif" }}>

        {/* Blue accent line */}
        <Box sx={{ height: "3px", bgcolor: BLUE }} />

        {/* ── Navbar ── */}

        <Box
          sx={{
            bgcolor: "white",
            px: "40px",
            py: "10px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.07)",
          }}
        >
          <Button
            endIcon={<KeyboardArrowDownIcon sx={{ fontSize: 18 }} />}
            variant="outlined"
            sx={{
              color: "#333",
              borderColor: "#d0d0d0",
              borderRadius: "6px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "14px",
              px: "14px",
              py: "6px",
              whiteSpace: "nowrap",
              "&:hover": { borderColor: ORANGE, color: ORANGE },
            }}
          >
            All Category
          </Button>

          <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
            {[
              { icon: <TrackChangesIcon sx={{ fontSize: 17 }} />, label: "Track Order" },
              { icon: <CompareArrowsIcon sx={{ fontSize: 17 }} />, label: "Compare" },
              { icon: <HeadsetMicIcon sx={{ fontSize: 17 }} />, label: "Customer Support" },
              { icon: <InfoOutlinedIcon sx={{ fontSize: 17 }} />, label: "Need Help" },
            ].map((nav) => (
              <Button
                key={nav.label}
                startIcon={nav.icon}
                sx={{
                  color: "#444",
                  textTransform: "none",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  px: "10px",
                  "&:hover": { color: ORANGE, bgcolor: "transparent" },
                }}
              >
                {nav.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <PhoneIcon sx={{ fontSize: 18, color: ORANGE }} />
            <Typography sx={{ fontSize: "14px", fontWeight: 700, color: "#1a1a1a" }}>
              +1-202-555-0104
            </Typography>
          </Box>
        </Box>

        {/* ── Breadcrumb ── */}
        <Box
          sx={{
            bgcolor: "#f0f1f3",
            px: "40px",
            py: "10px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          <HomeOutlinedIcon sx={{ fontSize: 16, color: "#666" }} />
          <Typography sx={{ fontSize: "13px", color: "#666", cursor: "pointer", "&:hover": { color: ORANGE } }}>Home</Typography>
          <NavigateNextIcon sx={{ fontSize: 16, color: "#aaa" }} />
          <Typography sx={{ fontSize: "13px", color: "#666", cursor: "pointer", "&:hover": { color: ORANGE } }}>Shop</Typography>
          <NavigateNextIcon sx={{ fontSize: 16, color: "#aaa" }} />
          <Typography sx={{ fontSize: "13px", color: "#666", cursor: "pointer", "&:hover": { color: ORANGE } }}>Shop Grid</Typography>
          <NavigateNextIcon sx={{ fontSize: 16, color: "#aaa" }} />
          <Typography sx={{ fontSize: "13px", color: BLUE, fontWeight: 600 }}>Electronics Devices</Typography>
        </Box>

        {/* ── Main Layout ── */}
        <Box
          sx={{
            display: "flex",
            gap: "28px",
            px: "40px",
            py: "28px",
            maxWidth: "1400px",
            mx: "auto",
          }}
        >
          {/* ── Sidebar ── */}
          <Box sx={{ width: "210px", flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "1px",
                color: "#1a1a1a",
                textTransform: "uppercase",
                mb: "14px",
              }}
            >
              Category
            </Typography>

            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <RadioGroup
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <FormControlLabel
                    key={cat}
                    value={cat}
                    sx={{ mx: 0, mb: "2px" }}
                    control={
                      <Radio
                        size="small"
                        sx={{
                          py: "5px",
                          color: "#ccc",
                          "&.Mui-checked": { color: ORANGE },
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontSize: "13.5px",
                          fontWeight: activeCategory === cat ? 700 : 400,
                          color: activeCategory === cat ? "#111" : "#555",
                        }}
                      >
                        {cat}
                      </Typography>
                    }
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>

          {/* ── Right Column ── */}
          <Box sx={{ flex: 1, minWidth: 0 }}>

            {/* Search + Sort */}
            <Box sx={{ display: "flex", alignItems: "center", gap: "12px", mb: "12px" }}>
              <Box
                sx={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "white",
                  border: "1.5px solid #e0e0e0",
                  borderRadius: "6px",
                  px: "12px",
                  height: "42px",
                  "&:focus-within": { borderColor: ORANGE },
                  transition: "border-color 0.2s",
                }}
              >
                <InputBase
                  placeholder="Search for anything..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{ flex: 1, fontSize: "14px" }}
                />
                <SearchIcon sx={{ color: "#aaa", fontSize: "20px" }} />
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
                <Typography sx={{ fontSize: "13.5px", color: "#555", whiteSpace: "nowrap" }}>
                  Sort by:
                </Typography>
                <Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  size="small"
                  sx={{
                    fontSize: "13.5px",
                    minWidth: "155px",
                    borderRadius: "6px",
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#e0e0e0" },
                    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: ORANGE },
                  }}
                >
                  {["Most Popular", "Newest First", "Price: Low to High", "Price: High to Low", "Top Rated"].map((o) => (
                    <MenuItem key={o} value={o} sx={{ fontSize: "13.5px" }}>
                      {o}
                    </MenuItem>
                  ))}
                </Select>
              </Box>
            </Box>

            {/* Active Filters Bar */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                bgcolor: "white",
                border: "1.5px solid #ebebeb",
                borderRadius: "6px",
                px: "16px",
                py: "8px",
                mb: "20px",
              }}
            >
              <Typography sx={{ fontSize: "13px", color: "#999", fontWeight: 500, whiteSpace: "nowrap" }}>
                Active Filters:
              </Typography>

              {filters.map((f) => (
                <Box
                  key={f}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    px: "8px",
                    py: "3px",
                    bgcolor: "#fafafa",
                  }}
                >
                  <Typography sx={{ fontSize: "13px", fontWeight: 600, color: "#333" }}>
                    {f}
                  </Typography>
                  <CloseIcon
                    onClick={() => removeFilter(f)}
                    sx={{
                      fontSize: "14px",
                      color: "#888",
                      cursor: "pointer",
                      "&:hover": { color: "#f44336" },
                    }}
                  />
                </Box>
              ))}

              <Typography sx={{ fontSize: "13.5px", fontWeight: 700, color: "#1a1a1a", ml: "auto", whiteSpace: "nowrap" }}>
                65,867{" "}
                <Box component="span" sx={{ fontWeight: 400, color: "#888" }}>
                  Results found.
                </Box>
              </Typography>
            </Box>

            {/* Product Grid */}
            <Grid
              container
              spacing={2}
              alignItems="stretch"
            >
              {products.map((product) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  key={product.id}
                  sx={{
                    display: "flex",
                  }}
                >
                  <Box sx={{ width: "100%", display: "flex" }}>
                    <Electronic product={product} />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
<Footer />
      </Box>
  );
}
