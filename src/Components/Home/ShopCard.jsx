import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  TextField,
  Divider,
} from "@mui/material";

import { Link } from 'react-router-dom';

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Navbar from "../../Components/Home/Navbar";
import Footer from '../../Components/Home/Black_Footer_2'

// Images
import TvImg from "../../assets/tv.png";
import HeadphoneImg from "../../assets/headphone.png";

const initialProducts = [
  {
    id: 1,
    image: TvImg,
    name: "4K UHD Led Smart TV with Chromecast Built-in",
    oldPrice: "$99",
    price: 70,
    quantity: 1,
  },

  {
    id: 2,
    image: HeadphoneImg,
    name: "Wired Over-Ear Gaming Headphones with USB",
    price: 250,
    quantity: 3,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  const increaseQty = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setProducts((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const discount = 24;
  const tax = 61.99;

  const total = subtotal - discount + tax;

  return (
    <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
      <Navbar />

      {/* Breadcrumb */}
      <Box
        sx={{
          bgcolor: "#FFFFFF",
          borderBottom: "1px solid #E4E7E9",

          px: {
            xs: 2,
            sm: 4,
            md: 8,
            lg: 14,
          },

          py: 2,
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
            sx={{
              fontSize: 16,
              color: "#5F6C72",
            }}
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
            Shopping Card
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          mt: 7,

          display: "flex",

          flexDirection: {
            xs: "column",
            lg: "row",
          },

          gap: 3,
          alignItems: "flex-start",
          mb: 10,

          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
        }}
      >
        {/* LEFT SECTION */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            bgcolor: "#FFFFFF",
            border: "1px solid #E4E7E9",
            overflowX: "auto",
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontSize: {
                xs: "18px",
                md: "22px",
              },

              fontWeight: 600,
              px: 3,
              py: 2,
            }}
          >
            Shopping Card
          </Typography>

          {/* Table Header */}
          <Box
            sx={{
              display: {
                xs: "none",
                md: "grid",
              },

              gridTemplateColumns:
                "2.8fr 1fr 1.4fr 1fr",

              px: 3,
              py: 1.5,
              bgcolor: "#F2F4F5",
              borderTop: "1px solid #E4E7E9",
              borderBottom: "1px solid #E4E7E9",
              minWidth: "850px",
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
              QUANTITY
            </Typography>

            <Typography
              sx={{
                fontSize: "11px",
                color: "#5F6C72",
                fontWeight: 500,
              }}
            >
              SUB-TOTAL
            </Typography>
          </Box>

          {/* Products */}
          {products.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: {
                  xs: "flex",
                  md: "grid",
                },

                flexDirection: "column",

                gridTemplateColumns:
                  "2.8fr 1fr 1.4fr 1fr",

                alignItems: {
                  xs: "flex-start",
                  md: "center",
                },

                gap: {
                  xs: 2,
                  md: 0,
                },

                px: 3,
                py: 3,
                borderBottom: "1px solid #E4E7E9",

                minWidth: {
                  md: "850px",
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
                <IconButton
                  onClick={() => removeItem(item.id)}
                  sx={{
                    width: 22,
                    height: 22,
                    border: "1px solid #EE5858",
                    flexShrink: 0,
                  }}
                >
                  <CloseIcon
                    sx={{
                      fontSize: 14,
                      color: "#EE5858",
                    }}
                  />
                </IconButton>

                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: {
                      xs: 60,
                      sm: 70,
                    },

                    height: {
                      xs: 60,
                      sm: 70,
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
                    },

                    color: "#191C1F",
                    lineHeight: 1.5,

                    maxWidth: {
                      xs: "100%",
                      md: "240px",
                    },
                  }}
                >
                  {item.name}
                </Typography>
              </Box>

              {/* Price */}
              <Box>
                <Typography
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                    },

                    fontSize: "11px",
                    color: "#5F6C72",
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  PRICE
                </Typography>

                {item.oldPrice && (
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#929FA5",
                      textDecoration: "line-through",
                      display: "inline",
                      mr: 1,
                    }}
                  >
                    {item.oldPrice}
                  </Typography>
                )}

                <Typography
                  sx={{
                    fontSize: "15px",
                    display: "inline",
                  }}
                >
                  ${item.price}
                </Typography>
              </Box>

              {/* Quantity */}
              <Box>
                <Typography
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                    },

                    fontSize: "11px",
                    color: "#5F6C72",
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  QUANTITY
                </Typography>

                <Box
                  sx={{
                    width: 120,
                    height: 48,
                    border: "1px solid #E4E7E9",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    px: 1,
                  }}
                >
                  <IconButton
                    onClick={() =>
                      decreaseQty(item.id)
                    }
                  >
                    <RemoveIcon
                      sx={{
                        fontSize: 18,
                        color: "#5F6C72",
                      }}
                    />
                  </IconButton>

                  <Typography
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    {String(item.quantity).padStart(2, "0")}
                  </Typography>

                  <IconButton
                    onClick={() =>
                      increaseQty(item.id)
                    }
                  >
                    <AddIcon
                      sx={{
                        fontSize: 18,
                        color: "#191C1F",
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>

              {/* Subtotal */}
              <Box>
                <Typography
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                    },

                    fontSize: "11px",
                    color: "#5F6C72",
                    fontWeight: 600,
                    mb: 0.5,
                  }}
                >
                  SUB-TOTAL
                </Typography>

                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  $
                  {(
                    item.price * item.quantity
                  ).toFixed(0)}
                </Typography>
              </Box>
            </Box>
          ))}

          {/* Buttons */}
          <Box
            sx={{
              display: "flex",

              flexDirection: {
                xs: "column",
                sm: "row",
              },

              justifyContent: "space-between",

              gap: 2,

              p: 3,
            }}
          >
            <Button
              component={Link}
              to="/"
              variant="outlined"
              startIcon={<ArrowBackIcon />}
              sx={{
                borderColor: "#2DA5F3",
                color: "#2DA5F3",
                fontWeight: 600,
                fontSize: "13px",

                width: {
                  xs: "100%",
                  sm: "auto",
                },

                px: 3,
                py: 1.4,
                borderRadius: 0,
              }}
            >
              RETURN TO SHOP
            </Button>

            <Button
              variant="outlined"
              sx={{
                borderColor: "#2DA5F3",
                color: "#2DA5F3",
                fontWeight: 600,
                fontSize: "13px",

                width: {
                  xs: "100%",
                  sm: "auto",
                },

                px: 3,
                py: 1.4,
                borderRadius: 0,
              }}
            >
              UPDATE CART
            </Button>
          </Box>
        </Box>

        {/* RIGHT SECTION */}
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: 330,
            },

            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {/* Cart Totals */}
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              border: "1px solid #E4E7E9",
              p: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "20px",
                  md: "24px",
                },

                fontWeight: 600,
                mb: 3,
              }}
            >
              Card Totals
            </Typography>

            {/* Totals */}
            {[
              {
                label: "Sub-total",
                value: `$${subtotal}`,
              },

              {
                label: "Shipping",
                value: "Free",
              },

              {
                label: "Discount",
                value: `$${discount}`,
              },

              {
                label: "Tax",
                value: `$${tax}`,
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  mb: 2,
                }}
              >
                <Typography
                  sx={{
                    color: "#5F6C72",
                    fontSize: "15px",
                  }}
                >
                  {item.label}
                </Typography>

                <Typography
                  sx={{
                    fontSize: "15px",
                    color: "#191C1F",
                  }}
                >
                  {item.value}
                </Typography>
              </Box>
            ))}

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                display: "flex",
                justifyContent:
                  "space-between",
                mb: 3,
                gap: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    md: "20px",
                  },

                  fontWeight: 600,
                }}
              >
                Total
              </Typography>

              <Typography
                sx={{
                  fontSize: {
                    xs: "18px",
                    md: "20px",
                  },

                  fontWeight: 700,
                  textAlign: "right",
                }}
              >
                ${total.toFixed(2)} USD
              </Typography>
            </Box>

            {/* Checkout Button */}
            <Button
              fullWidth
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                bgcolor: "#FA8232",
                color: "#fff",
                height: 56,
                fontSize: "14px",
                fontWeight: 700,
                borderRadius: 0,

                "&:hover": {
                  bgcolor: "#FA8232",
                },
              }}
            >
              PROCEED TO CHECKOUT
            </Button>
          </Box>

          {/* Coupon */}
          <Box
            sx={{
              bgcolor: "#FFFFFF",
              border: "1px solid #E4E7E9",
            }}
          >
            <Typography
              sx={{
                fontSize: {
                  xs: "18px",
                  md: "20px",
                },

                fontWeight: 600,
                px: 3,
                py: 2,
                borderBottom:
                  "1px solid #E4E7E9",
              }}
            >
              Coupon Code
            </Typography>

            <Box sx={{ p: 3 }}>
              <TextField
                fullWidth
                placeholder="Email address"
                size="small"
                sx={{
                  mb: 2,
                }}
              />

              <Button
                variant="contained"
                sx={{
                  bgcolor: "#2DA5F3",
                  color: "#fff",
                  height: 48,

                  width: {
                    xs: "100%",
                    sm: "auto",
                  },

                  px: 3,
                  borderRadius: 0,
                  fontWeight: 600,

                  "&:hover": {
                    bgcolor: "#2DA5F3",
                  },
                }}
              >
                APPLY COUPON
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}