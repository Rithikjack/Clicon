import React from 'react'
import Offerbar from '../Components/Home/Offerbar'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footerr'
import Box from '@mui/material/Box';
import News from '../Components/News'
import Sells from '../Components/Sells'
import Accessories from '../Components/Computer Accessories'

import HeroSection from '../Components/Home/HeroSection'
import BestDeals from '../Components/Home/BestDeals'
import Categories from '../Components/Home/Categories'
import PromoBanner from '../Components/Home/PromoBanner'
import FeaturedProducts from '../Components/Home/Featuredproducts'



const HomePage = () => {
  return (
    <>

      <Offerbar />
      {/* <Navbar/> */}

      <Navbar />
      <Box>


        <HeroSection />
        <BestDeals />
        <Categories />
        <FeaturedProducts />
        <PromoBanner />

        <Accessories />
        <Sells />
        <News />
        <Footer />
      </Box>
    </>
  )
}

export default HomePage