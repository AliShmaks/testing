import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Navbar, Footer } from '../components/Layout'
import MenuPage from './MenuPage'

const Fragrances = () => {
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') || 'all'
  
  return <MenuPage />
}

export default Fragrances