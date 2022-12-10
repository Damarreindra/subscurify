import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import NavbarUser from '../components/Navbar'

function Home() {
  return (
    <div>
        <NavbarUser/>
        <HeroSection/>
     <InfoSection/>
    </div>
  )
}

export default Home