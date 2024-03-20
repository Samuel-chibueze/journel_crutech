import React from "react"
import AboutCard from "../about/AboutCard"
import Hblog from "./Hblog"
import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import RegistrationPage from "../Login/RegistrationPage"

const Home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <Hblog />
      <HAbout />
      <Testimonal />
      
      
      <Hprice />
    </>
  )
}

export default Home
