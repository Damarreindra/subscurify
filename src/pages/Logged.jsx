import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getArtist } from '../actions/spotifyAction'
import Footer from '../components/Footer'
import LayerSection from '../components/LayerSection'
import NavbarUser from '../components/Navbar'
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