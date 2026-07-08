import React from 'react'
import { Navbar, Footer } from '../components/Layout'

const Collections = () => {
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
            Collections
          </h1>
          <div style={{ 
            width: '80px', 
            height: '3px', 
            background: 'linear-gradient(90deg, #8B1A1A, #d4af37)', 
            margin: '20px auto 40px', 
            borderRadius: '2px' 
          }}></div>
          <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', fontSize: '1.1rem' }}>
            Explore our curated fragrance collections
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px', 
            marginTop: '40px' 
          }}>
            {['Floral', 'Woody', 'Oriental', 'Fresh', 'Citrus', 'Spicy'].map((collection) => (
              <div 
                key={collection}
                style={{
                  background: '#1a1a1a',
                  padding: '30px',
                  borderRadius: '16px',
                  border: '1px solid rgba(139,26,26,0.1)',
                  textAlign: 'center',
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
                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700' }}>{collection}</h3>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', marginTop: '8px' }}>
                  Explore {collection.toLowerCase()} fragrances
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Collections