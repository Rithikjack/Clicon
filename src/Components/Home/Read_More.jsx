import { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardMedia,
  CardContent,
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  FormControl,
  Chip,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutlineOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// ─── Theme ────────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: {
    primary: { main: "#F5842A" },
    text: { primary: "#111827", secondary: "#6b7280" },
    background: { default: "#ffffff", paper: "#ffffff" },
  },
  typography: {
    fontFamily: "'Nunito', 'Segoe UI', sans-serif",
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
          border: "1px solid #eeeeee",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          backgroundColor: "#fff",
          fontSize: "0.875rem",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: "#d1d5db",
          "&.Mui-checked": { color: "#F5842A" },
          padding: "3px 8px 3px 4px",
        },
      },
    },
  },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
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

const latestBlogs = [
  {
    id: 1,
    image: "/assets/blog/latest-1.jpg",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    date: "28 Nov, 2015",
  },
  {
    id: 2,
    image: "/assets/blog/latest-2.jpg",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    date: "28 Nov, 2015",
  },
  {
    id: 3,
    image: "/assets/blog/latest-3.jpg",
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    date: "28 Nov, 2015",
  },
];

// 8 gallery images — replace with your local paths
const galleryImages = [
  "/assets/gallery/g1.jpg",
  "/assets/gallery/g2.jpg",
  "/assets/gallery/g3.jpg",
  "/assets/gallery/g4.jpg",
  "/assets/gallery/g5.jpg",
  "/assets/gallery/g6.jpg",
  "/assets/gallery/g7.jpg",
  "/assets/gallery/g8.jpg",
];

const popularTags = [
  "Game", "iPhone", "TV", "Asus Laptops",
  "Macbook", "SSD", "Graphics Card", "Speaker",
  "Tablet", "Microwave", "Samsung", "Power Bank",
];

const articles = [
  {
    id: 1,
    image: "/assets/articles/article-1.jpg",
    author: "Cameron",
    date: "1 Feb, 2020",
    comments: 738,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    excerpt:
      "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
  },
  {
    id: 2,
    image: "/assets/articles/article-2.jpg",
    author: "Floyd Miles",
    date: "17 Oct, 2020",
    comments: 826,
    title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    excerpt:
      "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
  },
  {
    id: 3,
    image: "/assets/articles/article-3.jpg",
    author: "Marvin McKinney",
    date: "8 Sep, 2020",
    comments: 738,
    title: "Curabitur pulvinar aliquam lectus, non blandit erat mattis vitae.",
    excerpt:
      "Mauris scelerisque odio id rutrum volutpat. Pellentesque urna odio, vulputate at tortor vitae, hendrerit blandit lorem.",
  },
  {
    id: 4,
    image: "/assets/articles/article-4.jpg",
    author: "Darlene",
    date: "24 May, 2020",
    comments: 826,
    title: "Curabitur massa orci, consectetur et blandit ac, auctor et tellus.",
    excerpt:
      "Pellentesque vestibulum lorem vel gravida aliquam. Morbi porta, odio id suscipit mattis, risus augue condimentum purus.",
  },
];

