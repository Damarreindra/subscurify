import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import LayerSection from '../components/LayerSection'
import NavbarUser from '../components/Navbar'
import RateSection from '../components/RateSection'
import TopGenre from '../components/TopGenre'
import WelcomeSection from '../components/WelcomeSection'

function Logged() {
  return (
    <div>
        <NavbarUser/>
        <WelcomeSection/>
        <TopGenre/>
        <LayerSection/>
        <Footer/>
    </div>
  )
}

export default Logged