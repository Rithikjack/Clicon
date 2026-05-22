import React from 'react'
import Offerbar from '../Components/Home/Offerbar'
import Navbar from '../Components/Home/Navbar'
import Footer from '../Components/Home/Footer'
import Box from '@mui/material/Box';


const HomePage = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Footer />

      </Box>
    <Offerbar/>
    </>
  )
}

export default HomePage