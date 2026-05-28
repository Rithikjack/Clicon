import React from 'react'
import { BrowserRouter, Routes, Route } from '  react-router-dom'
import './FootStyle.css'
// Pages
import HomePage from './Pages/HomePage'
import OrderCompleted from './Pages/OrderCompleted'
import NotFoundPage from './Pages/NotFoundPage'
import CustomerSupportPage from './Pages/CustomerSupportPage'

// Account Pages
import AccountLayout from './Pages/Account/AccountLayout'
import DashboardPage from './Pages/Account/DashboardPage'
import SettingsPage from './Pages/Account/SettingsPage'

// Components
import Navbar from './Components/Home/Navbar'
import Footer from './Components/Home/Footer'
import TrackOrderPage from './Components/Home/TrackOrderPage'
import Elc from './Components/Home/Electronic.jsx'
import Sign from '../src/Pages/Auth/Sign-in/Register'
import Forgot from '../src/Pages/Auth/Sign-in/Forgot_Password'
import Reset from './Pages/Auth/Sign-in/Reset_Password.jsx'
import Help from './Components/Home/Help.jsx'
import Login from '../src/Pages/Auth/Sign-in/Register.jsx'
import Signup from '../src/Pages/Auth/Sign-in/Register.jsx'
import Shop from '../src/Components/Home/Mac.jsx'
import Compare from './Components/Home/Compare.jsx'
import Wish from './Components/Home/Wishlist.jsx'
import ShopCard from './Components/Home/ShopCard.jsx'
import CheckOut from './Components/Home/CheckOut.jsx'
import AddCard from './Components/Home/ShopCard.jsx'



// Layout wrapper for pages that need Navbar + Footer
const PageLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
)
import CardsAddressPage from './Pages/Account/CardsAddressPage'
import OrderHistoryPage from './Pages/Account/OrderHistoryPage'
import OrderDetailsPage from './Pages/Account/OrderDetailsPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Order Success */}
        <Route path="/order-completed" element={<OrderCompleted />} />

        {/* Track Order */}
        <Route
          path="/track-order"
          element={
            <>
              <Navbar />
              <TrackOrderPage />
              <Footer showNewsletter={false} />

            </>
          }
        />

        {/* Customer Support */}
        <Route
          path="/customer-support"
          element={
            <>
              <Navbar />
              <CustomerSupportPage />
              <Footer showNewsletter={false} />
            </>
          }
        />

        {/* ── Account Routes ── */}
        <Route path="/account" element={<AccountLayout />}>
          <Route index            element={<DashboardPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="settings"  element={<SettingsPage />} />
          <Route path="cards"     element={<CardsAddressPage />} /> 
          <Route path="orders"       element={<OrderHistoryPage />} />        {/* ← add */}
          <Route path="order-details" element={<OrderDetailsPage />} /> 
        </Route>

        {/* 404 — always last */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFoundPage />
              <Footer showNewsletter={false} />
            </>
          }
        />

        <Route path="/product/:id" element={<Elc />} />

        {/* Sign In Route */}
        <Route
          path="/signin"
          element={
            <Sign
              open={true}
              onClose={() => window.history.back()}
            />
          }
        />

        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/drone" element={<Shop />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/wish" element={<Wish />} />
        <Route path="/shopcard" element={<ShopCard />} />
        <Route path="/check" element={<CheckOut />} />
        <Route path="/add-card" element={<AddCard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App