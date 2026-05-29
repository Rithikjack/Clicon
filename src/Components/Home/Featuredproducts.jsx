import React, { useState } from 'react';
import { Box, Typography, Button, IconButton, Tab, Tabs } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// ── Replace these with your actual image imports ──
import bannerImg from '../../assets/Banner.png';
import product1 from '../../assets/Dell.png';
import product2 from '../../assets/Mobile.png';
import product3 from '../../assets/AC.png';
import product4 from '../../assets/headphone.png';
import product5 from '../../assets/Drone.png';
import product6 from '../../assets/Tv.png';
import product7 from '../../assets/Moniter.png';
import product8 from '../../assets/smartphone.png';
import Container from '@mui/material/Container';
const categories = ['All Product', 'Smart Phone', 'Laptop', 'Headphone', 'TV'];

const products = [
  {
    id: 1,
    image: product1,
    tag: 'HOT',
    tagColor: '#EE5858',
    tagText: '#fff',
    rating: 5,
    reviews: 738,
    title: 'TOZO T6 True Wireless Earbuds Bluetooth Headphon...',
    price: '$70',
    oldPrice: null
  },
  {
    id: 2,
    image: product2,
    tag: null,
    rating: 5,
    reviews: 536,
    title: 'Samsung Electronics Samsung Galaxy S21 5G',
    price: '$2,300',
    oldPrice: null
  },
  {
    id: 3,
    image: product3,
    tag: 'BEST DEALS',
    tagColor: '#2DA5F3',
    tagText: '#fff',
    rating: 5,
    reviews: 423,
    title: 'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...',
    price: '$360',
    oldPrice: null
  },
  {
    id: 4,
    image: product4,
    tag: null,
    rating: 3,
    reviews: 816,
    title: 'Portable Wshing Machine, 11lbs capacity Model 18NMF...',
    price: '$80',
    oldPrice: null
  },
  {
    id: 5,
    image: product5,
    tag: null,
    rating: 5,
    reviews: 647,
    title: 'Wired Over-Ear Gaming Headphones with USB',
    price: '$1,500',
    oldPrice: null
  },
  {
    id: 6,
    image: product6,
    tag: '25% OFF',
    tagColor: '#EFD33D',
    tagText: '#5a4a00',
    rating: 4,
    reviews: 877,
    title: 'Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...',
    price: '$1,200',
    oldPrice: '$1600'
  },
  {
    id: 7,
    image: product7,
    tag: null,
    rating: 5,
    reviews: 426,
    title: 'Dell Optiplex 7000x7480 All-in-One Computer Monitor',
    price: '$250',
    oldPrice: null
  },
  {
    id: 8,
    image: product8,
    tag: 'SALE',
    tagColor: '#00B517',
    tagText: '#fff',
    rating: 5,
    reviews: 583,
    title: '4K UHD LED Smart TV with Chromecast Built-in',
    price: '$220',
    oldPrice: null
  }
];

