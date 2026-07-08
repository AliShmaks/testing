import React from 'react'
import { Navbar, Footer } from '../components/Layout'

const About = () => {
  return (
    <>
      <Navbar />
      <div className="page-section" style={{ minHeight: '100vh', paddingTop: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', background: 'linear-gradient(135deg, #fff 0%, #d4af37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '24px' }}>
            About Us
          </h1>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #8B1A1A, #d4af37)', margin: '0 auto 30px', borderRadius: '2px' }}></div>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: '1.8', maxWidth: '600px', margin: '0 auto' }}>
            We are a luxury fragrance boutique dedicated to curating the finest scents 
            from around the world. Our passion lies in helping you discover your signature 
            fragrance that tells your unique story.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About