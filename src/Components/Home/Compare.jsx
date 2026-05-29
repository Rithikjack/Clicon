import { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Rating,
  Divider,
  Stack,
} from "@mui/material";
import Navbar from '../../Components/Home/Navbar'
import Footer from '../Home/Black_Footer_2'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import KeyboardImg from '../../assets/AC.png'
import ImacImg from '../../assets/Bluetooth 2.png'
import SamsungImg from '../../assets/Bluetooth 3.png'

const products = [
  {
    id: 1,
    image: KeyboardImg,
    name: "Gamdias ARES M2 Gaming Keyboard, Mouse and Mouse Mat Combo",
    rating: 4.5,
    reviewCount: "51,746,385",
    price: "$899.00",
    soldBy: "Clicon",
    brand: "StarTech",
    model: "ARES M2 and ZEUS E2",
    stock: "IN STOCK",
    size: "6.71 inches, 110.5 cm",
    weight: "650 g (7.41 oz)",
  },
  {
    id: 2,
    image: ImacImg,
    name: 'Apple iMac 24" 4K Retina Display M1 8 Core CPU',
    rating: 4.5,
    reviewCount: "673,971,743",
    price: "$1,699.00",
    soldBy: "Apple",
    brand: "Apple",
    model: 'Apple iMac 24" M1 Blue 2021',
    stock: "IN STOCK",
    size: "6.7 inches, 109.8 cm",
    weight: "240 g (8.47 oz)",
  },
  {
    id: 3,
    image: SamsungImg,
    name: "Samsung Galaxy S21 FE 5G Cell Phone",
    rating: 4.5,
    reviewCount: "96,459,761",
    price: "$699.99",
    soldBy: "Clicon",
    brand: "Samsung",
    model: "S21 FE",
    stock: "OUT OF STOCK",
    size: "6.4 inches, 98.9 cm",
    weight: "177 g (6.24 oz)",
  },
];


const theme = createTheme({
  palette: {
    primary: { main: "#F07800" },
    success: { main: "#2e7d32" },
    error: { main: "#d32f2f" },

    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },

    text: {
      primary: "#222222",
      secondary: "#666666",
    },
  },

  typography: {
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",

    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          fontWeight: 700,
          fontSize: "0.82rem",
          paddingTop: 9,
          paddingBottom: 9,
        },
      },
    },
  },
});


const rows = [
  { label: "Customer feedback:", key: "rating" },
  { label: "Price:", key: "price" },
  { label: "Sold by:", key: "soldBy" },
  { label: "Brand:", key: "brand" },
  { label: "Model:", key: "model" },
  { label: "Stock status:", key: "stock" },
  { label: "Size:", key: "size" },
  { label: "Weight:", key: "weight" },
];

