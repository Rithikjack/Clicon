import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Switch,
  Rating,
  Link,
} from "@mui/material";

import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import Green from "../../assets/Green.png";
import Vivo from "../../assets/Vivo.png";
import White from "../../assets/AC.png";
import Head from "../../assets/hearphone.png";
import Head2 from "../../assets/Bluetooth 3.png";
import Blue from "../../assets/Bluetooth.png";
import Web from "../../assets/Home Cam.png";
import Print from "../../assets/Printer.png";
import Cell from '../../assets/Phone.png'

export default function BrowsingHistory() {
  const [historyEnabled, setHistoryEnabled] = React.useState(true);

  const historyProducts = [
    { id: 1, image: Green, badge: "HOT", badgeColor: "#EE5858", title: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...", price: "$70", reviews: 738 },
    { id: 2, image: Vivo, title: "Samsung Galaxy S21 5G", price: "$2,300", reviews: 536 },
    { id: 3, image: White, badge: "BEST DEALS", badgeColor: "#2DA5F3", title: "Amazon Basics HDMI Cable 4K", price: "$360", reviews: 423 },
    { id: 4, image: Head, title: "Portable Washing Machine Model 18NMF", price: "$80", reviews: 816 },
    { id: 5, image: Head2, title: "Portable Washing Machine Model 18NMF", price: "$89", reviews: 816 },
    { id: 6, image: Head, title: "Portable Washing Machine Model 18NMF", price: "$70", reviews: 816 },
    { id: 7, image: Blue, title: "Portable Washing Machine Model 18NMF", price: "$80", reviews: 816 },
    { id: 8, image: Head, title: "Portable Washing Machine Model 18NMF", price: "$80", reviews: 816 },
    { id: 9, image: Print, title: "Portable Washing Machine Model 18NMF", price: "$80", reviews: 816 },
    { id: 10, image: Web, title: "Portable Washing Machine Model 18NMF", price: "$80", reviews: 816 },
    { id: 11, image: Head, title: "Portable Washing Machine Model 18NMF", price: "$80", reviews: 816 },
    {
      id: 12,
      image: Cell, // change this to your new imported image
      title: "New Product Added Example Title",
      price: "$99",
      reviews: 120,
    }
  ];

  const sideLinks = [
    { icon: <LayersOutlinedIcon sx={{ fontSize: 18 }} />, text: "Dashboard", link: "/dashboard" },
    { icon: <Inventory2OutlinedIcon sx={{ fontSize: 18 }} />, text: "Order History", link: "/order-history" },
    { icon: <RoomOutlinedIcon sx={{ fontSize: 18 }} />, text: "Track Order", link: "/track-order" },
    { icon: <ShoppingCartOutlinedIcon sx={{ fontSize: 18 }} />, text: "Shopping Cart", link: "/cart" },
    { icon: <FavoriteBorderOutlinedIcon sx={{ fontSize: 18 }} />, text: "Wishlist", link: "/wishlist" },
    { icon: <CompareArrowsOutlinedIcon sx={{ fontSize: 18 }} />, text: "Compare", link: "/compare" },
    { icon: <CreditCardOutlinedIcon sx={{ fontSize: 18 }} />, text: "Cards & Address", link: "/cards-address" },
    { icon: <HistoryOutlinedIcon sx={{ fontSize: 18 }} />, text: "Browsing History", link: "/browsing-history" },
    { icon: <SettingsOutlinedIcon sx={{ fontSize: 18 }} />, text: "Setting", link: "/setting" },
    { icon: <LogoutOutlinedIcon sx={{ fontSize: 18 }} />, text: "Log-out", link: "/logout" },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        background: "#F7F7F7",
        px: { xs: 2, sm: 3, md: 5, lg: 8 },
        py: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
      }}
    >
      {/* SIDEBAR */}
      <Box
        sx={{
          width: { xs: "100%", md: "260px" },
          background: "#fff",
          border: "1px solid #E4E7E9",
          maxHeight: { xs: "auto", md: "67vh" },
          overflowY: "auto",
        }}
      >
        {sideLinks.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
              height: 48,
              px: 2,
              fontSize: 14,
              fontWeight: 500,
              color: "#5F6C72",
              "& .MuiSvgIcon-root": { color: "#5F6C72" },
              "&:hover": {
                background: "#FA8232",
                color: "#fff",
                "& .MuiSvgIcon-root": { color: "#fff" },
              },
            }}
          >
            {item.icon}
            {item.text}
          </Link>
        ))}
      </Box>

      {/* MAIN CONTENT */}
      <Box sx={{ flex: 1, minWidth: 0 }}>
        {/* HEADER */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            gap: 2,
            mb: 3,
          }}
        >
          <Typography sx={{ fontSize: { xs: 22, md: 28 }, fontWeight: 600 }}>
            Browsing History
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography sx={{ fontSize: 14 }}>
              Turn Browsing History on/off
            </Typography>

            <Switch
              checked={historyEnabled}
              onChange={(e) => setHistoryEnabled(e.target.checked)}
              color="warning"
            />
          </Box>
        </Box>

        {/* SEARCH */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            mb: 2,
          }}
        >
          <TextField
            fullWidth
            placeholder="Search in browsing history"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlinedIcon sx={{ color: "#FA8232" }} />
                </InputAdornment>
              ),
            }}
            sx={{
              background: "#fff",
              "& .MuiOutlinedInput-root": { height: 48, borderRadius: 0 },
            }}
          />

          <TextField
            placeholder="DD/MM/YYYY"
            sx={{
              width: { xs: "100%", md: 260 },
              background: "#fff",
              "& .MuiOutlinedInput-root": { height: 48, borderRadius: 0 },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarTodayOutlinedIcon sx={{ color: "#FA8232", fontSize: 18 }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* PRODUCTS */}
        <Box sx={{ background: "#fff", border: "1px solid #E4E7E9" }}>
          {/* DATE */}
          <Box
            sx={{
              height: 48,
              display: "flex",
              alignItems: "center",
              px: 2,
              borderBottom: "1px solid #E4E7E9",
            }}
          >
            <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
              17 OCT, 2020
            </Typography>
          </Box>

          {/* GRID */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
            }}
          >
            {historyProducts.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                underline="none"
                sx={{
                  position: "relative",
                  p: 3,
                  display: "flex",
                  flexDirection: "column",
                  borderRight: { sm: "1px solid #E4E7E9" },
                  borderBottom: "1px solid #E4E7E9",
                }}
              >
                {/* BADGE */}
                {item.badge && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 12,
                      left: 16,
                      background: item.badgeColor,
                      color: "#fff",
                      px: 1,
                      fontSize: 11,
                      fontWeight: 600,
                    }}
                  >
                    {item.badge}
                  </Box>
                )}

                {/* IMAGE */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: { xs: 120, sm: 150, md: 160 },
                    height: { xs: 120, sm: 150, md: 160 },
                    objectFit: "contain",
                    mx: "auto",
                    mb: 2,
                  }}
                />

                {/* RATING */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                  <Rating value={4.5} precision={0.5} size="small" readOnly />
                  <Typography sx={{ fontSize: 12, color: "#77878F" }}>
                    ({item.reviews})
                  </Typography>
                </Box>

                {/* TITLE */}
                <Typography sx={{ fontSize: 14, minHeight: 50, mb: 1 }}>
                  {item.title}
                </Typography>

                {/* PRICE */}
                <Typography sx={{ fontSize: 18, fontWeight: 600, color: "#2DA5F3" }}>
                  {item.price}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}