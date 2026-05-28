import { useState } from "react";
import {
  Box, Grid, Typography, Slider, TextField, FormControlLabel,
  Checkbox, Radio, RadioGroup, Chip, Card, CardMedia, CardContent,
  IconButton, Rating, Divider, InputAdornment, Select, MenuItem,
  Pagination, Button, Breadcrumbs, Link,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// ─── Data ────────────────────────────────────────────────────────────────────

const categories = [
  { label: "Electronics Devices", active: true },
  { label: "Computer & Laptop" },
  { label: "Computer Accessories" },
  { label: "SmartPhone" },
  { label: "Headphone" },
  { label: "Mobile Accessories" },
  { label: "Gaming Console" },
  { label: "Camera & Photo" },
  { label: "TV & Homes Appliances" },
  { label: "Watches & Accessories" },
  { label: "GPS & Navigation" },
  { label: "Warable Technology" },
];

const priceRanges = [
  "All Price", "Under $20", "$25 to $100", "$100 to $300",
  "$300 to $500", "$500 to $1,000", "$1,000 to $10,000",
];

const brands = [
  { name: "Apple", checked: true }, { name: "Google", checked: true },
  { name: "Microsoft", checked: false }, { name: "Samsung", checked: false },
  { name: "Dell", checked: false }, { name: "HP", checked: true },
  { name: "Symphony", checked: false }, { name: "Xiaomi", checked: false },
  { name: "Sony", checked: false }, { name: "Panasonic", checked: true },
  { name: "LG", checked: true }, { name: "Intel", checked: false },
  { name: "One Plus", checked: false },
];

const tags = [
  "Game", "iPhone", "TV", "Asus Laptops",
  "Macbook", "SSD", "Graphics Card",
  "Power Bank", "Smart TV", "Speaker",
  "Tablet", "Microwave", "Samsung",
];

const makeProducts = () => [
  { id: 1,  name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",  price: 70,   originalPrice: null,  rating: 4.5, reviews: 738,  badge: "HOT",        badgeColor: "#E53935", image: "/images/p1.jpg" },
  { id: 2,  name: "Samsung Electronics Samsung Galaxy S21 5G",            price: 2300, originalPrice: null,  rating: 5,   reviews: 536,  badge: "BEST DEALS", badgeColor: "#1976D2", image: "/images/p2.jpg" },
  { id: 3,  name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/8...",price: 360,  originalPrice: null,  rating: 5,   reviews: 423,  badge: null,                                image: "/images/p3.jpg" },
  { id: 4,  name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",price: 80,  originalPrice: null,  rating: 3.5, reviews: 816,  badge: null,                                image: "/images/p4.jpg" },
  { id: 5,  name: "Wired Over-Ear Gaming Headphones with USB",            price: 1500, originalPrice: null,  rating: 4,   reviews: 647,  badge: null,                                image: "/images/p5.jpg" },
  { id: 6,  name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...", price: 1200, originalPrice: 1600, rating: 3.5, reviews: 877, badge: "25% OFF", badgeColor: "#F5A623", image: "/images/p6.jpg" },
  { id: 7,  name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: 250,  originalPrice: null,  rating: 5,   reviews: 426,  badge: null,                                image: "/images/p7.jpg" },
  { id: 8,  name: "4K UHD LED Smart TV with Chromecast Built-in",        price: 220,  originalPrice: null,  rating: 5,   reviews: 583,  badge: "SALE",       badgeColor: "#4CAF50", image: "/images/p8.jpg" },
  { id: 9,  name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",price: 360, originalPrice: null,  rating: 3.5, reviews: 994,  badge: "BEST DEALS", badgeColor: "#1976D2", image: "/images/p9.jpg" },
  { id: 10, name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",price: 80, originalPrice: null,  rating: 5,   reviews: 798,  badge: null,                                image: "/images/p10.jpg" },
  { id: 11, name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...", price: 70,   originalPrice: null,  rating: 5,   reviews: 600,  badge: "HOT",        badgeColor: "#E53935", image: "/images/p11.jpg" },
  { id: 12, name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor", price: 250, originalPrice: null,  rating: 5,   reviews: 492,  badge: null,                                image: "/images/p12.jpg" },
  { id: 13, name: "Samsung Electronics Samsung Galaxy S21 5G",            price: 2300, originalPrice: null, rating: 4.5, reviews: 740,  badge: null,                                image: "/images/p13.jpg" },
  { id: 14, name: "4K UHD LED Smart TV with Chromecast Built-in",        price: 220,  originalPrice: null,  rating: 4.5, reviews: 558,  badge: null,                                image: "/images/p14.jpg" },
  { id: 15, name: "Wired Over-Ear Gaming Headphones with USB",            price: 1500, originalPrice: null, rating: 4,   reviews: 536,  badge: null,                                image: "/images/p15.jpg" },
  { id: 16, name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",price: 80, originalPrice: null,  rating: 3.5, reviews: 816,  badge: null,                                image: "/images/p16.jpg" },
  { id: 17, name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...", price: 70,   originalPrice: 75,    rating: 5,   reviews: 738,  badge: "HOT",        badgeColor: "#E53935", image: "/images/p17.jpg" },
  { id: 18, name: "Samsung Electronics Samsung Galaxy S21 5G",            price: 2300, originalPrice: null, rating: 5,   reviews: 536,  badge: "BEST DEALS", badgeColor: "#1976D2", image: "/images/p18.jpg" },
  { id: 19, name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",price: 360, originalPrice: null,  rating: 5,   reviews: 423,  badge: null,                                image: "/images/p19.jpg" },
  { id: 20, name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",price: 80, originalPrice: null,  rating: 3.5, reviews: 816,  badge: null,                                image: "/images/p20.jpg" },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function BadgeLabel({ label, color }) {
  if (!label) return null;
  return (
    <Box sx={{
      position: "absolute", top: 8, left: 8, zIndex: 2,
      backgroundColor: color, color: "#fff",
      fontSize: "10px", fontWeight: 700,
      px: "6px", py: "2px", borderRadius: "3px", letterSpacing: "0.4px",
    }}>
      {label}
    </Box>
  );
}

function ProductCard({ product }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Card
      elevation={0}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{
        border: hovered ? "1.5px solid #2196f3" : "1.5px solid #e8e8e8",
        borderRadius: "8px", position: "relative", cursor: "pointer",
        transition: "border 0.2s, box-shadow 0.2s",
        boxShadow: hovered ? "0 4px 16px rgba(33,150,243,0.12)" : "none",
        height: "100%", display: "flex", flexDirection: "column",
      }}
    >
      <BadgeLabel label={product.badge} color={product.badgeColor} />

      {/* Hover action icons */}
      {hovered && (
        <Box sx={{
          position: "absolute", top: "38%", left: "50%",
          transform: "translate(-50%,-50%)",
          display: "flex", gap: 0.8, zIndex: 3,
        }}>
          {[FavoriteBorderIcon, ShoppingCartOutlinedIcon, RemoveRedEyeOutlinedIcon].map((Icon, i) => (
            <IconButton key={i} size="small" sx={{
              bgcolor: "#fff", border: "1px solid #e0e0e0", width: 32, height: 32,
              "&:hover": { bgcolor: "#2196f3", color: "#fff" }, transition: "all 0.2s",
            }}>
              <Icon sx={{ fontSize: 15 }} />
            </IconButton>
          ))}
        </Box>
      )}

      <Box sx={{
        height: 150, display: "flex", alignItems: "center", justifyContent: "center",
        bgcolor: "#f7f8fa", borderRadius: "8px 8px 0 0", overflow: "hidden",
      }}>
        <CardMedia
          component="img" image={product.image} alt={product.name}
          sx={{ maxHeight: 120, maxWidth: "75%", objectFit: "contain",
            filter: hovered ? "opacity(0.45)" : "none", transition: "filter 0.2s" }}
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </Box>

      <CardContent sx={{ pt: 1.2, pb: "10px !important", px: 1.5, flexGrow: 1 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 0.4 }}>
          <Rating value={product.rating} precision={0.5} size="small" readOnly sx={{ fontSize: "13px" }} />
          <Typography variant="caption" color="text.secondary" sx={{ fontSize: "11px" }}>
            ({product.reviews})
          </Typography>
        </Box>
        <Typography sx={{
          fontSize: "12.5px", color: "#222", mb: 0.6, lineHeight: 1.45,
          display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {product.name}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Typography sx={{ color: "#2196f3", fontWeight: 700, fontSize: "14px" }}>
            ${product.price.toLocaleString()}
          </Typography>
          {product.originalPrice && (
            <Typography sx={{ color: "#aaa", textDecoration: "line-through", fontSize: "11.5px" }}>
              ${product.originalPrice.toLocaleString()}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function ShopPage() {
  const [priceRange, setPriceRange] = useState([100, 400]);
  const [selectedPrice, setSelectedPrice] = useState("$300 to $500");
  const [brandState, setBrandState] = useState(
    Object.fromEntries(brands.map((b) => [b.name, b.checked]))
  );
  const [selectedTag, setSelectedTag] = useState("Graphics Card");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [page, setPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState(["Electronics Devices", "5 Star Rating"]);
  const [searchVal, setSearchVal] = useState("");

  const products = makeProducts();

  const removeFilter = (f) => setActiveFilters((prev) => prev.filter((x) => x !== f));

  return (
    <Box sx={{ bgcolor: "#fff", fontFamily: "'Nunito', 'Segoe UI', sans-serif" }}>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: "#f4f5f7", px: { xs: 2, md: 4 }, py: 1.2, borderBottom: "1px solid #e8e8e8" }}>
        <Breadcrumbs separator="›" sx={{ fontSize: "13px" }}>
          <Link underline="hover" color="inherit" href="#" sx={{ display: "flex", alignItems: "center", gap: 0.3, fontSize: "13px" }}>
            <HomeIcon sx={{ fontSize: 14 }} /> Home
          </Link>
          <Link underline="hover" color="inherit" href="#" sx={{ fontSize: "13px" }}>Shop</Link>
          <Link underline="hover" color="inherit" href="#" sx={{ fontSize: "13px" }}>Shop Grid</Link>
          <Typography sx={{ fontSize: "13px", color: "#2196f3", fontWeight: 600 }}>Electronics Devices</Typography>
        </Breadcrumbs>
      </Box>

      {/* ── Body ── */}
      <Box sx={{ display: "flex", px: { xs: 1, sm: 2, md: 3 }, py: 2.5, gap: { xs: 0, md: 2.5 }, alignItems: "flex-start" }}>

        {/* ════ SIDEBAR ════ */}
        <Box sx={{
          width: { xs: "100%", md: 230 }, minWidth: { md: 230 },
          flexShrink: 0, display: { xs: "none", md: "flex" }, flexDirection: "column", gap: 0,
        }}>

          {/* Category */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "13px", letterSpacing: "0.6px", mb: 1.2, color: "#111" }}>
              CATEGORY
            </Typography>
            <RadioGroup value={categories.find(c => c.active)?.label}>
              {categories.map((c) => (
                <FormControlLabel
                  key={c.label} value={c.label}
                  control={<Radio size="small" sx={{
                    py: 0.25, color: "#ccc",
                    "&.Mui-checked": { color: "#F5A623" },
                  }} />}
                  label={<Typography sx={{ fontSize: "12.5px", color: c.active ? "#111" : "#555" }}>{c.label}</Typography>}
                />
              ))}
            </RadioGroup>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Price Range */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "13px", letterSpacing: "0.6px", mb: 1.2, color: "#111" }}>
              PRICE RANGE
            </Typography>
            <Slider value={priceRange} onChange={(_, v) => setPriceRange(v)}
              min={0} max={1000}
              sx={{ color: "#F5A623", mb: 1, "& .MuiSlider-thumb": { width: 13, height: 13 } }}
            />
            <Box sx={{ display: "flex", gap: 1, mb: 1.2 }}>
              <TextField size="small" placeholder="Min price" value={priceRange[0]}
                onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                inputProps={{ style: { fontSize: 12, padding: "5px 8px" } }}
                sx={{ flex: 1 }}
              />
              <TextField size="small" placeholder="Max price" value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                inputProps={{ style: { fontSize: 12, padding: "5px 8px" } }}
                sx={{ flex: 1 }}
              />
            </Box>
            <RadioGroup value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
              {priceRanges.map((p) => (
                <FormControlLabel key={p} value={p}
                  control={<Radio size="small" sx={{ py: 0.25, color: "#ccc", "&.Mui-checked": { color: "#F5A623" } }} />}
                  label={<Typography sx={{ fontSize: "12.5px", color: "#555" }}>{p}</Typography>}
                />
              ))}
            </RadioGroup>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Popular Brands */}
          <Box sx={{ mb: 2 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "13px", letterSpacing: "0.6px", mb: 1.2, color: "#111" }}>
              POPULAR BRANDS
            </Typography>
            <Grid container>
              {brands.map((b) => (
                <Grid item xs={6} key={b.name}>
                  <FormControlLabel
                    control={<Checkbox checked={brandState[b.name]}
                      onChange={() => setBrandState(p => ({ ...p, [b.name]: !p[b.name] }))}
                      size="small" sx={{ py: 0.25, color: "#ccc", "&.Mui-checked": { color: "#F5A623" } }}
                    />}
                    label={<Typography sx={{ fontSize: "12px", color: "#555" }}>{b.name}</Typography>}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Popular Tags */}
          <Box sx={{ mb: 2.5 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "13px", letterSpacing: "0.6px", mb: 1.2, color: "#111" }}>
              POPULAR TAG
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
              {tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" onClick={() => setSelectedTag(tag)}
                  sx={{
                    fontSize: "11px", height: 26, borderRadius: "4px",
                    bgcolor: selectedTag === tag ? "#F5A623" : "#fff",
                    color: selectedTag === tag ? "#fff" : "#555",
                    border: selectedTag === tag ? "1px solid #F5A623" : "1px solid #ddd",
                    cursor: "pointer",
                    "&:hover": { bgcolor: selectedTag === tag ? "#e09000" : "#f0f0f0" },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Promo Card */}
          <Box sx={{
            border: "1.5px solid #e8e8e8", borderRadius: "10px", overflow: "hidden",
            bgcolor: "#0a0a0a", color: "#fff", p: 2, textAlign: "center",
          }}>
            <Box sx={{
              height: 120, display: "flex", alignItems: "center", justifyContent: "center",
              mb: 1.5,
            }}>
              <Box component="img" src="/images/promo-watch.jpg" alt="Apple Watch"
                sx={{ maxHeight: 110, maxWidth: "100%", objectFit: "contain" }}
                onError={(e) => {
                  e.target.parentNode.innerHTML = `<div style="color:#888;font-size:12px;text-align:center">📱 Product Image</div>`;
                }}
              />
            </Box>
            <Typography sx={{ fontSize: "16px", fontWeight: 800, letterSpacing: "-0.3px", mb: 0.3 }}>
              ● WATCH
            </Typography>
            <Typography sx={{ fontSize: "10px", color: "#aaa", letterSpacing: "2px", mb: 0.8 }}>
              SERIES 7
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 0.3 }}>
              Heavy on Features.
            </Typography>
            <Typography sx={{ fontSize: "13px", fontWeight: 600, mb: 1.2 }}>
              Light on Price.
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#aaa", mb: 0.5 }}>Only for:</Typography>
            <Box sx={{
              display: "inline-block", bgcolor: "#F5A623", color: "#fff",
              fontSize: "13px", fontWeight: 700, px: 2, py: 0.4, borderRadius: "4px", mb: 1.5,
            }}>
              $299 USD
            </Box>
            <Button fullWidth startIcon={<AddShoppingCartIcon sx={{ fontSize: 14 }} />}
              sx={{
                bgcolor: "#F5A623", color: "#fff", fontSize: "11px", fontWeight: 700,
                py: 0.8, borderRadius: "5px", mb: 0.8, textTransform: "none",
                "&:hover": { bgcolor: "#e09000" },
              }}
            >
              ADD TO CART
            </Button>
            <Button fullWidth endIcon={<ArrowForwardIcon sx={{ fontSize: 13 }} />}
              variant="outlined"
              sx={{
                borderColor: "#F5A623", color: "#F5A623", fontSize: "11px", fontWeight: 700,
                py: 0.8, borderRadius: "5px", textTransform: "none",
                "&:hover": { bgcolor: "rgba(245,166,35,0.08)" },
              }}
            >
              VIEW DETAILS
            </Button>
          </Box>
        </Box>

        {/* ════ MAIN CONTENT ════ */}
        <Box sx={{ flex: 1, minWidth: 0 }}>

          {/* Search + Sort Bar */}
          <Box sx={{ display: "flex", gap: 2, mb: 1.8, alignItems: "center", flexWrap: "wrap" }}>
            <TextField
              placeholder="Search for anything..."
              value={searchVal}
              onChange={(e) => setSearchVal(e.target.value)}
              size="small"
              sx={{ flex: 1, minWidth: 180 }}
              InputProps={{
                startAdornment: null,
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ fontSize: 18, color: "#888" }} />
                  </InputAdornment>
                ),
                style: { fontSize: "13px" },
              }}
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
              <Typography sx={{ fontSize: "13px", color: "#555", whiteSpace: "nowrap" }}>Sort by:</Typography>
              <Select value={sortBy} onChange={(e) => setSortBy(e.target.value)} size="small"
                sx={{ fontSize: "13px", minWidth: 140, ".MuiSelect-select": { py: "6px" } }}
              >
                {["Most Popular", "Newest", "Price: Low to High", "Price: High to Low"].map(o => (
                  <MenuItem key={o} value={o} sx={{ fontSize: "13px" }}>{o}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>

          {/* Active Filters */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2, flexWrap: "wrap" }}>
            <Typography sx={{ fontSize: "12.5px", color: "#555", fontWeight: 600, mr: 0.5 }}>
              Active Filters:
            </Typography>
            {activeFilters.map((f) => (
              <Chip key={f} label={f} size="small"
                onDelete={() => removeFilter(f)}
                deleteIcon={<CloseIcon sx={{ fontSize: "13px !important" }} />}
                sx={{
                  bgcolor: "#fff", border: "1px solid #ddd", fontSize: "11.5px",
                  height: 26, borderRadius: "4px",
                  "& .MuiChip-deleteIcon": { color: "#888" },
                }}
              />
            ))}
            <Typography sx={{ fontSize: "12px", color: "#888", ml: "auto", whiteSpace: "nowrap" }}>
              <strong style={{ color: "#111" }}>65,867</strong> Results found.
            </Typography>
          </Box>

          {/* Product Grid */}
          <Grid container spacing={1.8}>
            {products.map((product) => (
              <Grid item xs={6} sm={4} md={3} key={product.id}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>

          {/* Pagination */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4, mb: 1 }}>
            <Pagination
              count={6} page={page} onChange={(_, v) => setPage(v)}
              shape="rounded"
              sx={{
                "& .MuiPaginationItem-root": {
                  fontSize: "13px", borderRadius: "6px",
                  border: "1px solid #e0e0e0", color: "#444",
                  "&.Mui-selected": {
                    bgcolor: "#F5A623", color: "#fff", border: "1px solid #F5A623",
                    "&:hover": { bgcolor: "#e09000" },
                  },
                  "&:hover": { bgcolor: "#f5f5f5" },
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