export default function ProductComparison() {
  const [dismissed, setDismissed] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const visibleProducts = products.filter((p) => !dismissed.includes(p.id));

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const renderCell = (product, key) => {
    if (key === "rating") {
      return (
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Rating value={product.rating} precision={0.5} readOnly size="small" sx={{ color: "#F07800" }} />
          <Typography variant="caption" color="text.secondary">
            ({product.reviewCount})
          </Typography>
        </Stack>
      );
    }
    if (key === "price") {
      return (
        <Typography fontWeight={700} color="primary" fontSize="0.95rem">
          {product.price}
        </Typography>
      );
    }
    if (key === "stock") {
      return (
        <Typography
          fontWeight={700}
          fontSize="0.82rem"
          color={product.stock === "IN STOCK" ? "success.main" : "error.main"}
        >
          {product.stock}
        </Typography>
      );
    }
    return (
      <Typography fontSize="0.85rem" color="text.primary">
        {product[key]}
      </Typography>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box
        sx={{
          bgcolor: "background.default",
          minHeight: "100vh",
          p: {
            xs: 1,
            sm: 2,
            md: 3,
          },
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1040,
            mx: "auto",
            bgcolor: "background.paper",
            borderRadius: 2,
            overflowX: "auto",
            overflowY: "hidden",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
          }}
        >
          <Box
            sx={{
              display: "grid",
              minWidth: {
                xs: "900px",
                sm: "950px",
                md: "100%",
              },
              gridTemplateColumns: {
                xs: `170px repeat(${visibleProducts.length}, 260px)`,
                sm: `190px repeat(${visibleProducts.length}, 280px)`,
                md: `200px repeat(${visibleProducts.length}, 1fr)`,
              },
            }}
          >
            {/* Header row */}
            <Box sx={{ bgcolor: "background.paper" }} />

            {visibleProducts.map((product) => (
              <Box
                key={product.id}
                sx={{
                  borderLeft: "1px solid #ebebeb",
                  p: {
                    xs: 1.5,
                    sm: 2,
                  },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                }}
              >
                {/* Close Button */}
                <IconButton
                  size="small"
                  onClick={() => setDismissed((d) => [...d, product.id])}
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    border: "1.5px solid #ccc",
                    width: 26,
                    height: 26,
                  }}
                >
                  <CloseIcon sx={{ fontSize: 14 }} />
                </IconButton>

                {/* Product Image */}
                <Box
                  component="img"
                  src={product.image}
                  alt={product.name}
                  sx={{
                    width: {
                      xs: 110,
                      sm: 130,
                      md: 160,
                    },
                    height: {
                      xs: 90,
                      sm: 110,
                      md: 130,
                    },
                    objectFit: "contain",
                    mb: 1.5,
                    mt: 1,
                  }}
                />

                {/* Product Name */}
                <Typography
                  variant="body2"
                  fontWeight={500}
                  textAlign="center"
                  sx={{
                    mb: 2,
                    minHeight: {
                      xs: 70,
                      sm: 65,
                      md: 56,
                    },
                    lineHeight: 1.4,
                    fontSize: {
                      xs: "0.75rem",
                      sm: "0.8rem",
                      md: "0.83rem",
                    },
                  }}
                >
                  {product.name}
                </Typography>

                {/* Buttons */}
                <Stack
                  direction="row"
                  spacing={1}
                  alignItems="center"
                  width="100%"
                >
                  <Button
                    variant="contained"
                    fullWidth
                    disabled={product.stock === "OUT OF STOCK"}
                    startIcon={<ShoppingCartIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      bgcolor:
                        product.stock === "OUT OF STOCK"
                          ? "#ccc"
                          : "primary.main",

                      color: "#fff",

                      "&:hover": {
                        bgcolor:
                          product.stock === "OUT OF STOCK"
                            ? "#ccc"
                            : "#d96800",
                      },

                      "&.Mui-disabled": {
                        bgcolor: "#d5d5d5",
                        color: "#999",
                      },

                      fontSize: {
                        xs: "0.68rem",
                        sm: "0.72rem",
                        md: "0.75rem",
                      },

                      height: {
                        xs: 34,
                        sm: 36,
                        md: 38,
                      },

                      whiteSpace: "nowrap",
                    }}
                  >
                    ADD TO CARD
                  </Button>

                  <IconButton
                    size="small"
                    onClick={() => toggleWishlist(product.id)}
                    sx={{
                      border: "1.5px solid #e0e0e0",
                      borderRadius: 1,
                      width: 36,
                      height: 36,
                      flexShrink: 0,
                    }}
                  >
                    {wishlist.includes(product.id) ? (
                      <FavoriteIcon
                        sx={{
                          fontSize: 18,
                          color: "primary.main",
                        }}
                      />
                    ) : (
                      <FavoriteBorderIcon
                        sx={{
                          fontSize: 18,
                          color: "#aaa",
                        }}
                      />
                    )}
                  </IconButton>
                </Stack>
              </Box>
            ))}

            {/* Data Rows */}
            {rows.map((row, rowIdx) => (
              <>
                {/* Label */}
                <Box
                  key={`label-${row.key}`}
                  sx={{
                    bgcolor: rowIdx % 2 === 0 ? "#f8f8f8" : "#fff",
                    borderTop: "1px solid #ebebeb",
                    display: "flex",
                    alignItems: "center",
                    px: 2,
                    py: 1.2,
                  }}
                >
                  <Typography
                    fontSize={{
                      xs: "0.72rem",
                      sm: "0.78rem",
                      md: "0.83rem",
                    }}
                    color="text.secondary"
                  >
                    {row.label}
                  </Typography>
                </Box>

                {/* Values */}
                {visibleProducts.map((product) => (
                  <Box
                    key={`${product.id}-${row.key}`}
                    sx={{
                      bgcolor: rowIdx % 2 === 0 ? "#f8f8f8" : "#fff",
                      borderLeft: "1px solid #ebebeb",
                      borderTop: "1px solid #ebebeb",
                      display: "flex",
                      alignItems: "center",
                      px: 2,
                      py: 1.2,
                    }}
                  >
                    {row.key === "rating" ? (
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={0.5}
                      >
                        <Rating
                          value={product.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                          sx={{ color: "#F07800" }}
                        />

                        <Typography
                          variant="caption"
                          color="text.secondary"
                        >
                          ({product.reviewCount})
                        </Typography>
                      </Stack>
                    ) : row.key === "price" ? (
                      <Typography
                        fontWeight={700}
                        color="primary"
                        fontSize={{
                          xs: "0.8rem",
                          sm: "0.88rem",
                          md: "0.95rem",
                        }}
                      >
                        {product.price}
                      </Typography>
                    ) : row.key === "stock" ? (
                      <Typography
                        fontWeight={700}
                        fontSize={{
                          xs: "0.72rem",
                          sm: "0.78rem",
                          md: "0.82rem",
                        }}
                        color={
                          product.stock === "IN STOCK"
                            ? "success.main"
                            : "error.main"
                        }
                      >
                        {product.stock}
                      </Typography>
                    ) : (
                      <Typography
                        fontSize={{
                          xs: "0.74rem",
                          sm: "0.8rem",
                          md: "0.85rem",
                        }}
                        color="text.primary"
                      >
                        {product[row.key]}
                      </Typography>
                    )}
                  </Box>
                ))}
              </>
            ))}
          </Box>

          {visibleProducts.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography color="text.secondary">
                All products removed from comparison.
              </Typography>

              <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => setDismissed([])}
              >
                Reset
              </Button>
            </Box>
          )}
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
