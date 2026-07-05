import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { Loader, ScrollProgress, Toast } from './components/Layout'
import Home from './pages/Home'
import MenuPage from './pages/MenuPage'
import CheckoutPage from './pages/CheckoutPage'

const AppContent = () => {
  const location = useLocation()
  const [loading, setLoading] = useState(false)
  const [showContent, setShowContent] = useState(true)

  useEffect(() => {
    // 1. HIDE CONTENT INSTANTLY
    setShowContent(false)
    
    // 2. SHOW LOADER
    setLoading(true)

    // 3. WAIT FOR LOADER TO FINISH, THEN SHOW CONTENT
    const timer = setTimeout(() => {
      setLoading(false)
      // Small delay to ensure loader fades out smoothly
      setTimeout(() => {
        setShowContent(true)
      }, 100)
    }, 900) // Loader duration

    // Scroll to top
    window.scrollTo(0, 0)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <>
      {loading && <Loader />}
      <ScrollProgress />
      {showContent && (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
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