const StarRating = ({ rating }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1px' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Box
          key={star}
          component="span"
          sx={{
            fontSize: '13px',
            color: star <= rating ? '#FA8232' : '#E4E7E9'
          }}
        >
          ★
        </Box>
      ))}
    </Box>
  );
};

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  return (
  
      <Box
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
         
          p: 2,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          bgcolor: hovered ? '#FAFAFA' : '#fff',
          transition: 'background 0.2s'
        }}
      >
        {/* Badge Tag */}
        {product.tag && (
          <Box
            sx={{
              position: 'absolute',
              top: 10,
              left: 10,
              bgcolor: product.tagColor,
              color: product.tagText,
              px: 1.25,
              py: '3px',
              fontSize: '11px',
              fontWeight: 700,
              borderRadius: '4px',
              zIndex: 2,
              letterSpacing: '0.3px'
            }}
          >
            {product.tag}
          </Box>
        )}

        {/* Hover Action Icons */}
        <Box
          sx={{
            position: 'absolute',
            top: '38%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            gap: 0.75,
            opacity: hovered ? 1 : 0,
            visibility: hovered ? 'visible' : 'hidden',
            transition: 'opacity 0.25s',
            zIndex: 5
          }}
        >
          <IconButton
            sx={{
              width: 36,
              height: 36,
              bgcolor: '#fff',
              border: '1px solid #E4E7E9',
              '&:hover': { bgcolor: '#FA8232', color: '#fff' }
            }}
          >
            <FavoriteBorderIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton
            sx={{
              width: 36,
              height: 36,
              bgcolor: '#fff',
              border: '1px solid #E4E7E9',
              '&:hover': { bgcolor: '#FA8232', color: '#fff' }
            }}
          >
            <ShoppingCartOutlinedIcon sx={{ fontSize: 16 }} />
          </IconButton>
          <IconButton
            sx={{
              width: 36,
              height: 36,
              bgcolor: '#fff',
              border: '1px solid #E4E7E9',
              '&:hover': { bgcolor: '#FA8232', color: '#fff' }
            }}
          >
            <RemoveRedEyeOutlinedIcon sx={{ fontSize: 16 }} />
          </IconButton>
        </Box>

        {/* Product Image */}
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{
            width: '100%',
            height: '150px',
            objectFit: 'contain',
            mb: 1.5,
            display: 'block'
          }}
        />

        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75, mb: 0.75 }}>
          <StarRating rating={product.rating} />
          <Typography sx={{ fontSize: '12px', color: '#929FA5' }}>
            ({product.reviews})
          </Typography>
        </Box>

        {/* Title */}
        <Typography
          sx={{
            fontSize: '13px',
            lineHeight: '1.55',
            mb: 1,
            color: '#191C1F',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            minHeight: '40px'
          }}
        >
          {product.title}
        </Typography>

        {/* Price */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          {product.oldPrice && (
            <Typography
              sx={{ textDecoration: 'line-through', color: '#929FA5', fontSize: '12px' }}
            >
              {product.oldPrice}
            </Typography>
          )}
          <Typography sx={{ color: '#2DA5F3', fontWeight: 700, fontSize: '15px' }}>
            {product.price}
          </Typography>
        </Box>
      </Box>
    
  );
};

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container
      maxWidth={false}
      sx={{
        width: '1285px',
        margin: '0 auto'
      }}
    >
      <Box sx={{ py: 5, px: '150px'}}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
            gap: 0,
            borderRadius: '10px',
            overflow: 'hidden'
          }}
        >

          {/* ── LEFT BANNER ── */}

          {/* Banner Image — replace src with your actual import */}
          <Box
            component="img"
            src={bannerImg}
            alt="Electronics banner"
            sx={{
              width: '100%',
              objectFit: 'cover',
              mt: 'auto'
            }}
          />


          {/* ── RIGHT: TABS + PRODUCT GRID ── */}
          <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#fff' }}>

            {/* Header Row */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2,
                pt: 2,
                pb: 0,
                borderBottom: '1px solid #E4E7E9',
                flexWrap: 'wrap',
                gap: 1
              }}
            >
              <Typography sx={{ fontSize: '20px', fontWeight: 700, color: '#191C1F', mr: 2 }}>
                Featured Products
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flexWrap: 'wrap', flex: 1, justifyContent: 'space-between' }}>
                {/* Category Tabs */}
                <Tabs
                  value={activeTab}
                  onChange={(_, val) => setActiveTab(val)}
                  sx={{
                    minHeight: 'auto',

                    '& .MuiTabs-indicator': {
                      display: 'none'
                    },

                    '& .MuiTab-root': {
                      minHeight: 'auto',
                      py: 1.5,
                      px: 1.5,
                      fontSize: '13px',
                      fontWeight: 400,
                      color: '#5F6C72',
                      textTransform: 'none'
                    },

                    '& .Mui-selected': {
                      color: '#191C1F !important',
                      fontWeight: '600 !important',
                      borderBottom: '2px solid #191C1F'
                    }
                  }}
                >
                </Tabs>

                <Typography
                  sx={{
                    color: '#FA8232',
                    fontWeight: 600,
                    fontSize: '13px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    whiteSpace: 'nowrap',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  Browse All Product <ArrowForwardIcon sx={{ fontSize: 14 }} />
                </Typography>
              </Box>
            </Box>

            {/* Product Grid — 4 columns × 2 rows */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(4, 1fr)' },
                flex: 1
              }}
            >
              {products.map((product, index) => (
                <Box
                  key={product.id}
                  sx={{
                    borderLeft: index % 4 !== 0 ? '1px solid #E4E7E9' : 'none',
borderTop: index >= 4 ? '1px solid #E4E7E9' : 'none'
                  }}
                >
                  <ProductCard product={product} />
                </Box>
              ))}
            </Box>

          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default FeaturedProducts;