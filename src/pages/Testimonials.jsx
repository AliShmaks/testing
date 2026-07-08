import React from 'react'
import { Navbar, Footer } from '../components/Layout'
import { Star } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'Absolutely in love with my new fragrance! The quality is unmatched.',
      rating: 5
    },
    {
      name: 'James R.',
      text: 'The perfect gift for my wife. She hasn\'t stopped wearing it.',
      rating: 5
    },
    {
      name: 'Emma W.',
      text: 'I finally found my signature scent. Thank you!',
      rating: 5
    }
  ]

  return (
    <>
      <Navbar />
      <div className="page-section" style={{ minHeight: '100vh', paddingTop: '120px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '900', background: 'linear-gradient(135deg, #fff 0%, #d4af37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textAlign: 'center', marginBottom: '24px' }}>
            Testimonials
          </h1>
          <div style={{ width: '80px', height: '3px', background: 'linear-gradient(90deg, #8B1A1A, #d4af37)', margin: '0 auto 40px', borderRadius: '2px' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                style={{
                  background: '#1a1a1a',
                  padding: '30px',
                  borderRadius: '16px',
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
                <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#d4af37" color="#d4af37" />
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '16px' }}>
                  "{testimonial.text}"
                </p>
                <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem' }}>
                  - {testimonial.name}
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

export default Testimonials