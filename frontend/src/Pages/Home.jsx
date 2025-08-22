import React from 'react'
import Hero from '../components/Home/Hero'
import { Header } from '../components/Home/Header'
import { Products } from '../components/Home/Products'
import CtaBanner from '../components/Home/CtaBanner'
import { TrendingAuctions } from '../components/Home/TrendingAuctions'
import { EndingAuctions } from '../components/Home/EndingAuctions'
import CtaButton from '../components/Home/CtaButton'
import { RecentAuctions } from '../components/Home/RecentAuctions'
import Footer from '../components/Footer'

export const Home = () => {
  
  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <Products />
      <CtaBanner />
      <TrendingAuctions />
      <EndingAuctions />
      <CtaButton />
      <RecentAuctions />
      <Footer />  
    </div>
  )
}
