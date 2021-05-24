import React from "react"

import SEO from '../components/seo'
import HomeHeader from "../components/HomeHeader/HomeHeader"
import HomeBlog from '../components/HomeBlog/HomeBlog'
import About from '../components/About/About'
import Cotisation from '../components/Cotisation/Cotisation'
import Payments from '../components/Payments/Payments'
import Organizers from "../components/Organizers/Organizers"
import Sponsors from '../components/Sponsors/Sponsors'
import Partners from '../components/Partners/Partners'
import Contact from "../components/Contact/Contact"
import MobileInfoBoard from "../components/MobileInfoBoard/MobileInfoBoard"

const Index = () => {
  return (
    <>
      <SEO         
        title={"NeuRi 2021"}
      />
      <HomeHeader />
      <MobileInfoBoard />
      <HomeBlog />
      <About />
      <Cotisation />
      <Payments />
      <Organizers />
      <Sponsors />
      <Partners />
      <Contact />
    </>
  )
}

export default Index
