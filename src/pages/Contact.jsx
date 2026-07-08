import React from 'react'
import { Navbar, Footer } from '../components/Layout'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="page-section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', background: 'linear-gradient(135deg, #fff 0%, #d4af37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '24px' }}>
            Contact Us
          </h1>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #8B1A1A, #d4af37)', margin: '0 auto 40px', borderRadius: '2px' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', marginBottom: '40px' }}>
            <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '16px', border: '1px solid rgba(139,26,26,0.1)', textAlign: 'center' }}>
              <Mail size={32} color="#d4af37" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', marginBottom: '8px' }}>Email</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)' }}>a.shararah@outlook.com</p>
            </div>
            <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '16px', border: '1px solid rgba(139,26,26,0.1)', textAlign: 'center' }}>
              <Phone size={32} color="#d4af37" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', marginBottom: '8px' }}>Phone</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)' }}>+961 76 634 625</p>
            </div>
            <div style={{ background: '#1a1a1a', padding: '30px', borderRadius: '16px', border: '1px solid rgba(139,26,26,0.1)', textAlign: 'center' }}>
              <MapPin size={32} color="#d4af37" style={{ marginBottom: '12px' }} />
              <h3 style={{ color: '#fff', marginBottom: '8px' }}>Location</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)' }}>Lebanon, Beirut</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Contact