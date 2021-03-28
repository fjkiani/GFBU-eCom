import React from 'react'
import { FeaturedProducts, Hero, Services, Contact, HeroTest, OurServices, Accordion, Reviews } from '../components'
import hero2 from '../assets/hero2.jpg'

const HomePage = () => {
  return (
    <main>
      {/* <HeroTest img={hero2}/> */}
      <Hero title="hello"/>
      <FeaturedProducts />
      <Services />
      <hr/>  
      <OurServices/>
      <Contact title="Join our Newsletter for Recipes " subTitle="from Chef Uzma" />
      <Accordion/>
      <Reviews/>

    </main>
  )
}

export default HomePage
