import React from 'react'
import Offerbar from '../Components/Home/Offerbar'
import Navbar from '../Components/Home/Navbar'
import HeroSection from '../Components/Home/HeroSection'
import BestDeals from '../Components/Home/BestDeals'
import Categories from '../Components/Home/Categories'
import PromoBanner from '../Components/Home/PromoBanner'
import FeaturedProducts from '../Components/Home/Featuredproducts'

const HomePage = () => {
  return (
    <>
    <Offerbar/>
    <Navbar/>
    <HeroSection/>
    <BestDeals/>
    <Categories/>
    <FeaturedProducts/>
    <PromoBanner/>
    </>
  )
}

export default HomePage