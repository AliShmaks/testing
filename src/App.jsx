import React, { useState, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Loader, ScrollProgress, Toast } from './components/Layout'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import CheckoutPage from './pages/CheckoutPage'
import Fragrances from './pages/Fragrances'
import Collections from './pages/Collections'
import Wishlist from './pages/Wishlist'
import About from './pages/About'
import Contact from './pages/Contact'
import Location from './pages/Location'
import Socials from './pages/Socials'
import Testimonials from './pages/Testimonials'
import XOGame from './pages/XOGame'

const AppContent = () => {
  const location = useLocation()
  const [showLoader, setShowLoader] = useState(false) 
  const [showContent, setShowContent] = useState(false) 

  useLayoutEffect(() => {
    // 1. HIDE CONTENT INSTANTLY
    setShowContent(false)
    
    // 2. SHOW LOADER
    setShowLoader(true)

    // 3. WAIT FOR LOADER TO FINISH, THEN SHOW CONTENT
    // Loader: 500ms show + 500ms fade = 1000ms total
    const timer = setTimeout(() => {
      setShowLoader(false)
      // Small delay to ensure loader fades out smoothly
      setTimeout(() => {
        setShowContent(true)
      }, 100)
    }, 1100) // 500ms show + 500ms fade + 100ms buffer

    // Scroll to top
    window.scrollTo(0, 0)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {/* Show loader overlay on top of everything */}
      {showLoader && <Loader />}
      
      <ScrollProgress />
      
      {/* Only show content when loader is done */}
      {!showLoader && showContent && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/fragrances" element={<Fragrances />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/xogame" element={<XOGame />} />
        </Routes>
      )}
      
      <Toast />
    </>
  )
}

function App() {
  return (
    <Router>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </Router>
  )
}

export default App