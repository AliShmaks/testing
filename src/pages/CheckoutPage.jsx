import React, { useState, useEffect } from 'react'
import { Navbar, Footer, showToast } from '../components/Layout'
import { CheckoutForm } from '../components/Checkout/CheckoutForm'
import { OrderSummary } from '../components/Checkout/OrderSummary'
import { LocationPopup } from '../components/Checkout/LocationPopup'
import { useCart } from '../context/CartContext'

const CheckoutPage = () => {
  const { cart, getTotalPrice } = useCart()
  const [showLocationPopup, setShowLocationPopup] = useState(false)
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', note: '' })
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Small delay to ensure smooth transition
    const timer = setTimeout(() => {
      setReady(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handlePlaceOrder = (data) => {
    if (cart.length === 0) {
      showToast('Your cart is empty')
      return
    }
    setFormData(data)
    setShowLocationPopup(true)
  }

  const handleSelectLocation = (location) => {
    setShowLocationPopup(false)
    const totalPrice = getTotalPrice()
    let message = '🍖 *NEW ORDER FROM HANKS BBQ* 🍖\n\n'
    message += `🏪 *Branch:* ${location.name}\n`
    message += `👤 *Name:* ${formData.name}\n`
    message += `📞 *Phone:* ${formData.phone}\n`
    message += `📍 *Address:* ${formData.address}\n`
    if (formData.note) message += `📝 *Note:* ${formData.note}\n`
    message += '\n━━━━━━━━━━━━━━━━━━\n\n'
    message += '*ORDER DETAILS:*\n'
    
    cart.forEach(item => {
      message += `• ${item.name} x${item.qty} — $${(item.price * item.qty).toFixed(2)}\n`
    })
    
    message += '\n━━━━━━━━━━━━━━━━━━\n'
    message += `💰 *TOTAL: $${totalPrice.toFixed(2)}*\n\n`
    message += '_Delivery fee calculated upon arrival._\n'
    message += `Thank you for ordering from Hanks BBQ ${location.name}! 🍖🔥`

    const encodedMsg = encodeURIComponent(message)
    window.open(`https://wa.me/${location.phone}?text=${encodedMsg}`, '_blank')
    showToast(`Opening WhatsApp for ${location.name}...`)
  }

  if (!ready) {
    return (
      <>
        <Navbar />
        <div className="page-section" style={{ minHeight: '100vh' }} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="page-section">
        <div className="checkout-container">
          <div className="checkout-header">
            <p className="checkout-badge">DELIVERY</p>
            <h1 className="checkout-title">Checkout</h1>
          </div>
          <div className="checkout-grid">
            <CheckoutForm onSubmit={handlePlaceOrder} />
            <OrderSummary />
          </div>
        </div>
      </div>
      <Footer />
      {showLocationPopup && (
        <LocationPopup 
          onSelect={handleSelectLocation}
          onClose={() => setShowLocationPopup(false)}
        />
      )}
    </>
  )
}

export default CheckoutPage