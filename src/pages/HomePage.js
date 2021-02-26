import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, HeroTest } from '../components'
import hero2 from '../assets/hero2.jpg'

const HomePage = () => {
  return (
    <main>
      <HeroTest img={hero2}/>
      <Hero title="hello"/>
      <FeaturedProducts />
      <Services />
      <Contact />

    </main>
  )
}

export default HomePage
