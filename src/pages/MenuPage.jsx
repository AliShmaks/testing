import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Navbar, Footer } from '../components/Layout'
import { fragranceCategories, perfumeProducts } from '../data/perfumeData'
import { useCart } from '../context/CartContext'

const MenuPage = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [detailItem, setDetailItem] = useState(null)
  const { addToCart } = useCart()
  
  const fragranceType = searchParams.get('type') || 'all'

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  const handleOpenDetail = (catId, idx) => {
    const products = perfumeProducts[catId] || []
    const item = products[idx]
    if (item) setDetailItem({ catId, idx, item })
  }

  const handleCloseDetail = () => {
    setDetailItem(null)
  }

  const handleAddToCart = (product, e) => {
    e.stopPropagation()
    addToCart(product, 1)
    // Show toast notification
    const toast = document.querySelector('.toast')
    if (toast) {
      toast.textContent = `✨ ${product.name} added to cart!`
      toast.classList.add('show')
      setTimeout(() => toast.classList.remove('show'), 2500)
    }
  }

  // Filter categories based on fragrance type
  const filteredCategories = fragranceCategories.filter(cat => {
    if (fragranceType === 'all') return true
    return cat.id === fragranceType
  })

  const getCategoryTitle = () => {
    const typeMap = {
      'for-her': 'For Her',
      'for-him': 'For Him',
      'unisex': 'Unisex',
      'limited': 'Limited Edition',
      'all': 'All Fragrances'
    }
    return typeMap[fragranceType] || 'All Fragrances'
  }

  const getCategorySubtitle = () => {
    const subtitleMap = {
      'for-her': 'Elegant & feminine scents',
      'for-him': 'Bold & masculine aromas',
      'unisex': 'Perfect for everyone',
      'limited': 'Exclusive & rare finds',
      'all': 'Discover your signature scent'
    }
    return subtitleMap[fragranceType] || 'Discover your signature scent'
  }

  return (
    <>
      <Navbar />
      <div className="perfume-page-wrapper">
        {/* Luxury Hero Section */}
      
        
        <div className="perfume-content-wrapper">
          {!selectedCategory ? (
            <div className="cat-view">
              <div className="cat-header-section">
                <div className="cat-header-content">
                  <span className="cat-badge">✦ Fragrance Collection ✦</span>
                  <h2 className="cat-title">{getCategoryTitle()}</h2>
                  <p className="cat-subtitle">{getCategorySubtitle()}</p>
                </div>
                <div id="catGrid">
                  {filteredCategories.map((category, index) => (
                    <div 
                      key={category.id}
                      className="cat-card"
                      onClick={() => handleSelectCategory(category.id)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="cat-img">
                        <div className="cat-img-ring"></div>
                        <img 
                          src={category.image} 
                          alt={category.name}
                          loading="lazy"
                        />
                      </div>
                      <span className="cat-name">{category.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="perfume-category-header">
                <button 
                  onClick={handleBackToCategories}
                  className="perfume-back-btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M19 12H5M12 19l-7-7 7-7"/>
                  </svg>
                  Back to Collections
                </button>
                <h2 className="perfume-category-title">
                  {fragranceCategories.find(c => c.id === selectedCategory)?.name}
                </h2>
              </div>
              
              {/* Product Grid */}
              <div className="products-section perfume-products">
                <div className="products-container">
                  <div className="products-header">
                    <div className="products-header-line"></div>
                    <h3 className="products-title">
                      {fragranceCategories.find(c => c.id === selectedCategory)?.name}
                    </h3>
                    <div className="products-header-line"></div>
                  </div>
                  <div className="products-title-underline"></div>
                  <div className="products-grid view-grid">
                    {(perfumeProducts[selectedCategory] || []).map((product, idx) => (
                      <div 
                        key={product.id}
                        className="menu-card perfume-card"
                        onClick={() => handleOpenDetail(selectedCategory, idx)}
                      >
                        <div className="mc-img perfume-mc-img">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            loading="lazy"
                          />
                          {product.is_limited && (
                            <span className="badge-bs perfume-badge">Limited</span>
                          )}
                          {product.is_bestseller && (
                            <span className="badge-bs perfume-badge bestseller">★ Best Seller</span>
                          )}
                        </div>
                        <div className="mc-info perfume-mc-info">
                          <h3>{product.name}</h3>
                          <span className="price">${product.price.toFixed(2)}</span>
                          <p className="desc">{product.description}</p>
                          <div className="perfume-notes">
                            <div className="notes-tags">
                              {product.notes.map((note, i) => (
                                <span key={i} className="note-tag">{note}</span>
                              ))}
                            </div>
                          </div>
                          <div className="mc-bottom">
                            <div className="mc-action">
                              <button 
                                className="atc-btn perfume-atc-btn"
                                onClick={(e) => handleAddToCart(product, e)}
                              >
                                <span>Add to Cart</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                                  <line x1="3" y1="6" x2="21" y2="6"/>
                                  <path d="M16 10a4 4 0 0 1-8 0"/>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
      
      {/* Product Detail Modal */}
      {detailItem && (
        <div className="detail-page active">
          <button className="detail-back" onClick={handleCloseDetail}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
          <div className="detail-scroll">
            <div className="detail-hero perfume-detail-hero">
              <img src={detailItem.item.image} alt={detailItem.item.name} />
            </div>
            <div className="detail-body">
              <div className="detail-head">
                <h1>{detailItem.item.name}</h1>
                <span className="price perfume-detail-price">${detailItem.item.price.toFixed(2)}</span>
              </div>
              <div className="perfume-detail-notes">
                {detailItem.item.notes.map((note, i) => (
                  <span key={i} className="perfume-detail-note">{note}</span>
                ))}
              </div>
              <p className="desc">{detailItem.item.description}</p>
              {detailItem.item.is_limited && (
                <div style={{ marginTop: '12px' }}>
                  <span className="badge-bs perfume-badge">Limited Edition</span>
                </div>
              )}
              <div className="detail-footer">
                <button 
                  className="atc-btn perfume-atc-btn" 
                  style={{ width: '100%', padding: '16px' }}
                  onClick={() => {
                    addToCart(detailItem.item, 1)
                    handleCloseDetail()
                    const toast = document.querySelector('.toast')
                    if (toast) {
                      toast.textContent = `✨ ${detailItem.item.name} added to cart!`
                      toast.classList.add('show')
                      setTimeout(() => toast.classList.remove('show'), 2500)
                    }
                  }}
                >
                  Add to Cart - ${detailItem.item.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MenuPage