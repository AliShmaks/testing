import React from 'react'
import { Navbar, Footer } from '../components/Layout'
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react'

const Socials = () => {
  const socialLinks = [
    { icon: Instagram, name: 'Instagram', url: 'https://www.instagram.com/alishararah_/', color: '#E4405F' },
    { icon: Twitter, name: 'Twitter', url: '#', color: '#1DA1F2' },
    { icon: Facebook, name: 'Facebook', url: '#', color: '#1877F2' },
    { icon: Youtube, name: 'YouTube', url: '#', color: '#FF0000' },
  ]

  return (
    <>
      <Navbar />
      <div className="page-section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', background: 'linear-gradient(135deg, #fff 0%, #d4af37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '24px' }}>
            Follow Us
          </h1>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #8B1A1A, #d4af37)', margin: '0 auto 40px', borderRadius: '2px' }}></div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: 'rgba(255,255,255,0.7)',
                    transition: 'all 0.3s ease',
                    padding: '20px 30px',
                    background: '#1a1a1a',
                    borderRadius: '16px',
                    border: '1px solid rgba(139,26,26,0.1)',
                    minWidth: '120px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.borderColor = social.color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.borderColor = 'rgba(139,26,26,0.1)'
                  }}
                >
                  <Icon size={32} color={social.color} />
                  <span style={{ fontSize: '0.85rem' }}>{social.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Socials