import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, OurServices } from '../components'
const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
      <OurServices/>
    </main>
  )
}

export default HomePage
