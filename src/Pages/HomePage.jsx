import React from 'react'
import Offerbar from '../Components/Home/Offerbar'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import Box from '@mui/material/Box';
import News from '../Components/News'
import Sells from '../Components/Sells'
import Accessories from '../Components/Computer Accessories'

const HomePage = () => {
  return (
    <>

    <Offerbar/>
    {/* <Navbar/> */}

      <Navbar />
      <Box>
        <Accessories />
        <Sells />
        <News />
        <Footer />
      </Box>
    </>
  )
}

export default HomePage