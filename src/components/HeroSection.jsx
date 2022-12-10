import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Lottie from "lottie-react";
import animationData from '../lotties/mice.json';
import './hero.css'
function HeroSection() {
    const CLIENT_ID = "f6c117e7385346ae81e2335095e312bd";
  const REDIRECT_URI = "http://localhost:3000/home";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const SCOPE = "user-top-read"
  const [token, setToken] = useState('')

  useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

}, [])

const logout = () =>{
  setToken('')
  window.localStorage.removeItem('token')
}
  return (
    <div id='hero'>
        <div id='logo'>
        <img id='img-logo' src="https://user-images.githubusercontent.com/80618060/206025262-b46695da-2b31-41e1-a987-e9f7721b5c80.png" alt="" srcset="" />
        <p id='logo-text'>Rate your spotify and compare it to others with Subscurify</p>
        <Button className='btn-circle' variant="dark"><a className='text-white' style={{textDecoration:'none'}} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login to Spotify</a>
        </Button>
        </div>
        <Lottie id='lottie' animationData={animationData} style={{height:'550px'}} loop={true}/>
       <div className="spacer layer1"></div>
    </div>
  )
}

export default HeroSection