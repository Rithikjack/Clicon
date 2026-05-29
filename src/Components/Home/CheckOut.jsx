import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Button,
  Divider,
  Radio,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@mui/material";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Navbar from './Navbar'
import Footer from './Black_Footer_2'

// Images
import CameraImg from "../../assets/tv.png";
import HeadphoneImg from "../../assets/headphone.png";

const countries = ["India", "USA", "UK"];
const states = ["Tamil Nadu", "Kerala", "Karnataka"];
const cities = ["Chennai", "Coimbatore", "Madurai"];

export default function CheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    country: "",
    state: "",
    city: "",
    zip: "",
    email: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
    notes: "",
    payment: "card",
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validation
  const validate = () => {
    let temp = {};

    if (!formData.firstName)
      temp.firstName = "First name required";

    if (!formData.lastName)
      temp.lastName = "Last name required";

    if (!formData.address)
      temp.address = "Address required";

    if (!formData.country)
      temp.country = "Select country";

    if (!formData.state)
      temp.state = "Select state";

    if (!formData.city)
      temp.city = "Select city";

    if (!formData.email)
      temp.email = "Email required";

    if (
      formData.email &&
      !/\S+@\S+\.\S+/.test(formData.email)
    ) {
      temp.email = "Invalid email";
    }

    if (!formData.phone)
      temp.phone = "Phone required";

    if (!formData.cardName)
      temp.cardName = "Card holder name required";

    if (!formData.cardNumber)
      temp.cardNumber = "Card number required";

    if (!formData.expiry)
      temp.expiry = "Expiry required";

    if (!formData.cvc)
      temp.cvc = "CVC required";

    setErrors(temp);

    return Object.keys(temp).length === 0;
  };

  // Submit
  const handleSubmit = () => {
    if (validate()) {
      alert("Order Placed Successfully");
    }
  };

  return (
    <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
        <Navbar />
      {/* Breadcrumb */}
      <Box
        sx={{
          bgcolor: "#fff",
          borderBottom: "1px solid #E4E7E9",
          px: { xs: 2, sm: 5, md: 15 },
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
              fontSize: 13,
              color: "#5F6C72",
            }}
          >
            Home
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "#5F6C72",
            }}
          >
            Shopping Card
          </Typography>

          <Typography
            sx={{
              fontSize: 13,
              color: "#2DA5F3",
              fontWeight: 500,
            }}
          >
            Checkout
          </Typography>
        </Box>
      </Box>

      {/* Main Layout */}
      <Box
        sx={{
          maxWidth: "1180px",
          mx: "auto",
          mt: 6,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 4,
          alignItems: "flex-start",
          px: { xs: 2, sm: 3, md: 4, lg: 0 },
        }}
      >
        {/* LEFT SIDE */}
        <Box sx={{ flex: 1, width: "100%" }}>
          {/* Billing Information */}
          <Typography
            sx={{
              fontSize: { xs: 18, md: 22 },
              fontWeight: 600,
              mb: 3,
            }}
          >
            Billing Information
          </Typography>

          <Grid container spacing={2}>
           {/* First Name */}
<Grid
  item
  xs={12}
  sm={6}
  md={4}
>
  <Typography
    sx={{
      ...labelStyle,
      mb: 1,
      fontSize: {
        xs: "13px",
        sm: "14px",
      },
    }}
  >
    User name
  </Typography>

  <TextField
    fullWidth
    placeholder="First name"
    name="firstName"
    value={formData.firstName}
    onChange={handleChange}
    error={!!errors.firstName}
    helperText={errors.firstName}
    size="small"
  />
</Grid>

{/* Last Name */}
<Grid
  item
  xs={12}
  sm={6}
  md={4}
>
  <Typography
    sx={{
      ...labelStyle,
      mb: 1,
      visibility: {
        xs: "hidden",
        sm: "hidden",
        md: "visible",
      },
    }}
  >
    Name
  </Typography>

  <TextField
    fullWidth
    placeholder="Last name"
    name="lastName"
    value={formData.lastName}
    onChange={handleChange}
    error={!!errors.lastName}
    helperText={errors.lastName}
    size="small"
  />
</Grid>

{/* Company */}
<Grid
  item
  xs={12}
  sm={12}
  md={4}
