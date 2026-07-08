import React from 'react'
import { Navbar, Footer } from '../components/Layout'
import { MapPin } from 'lucide-react'

const Location = () => {
  return (
    <>
      <Navbar />
      <div className="page-section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <MapPin size={48} color="#d4af37" style={{ marginBottom: '20px' }} />
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', background: 'linear-gradient(135deg, #fff 0%, #d4af37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '16px' }}>
            Our Boutique
          </h1>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #8B1A1A, #d4af37)', margin: '0 auto 30px', borderRadius: '2px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', marginBottom: '8px' }}>
            123 Luxury Avenue
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
            New York, NY 10001
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', marginTop: '20px', fontSize: '0.9rem' }}>
            Mon - Sat: 10am - 8pm<br />
            Sunday: 11am - 6pm
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Location