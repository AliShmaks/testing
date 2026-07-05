import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Navbar, Footer } from '../components/Layout'
import { CategoryGrid } from '../components/Menu/CategoryGrid'
import { CategoryFilter } from '../components/Menu/CategoryFilter'
import { ProductGrid } from '../components/Menu/ProductGrid'
import { ProductDetail } from '../components/Menu/ProductDetail'
import { useSupabase } from '../hooks/useSupabase'

const MenuPage = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [detailItem, setDetailItem] = useState(null)
  const [dataReady, setDataReady] = useState(false)
  const { categories, products, loading } = useSupabase()
  
  const mode = searchParams.get('mode') || 'dinein'
  const categoryFromURL = searchParams.get('cat')

  useEffect(() => {
    if (!loading && categories.length > 0) {
      setDataReady(true)
    }
  }, [loading, categories])

  useEffect(() => {
    if (categoryFromURL && categories.length > 0) {
      setSelectedCategory(categoryFromURL)
    }
  }, [categoryFromURL, categories])

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId)
  }

  const handleBackToCategories = () => {
    setSelectedCategory(null)
  }

  const handleOpenDetail = (catId, idx) => {
    const item = products[catId]?.[idx]
    if (item) setDetailItem({ catId, idx, item })
  }

  const handleCloseDetail = () => {
    setDetailItem(null)
  }

  // Show nothing while loading - App.jsx handles the loader
  if (!dataReady) {
    return (
      <>
        <Navbar />
        <div className="page-section" style={{ minHeight: '100vh' }} />
        <Footer />
      </>
    )
  }

  const title = mode === 'delivery' ? 'Delivery Menu' : 'Dine-in Menu'
  const subtitle = mode === 'delivery' 
    ? 'Add items to your cart for delivery' 
    : 'Browse our full menu'

  return (
    <>
      <Navbar />
      <div className="page-section">
        {!selectedCategory ? (
          <CategoryGrid 
            categories={categories} 
            title={title} 
            subtitle={subtitle}
            onSelectCategory={handleSelectCategory}
          />
        ) : (
          <>
            <CategoryFilter 
              categories={categories}
              selectedCategory={selectedCategory}
              onSwitchCategory={setSelectedCategory}
            />
            <ProductGrid 
              products={products[selectedCategory] || []}
              categoryName={categories.find(c => c.category_key === selectedCategory)?.name}
              selectedCategory={selectedCategory}
              mode={mode}
              onOpenDetail={handleOpenDetail}
            />
            <button 
              onClick={handleBackToCategories}
              style={{
                display: 'block',
                margin: '20px auto 40px',
                padding: '12px 24px',
                background: 'transparent',
                border: '1px solid rgba(139,26,26,0.3)',
                borderRadius: '40px',
                color: '#fff',
                cursor: 'pointer',
                fontSize: '0.85rem'
              }}
            >
              ← Back to Categories
            </button>
          </>
        )}
      </div>
      <Footer />
      {detailItem && (
        <ProductDetail 
          item={detailItem}
          mode={mode}
          onClose={handleCloseDetail}
        />
      )}
    </>
  )
}

export default MenuPage