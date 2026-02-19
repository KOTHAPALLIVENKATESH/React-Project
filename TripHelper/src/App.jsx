// import { useState } from 'react'
// import Travel from './components/Travel'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import { Routes, Route } from "react-router-dom";
import BookingCard from './components/BookingCard';
import HotelBooking from './components/HotelBooking';

import '../src/components/Travel.css'
import '../src/components/hotelbook.css'



function App() {
  

  return (
    <>
      {/* <Travel /> */}
      <Navbar />
      {/* <Auth /> */}
      <Routes>
        {/* Sign In */}
        <Route path="/signin" element={<Auth mode="signin" />} />

        {/* Sign Up */}
        <Route path="/signup" element={<Auth mode="signup" />} />
      </Routes>

      <BookingCard />
      <HotelBooking />
    
     
     
    </>
  )
}

export default App
