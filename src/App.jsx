import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import HomePage from './Pages/HomePage'
import OrderCompleted from './Pages/OrderCompleted'

// Components — matching your exact folder structure
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'
import TrackOrderPage from './Components/Home/TrackOrderPage'

// Layout wrapper for pages that need Navbar + Footer
const PageLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home — has its own Offerbar + Navbar + Footer inside */}
        <Route path="/" element={<HomePage />} />

        {/* Order Success — already wraps Navbar + Footer inside */}
        <Route path="/order-completed" element={<OrderCompleted />} />

        {/* Track Order */}
       <Route
          path="/track-order"
          element={
            <>
              <Navbar />
              <TrackOrderPage />
              <Footer showNewsletter={false} />  {/* ← just add this */}
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  )
}

export default App