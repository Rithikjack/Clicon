import React from 'react'
import Offerbar from '../Components/Home/Offerbar'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import Box from '@mui/material/Box';

import HeroSection from '../Components/Home/HeroSection'
import BestDeals from '../Components/Home/BestDeals'
import Categories from '../Components/Home/Categories'
import PromoBanner from '../Components/Home/PromoBanner'
import FeaturedProducts from '../Components/Home/Featuredproducts'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Footer />

      </Box>
    <Offerbar/>
    <HeroSection/>
    <BestDeals/>
    <Categories/>
    <FeaturedProducts/>
    <PromoBanner/>
    </>
  )
}

export default HomePage