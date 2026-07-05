import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X, Utensils, Truck, ChevronDown } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { getTotalItems } = useCart()
  const location = useLocation()
  const totalItems = getTotalItems()

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/xogame', label: 'XO Game' },
    { to: '/testimonials', label: 'Testimonials' },
    { to: '/contact', label: 'Contact' },
    { to: '/location', label: 'Location' },
    { to: '/socials', label: 'Socials' },
  ]

  const isActive = (path) => location.pathname === path

  // Handle logo click - close mobile menu if open
  const handleLogoClick = () => {
    if (mobileOpen) setMobileOpen(false)
  }

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="logo-link" onClick={handleLogoClick}>
          <div className="logo-img">
            <img src="/log.png" alt="Hanks BBQ Logo" />
          </div>
        </Link>

        <div className="nav-links">
          {navLinks.map(link => (
            <Link 
              key={link.to} 
              to={link.to} 
              className={`nav-link ${isActive(link.to) ? 'active-link' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="dropdown-wrap">
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Menu <ChevronDown className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu open">
                <Link to="/menu?mode=dinein" onClick={() => { setDropdownOpen(false); setMobileOpen(false) }}>
                  <span className="dropdown-icon"><Utensils size={16} /></span>
                  Dine In Menu
                </Link>
                <Link to="/menu?mode=delivery" onClick={() => { setDropdownOpen(false); setMobileOpen(false) }}>
                  <span className="dropdown-icon"><Truck size={16} /></span>
                  Delivery Menu
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="nav-actions">
          <Link to="/checkout" className={`cart-btn ${isActive('/checkout') ? 'active' : ''}`}>
            <ShoppingBag size={22} />
            {totalItems > 0 && (
              <span className="cart-badge" style={{ display: 'flex' }}>
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <button 
            className="close-menu" 
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>
        <div className="mobile-menu-links">
          <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)}>About</Link>
          <p className="menu-label">Menu</p>
          <Link to="/menu?mode=dinein" onClick={() => setMobileOpen(false)}>
            <Utensils size={18} /> Dine In
          </Link>
          <Link to="/menu?mode=delivery" onClick={() => setMobileOpen(false)}>
            <Truck size={18} /> Delivery
          </Link>
          <Link to="/xogame" onClick={() => setMobileOpen(false)}>XO Game</Link>
          <Link to="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/location" onClick={() => setMobileOpen(false)}>Location</Link>
          <Link to="/socials" onClick={() => setMobileOpen(false)}>Socials</Link>
          <Link to="/checkout" onClick={() => setMobileOpen(false)}>Checkout</Link>
        </div>
      </div>
    </>
  )
}