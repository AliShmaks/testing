import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X, ChevronDown, Sparkles, Award, MapPin, Instagram, Mail, Crown } from 'lucide-react'
import { useCart } from '../../context/CartContext'  

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const { getTotalItems } = useCart()  
  const location = useLocation()
  const totalItems = getTotalItems()

  const navLinks = [
    { to: '/about', label: 'About', icon: Crown },
    { to: '/collections', label: 'Collections', icon: Sparkles },
    { to: '/testimonials', label: 'Testimonials', icon: Award },
    { to: '/contact', label: 'Contact', icon: Mail },
    { to: '/location', label: 'Boutique', icon: MapPin },
    { to: '/socials', label: 'Socials', icon: Instagram },
  ]

  const isActive = (path) => location.pathname === path

  const handleLogoClick = () => {
    if (mobileOpen) setMobileOpen(false)
  }

  return (
    <>
      <nav className="navbar perfume-nav">
        <Link to="/" className="logo-link" onClick={handleLogoClick}>
          <div className="logo-img">
            <img src="/log.png" alt="Luxe Fragrance" />
          </div>
        </Link>

        <div className="nav-links">
          {navLinks.map(link => {
            const Icon = link.icon
            return (
              <Link 
                key={link.to} 
                to={link.to} 
                className={`nav-link ${isActive(link.to) ? 'active-link' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={16} />
                {link.label}
              </Link>
            )
          })}
          
          <div className="dropdown-wrap">
            <button 
              className="nav-link dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Fragrances <ChevronDown className={`dropdown-arrow ${dropdownOpen ? 'open' : ''}`} />
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu open">
                <Link to="/fragrances?type=for-her" onClick={() => { setDropdownOpen(false); setMobileOpen(false) }}>
                  <span className="dropdown-icon">🌸</span>
                  For Her
                </Link>
                <Link to="/fragrances?type=for-him" onClick={() => { setDropdownOpen(false); setMobileOpen(false) }}>
                  <span className="dropdown-icon">🌿</span>
                  For Him
                </Link>
                <Link to="/fragrances?type=unisex" onClick={() => { setDropdownOpen(false); setMobileOpen(false) }}>
                  <span className="dropdown-icon">✨</span>
                  Unisex
                </Link>
                <Link to="/fragrances?type=limited" onClick={() => { setDropdownOpen(false); setMobileOpen(false) }}>
                  <span className="dropdown-icon">💎</span>
                  Limited Edition
                </Link>
              </div>
            )}
          </div>
        </div>

        <div className="nav-actions">
          <Link to="/wishlist" className="wishlist-btn" title="Wishlist">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </Link>
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
          
          <p className="menu-label">✦ Fragrances ✦</p>
          <Link to="/fragrances?type=for-her" onClick={() => setMobileOpen(false)}>
            🌸 For Her
          </Link>
          <Link to="/fragrances?type=for-him" onClick={() => setMobileOpen(false)}>
            🌿 For Him
          </Link>
          <Link to="/fragrances?type=unisex" onClick={() => setMobileOpen(false)}>
            ✨ Unisex
          </Link>
          <Link to="/fragrances?type=limited" onClick={() => setMobileOpen(false)}>
            💎 Limited Edition
          </Link>
          
          <p className="menu-label">✦ Discover ✦</p>
          <Link to="/collections" onClick={() => setMobileOpen(false)}>Collections</Link>
          <Link to="/testimonials" onClick={() => setMobileOpen(false)}>Testimonials</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/location" onClick={() => setMobileOpen(false)}>Boutique</Link>
          <Link to="/socials" onClick={() => setMobileOpen(false)}>Socials</Link>
          <Link to="/wishlist" onClick={() => setMobileOpen(false)}>Wishlist</Link>
          <Link to="/checkout" onClick={() => setMobileOpen(false)}>Cart</Link>
        </div>
      </div>
    </>
  )
}