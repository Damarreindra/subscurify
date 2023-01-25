import React from 'react'
import Footer from '../components/Footer'
import LayerSection from '../components/LayerSection'
import NavbarUser from '../components/Navbar'
import TopGenre from '../components/TopGenre'
import WelcomeSection from '../components/WelcomeSection'

function Logged() {
  window.onload =  function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
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