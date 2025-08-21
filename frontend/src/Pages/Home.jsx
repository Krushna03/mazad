import React from 'react'
import Hero from '../components/Home/Hero'
import { Header } from '../components/Home/Header'
import { Products } from '../components/Home/Products'

export const Home = () => {
  
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <Products />
    </div>
  )
}