>
  <Typography
    sx={{
      ...labelStyle,
      mb: 1,
      fontSize: {
        xs: "13px",
        sm: "14px",
      },
    }}
  >
    Company Name
    <span
      style={{
        color: "#929FA5",
      }}
    >
      {" "}
      (Optional)
    </span>
  </Typography>

  <TextField
    fullWidth
    name="company"
    value={formData.company}
    onChange={handleChange}
    size="small"
  />
</Grid>

            {/* Address */}
            <Grid item xs={12} sx={{ width: { xs: "100%", md: 700 } }}>
              <Typography sx={labelStyle}>
                Address
              </Typography>

              <TextField
                fullWidth
                name="address"
                value={formData.address}
                onChange={handleChange}
                error={!!errors.address}
                helperText={errors.address}
                size="small"
              />
            </Grid>

            {/* Country */}
            <Grid item xs={6} sm={3} sx={{ width: { xs: "100%", sm: 160 } }}>
              <Typography sx={labelStyle}>
                Country
              </Typography>

              <TextField
                select
                fullWidth
                size="small"
                name="country"
                value={formData.country}
                onChange={handleChange}
                error={!!errors.country}
                helperText={errors.country}
              >
                {countries.map((item) => (
                  <MenuItem
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* State */}
            <Grid item xs={6} sm={3} sx={{ width: { xs: "100%", sm: 160 } }}>
              <Typography sx={labelStyle}>
                Region/State
              </Typography>

              <TextField
                select
                fullWidth
                size="small"
                name="state"
                value={formData.state}
                onChange={handleChange}
                error={!!errors.state}
                helperText={errors.state}
              >
                {states.map((item) => (
                  <MenuItem
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* City */}
            <Grid item xs={6} sm={3} sx={{ width: { xs: "100%", sm: 165 } }}>
              <Typography sx={labelStyle}>
                City
              </Typography>

              <TextField
                select
                fullWidth
                size="small"
                name="city"
                value={formData.city}
                onChange={handleChange}
                error={!!errors.city}
                helperText={errors.city}
              >
                {cities.map((item) => (
                  <MenuItem
                    key={item}
                    value={item}
                  >
                    {item}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            {/* Zip */}
            <Grid item xs={6} sm={3} sx={{ width: { xs: "100%", sm: 165 } }}>
              <Typography sx={labelStyle}>
                Zip Code
              </Typography>

              <TextField
                fullWidth
                size="small"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6} sx={{ width: { xs: "100%", sm: 340 } }}>
              <Typography sx={labelStyle}>
                Email
              </Typography>

              <TextField
                fullWidth
                size="small"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6} sx={{ width: { xs: "100%", sm: 340 } }}>
              <Typography sx={labelStyle}>
                Phone Number
              </Typography>

              <TextField
                fullWidth
                size="small"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
            </Grid>

            {/* Checkbox */}
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label={
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#5F6C72",
                    }}
                  >
                    Ship into different address
                  </Typography>
                }
              />
            </Grid>
          </Grid>

          {/* Payment Option */}
          <Box
            sx={{
              mt: 5,
              border: "1px solid #E4E7E9",
              bgcolor: "#fff",
            }}
          >
            <Typography
              sx={{
                px: 3,
                py: 2,
                fontSize: { xs: 16, md: 20 },
                fontWeight: 600,
                borderBottom:
                  "1px solid #E4E7E9",
              }}
            >
              Payment Option
            </Typography>

            {/* Payment Methods */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2, 1fr)",
                  sm: "repeat(3, 1fr)",
                  md: "repeat(5, 1fr)",
                },
                borderBottom:
                  "1px solid #E4E7E9",
              }}
            >
              {[
                "Cash on Delivery",
                "Venmo",
                "Paypal",
                "Amazon Pay",
                "Debit/Credit Card",
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    textAlign: "center",
                    py: 3,
                    borderRight:
                      index !== 4
                        ? "1px solid #E4E7E9"
                        : "none",
                    borderBottom: {
                      xs: "1px solid #E4E7E9",
                      md: "none",
                    },
                  }}
                >
                  <Radio
                    checked={
                      index === 4
                    }
                    sx={{
                      color: "#FA8232",
                      "&.Mui-checked": {
                        color: "#FA8232",
                      },
                    }}
                  />

                  <Typography
                    sx={{
                      fontSize: { xs: 12, md: 14 },
                      mt: 1,
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Card Details */}
            <Box sx={{ p: 3 }}>
              <Grid container spacing={2}>
              <Grid item xs={12} sx={{ width: { xs: "100%", md: 770 } }}>
                  <Typography sx={labelStyle}>
                    Name on Card
                  </Typography>

                  <TextField
                    fullWidth
                    size="small"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    error={!!errors.cardName}
                    helperText={errors.cardName}
                  />
                </Grid>

                <Grid item xs={12} sx={{ width: { xs: "100%", md: 770 } }}>
                  <Typography sx={labelStyle}>
                    Card Number
                  </Typography>

                  <TextField
                    fullWidth
                    size="small"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber}
                  />
                </Grid>

                <Grid item xs={12} sm={6} sx={{ width: { xs: "100%", md: 375 } }}>
                  <Typography sx={labelStyle}>
                    Expire Date
                  </Typography>

                  <TextField
                    fullWidth
                    size="small"
                    placeholder="DD/YY"
                    name="expiry"
                    value={formData.expiry}
                    onChange={handleChange}
                    error={!!errors.expiry}
                    helperText={errors.expiry}
                  />
                </Grid>

                <Grid item xs={12} sm={6} sx={{ width: { xs: "100%", md: 375 } }}>
                  <Typography sx={labelStyle}>
                    CVC
                  </Typography>

                  <TextField
                    fullWidth
                    size="small"
                    name="cvc"
                    value={formData.cvc}
                    onChange={handleChange}
                    error={!!errors.cvc}
                    helperText={errors.cvc}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>

          {/* Additional Info */}
          <Box sx={{ mt: 5, mb: 5 }}>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 22 },
                fontWeight: 600,
                mb: 2,
              }}
            >
              Additional Information
            </Typography>

            <Typography sx={labelStyle}>
              Order Notes
              <span
                style={{
                  color: "#929FA5",
                }}
              >
                {" "}
                (Optional)
              </span>
            </Typography>

            <TextField
              multiline
              rows={5}
              fullWidth
              placeholder="Notes about your order, e.g. special notes for delivery"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            />
          </Box>
        </Box>

        {/* RIGHT SIDE */}
        <Box
          sx={{
            width: { xs: "100%", lg: 330 },
            bgcolor: "#fff",
            border: "1px solid #E4E7E9",
            p: 3,
            mb:5,
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, md: 22 },
              fontWeight: 600,
              mb: 3,
            }}
          >
            Order Summary
          </Typography>

          {/* Product 1 */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              component="img"
              src={CameraImg}
              sx={{
                width: 60,
                height: 60,
                objectFit: "contain",
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                Canon EOS 1500D DSLR Camera
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#2DA5F3",
                  mt: 1,
                }}
              >
                1 x $70
              </Typography>
            </Box>
          </Box>

          {/* Product 2 */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              mb: 3,
            }}
          >
            <Box
              component="img"
              src={HeadphoneImg}
              sx={{
                width: 60,
                height: 60,
                objectFit: "contain",
              }}
            />

            <Box>
              <Typography
                sx={{
                  fontSize: 14,
                  lineHeight: 1.5,
                }}
              >
                Wired Over-Ear Gaming Headphones
              </Typography>

              <Typography
                sx={{
                  fontSize: 14,
                  color: "#2DA5F3",
                  mt: 1,
                }}
              >
                3 x $250
              </Typography>
            </Box>
          </Box>

          {/* Totals */}
          {[
            {
              label: "Sub-total",
              value: "$320",
            },

            {
              label: "Shipping",
              value: "Free",
            },

            {
              label: "Discount",
              value: "$24",
            },

            {
              label: "Tax",
              value: "$61.99",
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
                  fontSize: 15,
                }}
              >
                {item.label}
              </Typography>

              <Typography
                sx={{
                  fontSize: 15,
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
            }}
          >
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              Total
            </Typography>

            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              $357.99 USD
            </Typography>
          </Box>

          {/* Place Order Button */}
          <Button
            fullWidth
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            onClick={handleSubmit}
            sx={{
              bgcolor: "#FA8232",
              height: 54,
              fontWeight: 700,
              borderRadius: 0,

              "&:hover": {
                bgcolor: "#FA8232",
              },
            }}
          >
            PLACE ORDER
          </Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

// Label Style
const labelStyle = {
  fontSize: 14,
  color: "#191C1F",
  mb: 1,
};
