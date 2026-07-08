import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../components/Layout'
import { Heart, ShoppingBag } from 'lucide-react'

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const saved = localStorage.getItem('perfume_wishlist')
    if (saved) {
      try {
        setWishlist(JSON.parse(saved))
      } catch (e) {
        console.error('Error loading wishlist:', e)
      }
    }
  }, [])

  const removeFromWishlist = (productId) => {
    const updated = wishlist.filter(item => item.id !== productId)
    setWishlist(updated)
    localStorage.setItem('perfume_wishlist', JSON.stringify(updated))
  }

  return (
    <>
      <Navbar />
      <div className="page-section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            fontWeight: '900', 
            background: 'linear-gradient(135deg, #fff 0%, #d4af37 100%)', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent',
            textAlign: 'center'
          }}>
            Your Wishlist
          </h1>
          <div style={{ 
            width: '80px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #8B1A1A, #d4af37)', 
            margin: '20px auto 40px', 
            borderRadius: '2px' 
          }}></div>
          
          {wishlist.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <Heart size={48} color="rgba(255,255,255,0.2)" style={{ marginBottom: '20px' }} />
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '1.1rem' }}>
                Your wishlist is empty
              </p>
              <Link 
                to="/menu" 
                style={{
                  display: 'inline-block',
                  marginTop: '20px',
                  padding: '12px 30px',
                  background: 'linear-gradient(135deg, #8B1A1A, #A52A2A)',
                  color: '#fff',
                  borderRadius: '40px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
              gap: '30px' 
            }}>
              {wishlist.map(item => (
                <div 
                  key={item.id} 
                  style={{ 
                    background: '#1a1a1a', 
                    borderRadius: '16px', 
                    padding: '20px', 
                    border: '1px solid rgba(139,26,26,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.borderColor = 'rgba(139,26,26,0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(139,26,26,0.1)'
                  }}
                >
                  <img 
                    src={item.image_url || '/placeholder-perfume.jpg'} 
                    alt={item.name} 
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'contain', 
                      borderRadius: '12px',
                      background: '#0a0a0a'
                    }} 
                  />
                  <h3 style={{ marginTop: '12px', color: '#fff', fontSize: '1rem' }}>{item.name}</h3>
                  <p style={{ color: '#d4af37', fontWeight: '700', fontSize: '1.1rem' }}>
                    ${item.price?.toFixed(2) || '0.00'}
                  </p>
                  <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
                    <button 
                      onClick={() => removeFromWishlist(item.id)}
                      style={{ 
                        flex: 1,
                        padding: '8px 16px', 
                        background: 'rgba(139,26,26,0.2)', 
                        border: '1px solid rgba(139,26,26,0.2)',
                        borderRadius: '8px', 
                        color: '#fff', 
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '0.85rem'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#8B1A1A'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(139,26,26,0.2)'
                      }}
                    >
                      Remove
                    </button>
                    <Link 
                      to="/checkout"
                      style={{ 
                        flex: 1,
                        padding: '8px 16px', 
                        background: 'linear-gradient(135deg, #8B1A1A, #A52A2A)', 
                        border: 'none',
                        borderRadius: '8px', 
                        color: '#fff', 
                        textDecoration: 'none',
                        textAlign: 'center',
                        fontSize: '0.85rem',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)'
                      }}
                    >
                      <ShoppingBag size={14} style={{ display: 'inline', marginRight: '5px' }} />
                      Buy Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Wishlist