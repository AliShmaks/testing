import React, { useState, useEffect } from 'react'

export const Loader = () => {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    // Reset state when loader mounts
    setVisible(true)
    setFading(false)

    const timer = setTimeout(() => {
      setFading(true)
      setTimeout(() => {
        setVisible(false)
      }, 500)
    }, 800) // Show loader for 800ms

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className={`loader-overlay ${fading ? 'fade-out' : ''}`}>
      <div className="loader-container">
        <div className="loader-logo">
          <img src="/log.png" alt="Hanks BBQ Logo" />
        </div>
        <div className="loader-bar"></div>
      </div>
    </div>
  )
}