// ─── Sidebar Widget Box ───────────────────────────────────────────────────────
function SidebarBox({ title, children }) {
  return (
    <Box
      sx={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        p: "18px 20px",
        mb: "18px",
        bgcolor: "#fff",
      }}
    >
      {title && (
        <Typography
          sx={{
            fontWeight: 800,
            fontSize: "0.72rem",
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "#111827",
            mb: "14px",
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
}

// ─── Article Card ─────────────────────────────────────────────────────────────
function ArticleCard({ article }) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Image — local path set in article data */}
      <CardMedia
        component="img"
        image={article.image}
        alt={article.title}
        sx={{ height: 195, objectFit: "cover", display: "block" }}
      />
      <CardContent
        sx={{
          p: "16px 20px 20px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Meta row */}
        <Stack
          direction="row"
          flexWrap="wrap"
          sx={{ mb: "10px", gap: "12px" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <PersonOutlineIcon sx={{ fontSize: 14, color: "#F5842A" }} />
            <Typography sx={{ fontSize: "0.74rem", color: "#6b7280" }}>
              {article.author}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <CalendarTodayIcon sx={{ fontSize: 13, color: "#F5842A" }} />
            <Typography sx={{ fontSize: "0.74rem", color: "#6b7280" }}>
              {article.date}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <ChatBubbleOutlineIcon sx={{ fontSize: 13, color: "#F5842A" }} />
            <Typography sx={{ fontSize: "0.74rem", color: "#6b7280" }}>
              {article.comments}
            </Typography>
          </Box>
        </Stack>

        {/* Title */}
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: "0.97rem",
            color: "#111827",
            lineHeight: 1.42,
            mb: "10px",
          }}
        >
          {article.title}
        </Typography>

        {/* Excerpt */}
        <Typography
          sx={{
            fontSize: "0.8rem",
            color: "#6b7280",
            lineHeight: 1.72,
            mb: "18px",
            flex: 1,
          }}
        >
          {article.excerpt}
        </Typography>

        {/* Read More button */}
        <Box>
          <Button
            variant="outlined"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "13px !important" }} />}
            size="small"
            sx={{
              borderColor: "#F5842A",
              color: "#F5842A",
              fontWeight: 700,
              fontSize: "0.68rem",
              letterSpacing: "0.9px",
              textTransform: "uppercase",
              borderRadius: "4px",
              px: "14px",
              py: "6px",
              minWidth: 0,
              "&:hover": { bgcolor: "#fff8f3", borderColor: "#F5842A" },
            }}
          >
            Read More
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export default function BlogListingPage() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Popular");
  const [activeTag, setActiveTag] = useState("Graphics Card");

  return (
    
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bgcolor: "#ffffff",
          minHeight: "100vh",
          px: { xs: 2, sm: 3, md: 4 },
          py: { xs: 3, md: 4 },
        }}
      >
        {/* ── OUTER LAYOUT: sidebar (fixed ~240px) + content (flex 1) ── */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: 0, md: "24px" },
            alignItems: "flex-start",
            flexDirection: { xs: "column", md: "row" },
          }}
        >

          {/* ══ LEFT SIDEBAR ══ */}
          <Box
            sx={{
              width: { xs: "100%", md: "240px" },
              flexShrink: 0,
            }}
          >
            {/* Category */}
            <SidebarBox title="Category">
              <RadioGroup
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((cat) => (
                  <FormControlLabel
                    key={cat}
                    value={cat}
                    control={<Radio size="small" />}
                    label={
                      <Typography
                        sx={{ fontSize: "0.83rem", color: "#374151" }}
                      >
                        {cat}
                      </Typography>
                    }
                    sx={{ ml: 0, mb: "1px" }}
                  />
                ))}
              </RadioGroup>
            </SidebarBox>

            {/* Latest Blog */}
            <SidebarBox title="Latest Blog">
              {latestBlogs.map((blog) => (
                <Box
                  key={blog.id}
                  sx={{
                    display: "flex",
                    gap: "10px",
                    mb: "14px",
                    cursor: "pointer",
                    "&:last-child": { mb: 0 },
                  }}
                >
                  {/* Thumbnail — local path */}
                  <Box
                    component="img"
                    src={blog.image}
                    alt={blog.title}
                    sx={{
                      width: 62,
                      height: 50,
                      borderRadius: "5px",
                      objectFit: "cover",
                      flexShrink: 0,
                      bgcolor: "#e5e7eb",
                    }}
                  />
                  <Box>
                    <Typography
                      sx={{
                        fontSize: "0.77rem",
                        fontWeight: 600,
                        color: "#111827",
                        lineHeight: 1.38,
                        mb: "3px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {blog.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.7rem", color: "#9ca3af" }}>
                      {blog.date}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </SidebarBox>

            {/* Gallery */}
            <SidebarBox title="Gallery">
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: "5px",
                }}
              >
                {galleryImages.map((img, i) => (
                  <Box
                    key={i}
                    component="img"
                    src={img}
                    alt={`gallery-${i + 1}`}
                    sx={{
                      width: "100%",
                      aspectRatio: "1",
                      objectFit: "cover",
                      borderRadius: "4px",
                      bgcolor: "#e5e7eb",
                      cursor: "pointer",
                      transition: "opacity 0.15s",
                      "&:hover": { opacity: 0.8 },
                    }}
                  />
                ))}
              </Box>
            </SidebarBox>

            {/* Popular Tags */}
            <SidebarBox title="Popular Tag">
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {popularTags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    onClick={() => setActiveTag(tag)}
                    sx={{
                      borderRadius: "4px",
                      fontSize: "0.73rem",
                      fontWeight: 500,
                      height: 26,
                      border: "1px solid",
                      borderColor:
                        activeTag === tag ? "#F5842A" : "#d1d5db",
                      bgcolor: "transparent",
                      color: activeTag === tag ? "#F5842A" : "#374151",
                      "&:hover": {
                        bgcolor: "#fff8f3",
                        borderColor: "#F5842A",
                        color: "#F5842A",
                      },
                    }}
                  />
                ))}
              </Box>
            </SidebarBox>
          </Box>

          {/* ══ RIGHT CONTENT ══ */}
          <Box sx={{ flex: 1, minWidth: 0 }}>

            {/* Top bar: Search left, Sort right */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mb: "20px",
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              {/* Search input */}
              <TextField
                placeholder="Search..."
                variant="outlined"
                size="small"
                sx={{
                  flex: 1,
                  maxWidth: 400,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#e5e7eb" },
                    "&:hover fieldset": { borderColor: "#F5842A" },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon sx={{ fontSize: 17, color: "#9ca3af" }} />
                    </InputAdornment>
                  ),
                }}
              />

              {/* Sort by */}
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography
                  sx={{
                    fontSize: "0.83rem",
                    color: "#6b7280",
                    whiteSpace: "nowrap",
                  }}
                >
                  Sort by:
                </Typography>
                <FormControl size="small">
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    sx={{
                      fontSize: "0.83rem",
                      bgcolor: "#fff",
                      minWidth: 148,
                      borderRadius: "6px",
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#e5e7eb",
                      },
                    }}
                  >
                    <MenuItem value="Most Popular">Most Popular</MenuItem>
                    <MenuItem value="Newest">Newest</MenuItem>
                    <MenuItem value="Oldest">Oldest</MenuItem>
                    <MenuItem value="Most Comments">Most Comments</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>

            {/* Articles — 2-column grid */}
            <Grid container spacing={2.5}>
              {articles.map((article) => (
                <Grid item xs={12} sm={6} key={article.id}>
                  <ArticleCard article={article} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
