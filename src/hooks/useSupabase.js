import { useState, useEffect } from 'react'
import { fetchCategories, fetchProducts } from '../services/supabase'

export const useSupabase = () => {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true)
        const [cats, prods] = await Promise.all([
          fetchCategories(),
          fetchProducts()
        ])
        
        setCategories(cats)
        
        const productsByCategory = {}
        prods.forEach(product => {
          if (!productsByCategory[product.category_key]) {
            productsByCategory[product.category_key] = []
          }
          productsByCategory[product.category_key].push(product)
        })
        setProducts(productsByCategory)
        
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    loadData()
  }, [])

  return { categories, products, loading, error }
}