import React from "react"
import Hero from "./hero/Hero"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hprice from "./Hprice"
import Testimonial from "./testimonial/Testimonal"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonial />
      <Hblog />
      <Hprice /> 
    </>
  )
}

export default Home
