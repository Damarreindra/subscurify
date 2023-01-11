import React from 'react'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import NavbarUser from '../components/Navbar'

function Home() {
  return (
    <div>
        <NavbarUser/>
        <HeroSection/>
        <Footer/>
    </div>
  )
}

export default Home