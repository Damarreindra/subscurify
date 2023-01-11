import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Lottie from "lottie-react";
import animationData from '../lotties/mice.json';
import animationData2 from '../lotties/camp.json';
import './hero.css'
function HeroSection() {
    const CLIENT_ID = "f6c117e7385346ae81e2335095e312bd";
  const REDIRECT_URI = "https://subscurify.netlify.app/home";
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
        <img id='img-logo' src="/logo.svg" alt="" srcset="" />
        <p id='logo-text'>Create a festival lineup from your top artists and compare it to others with Subscurify</p>
        <Button id='login-btn' className='btn-circle' variant="dark"><a className='' style={{fontSize:'16px',textDecoration:'none', color:'#c4fa6f'}} href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`}>Login With Spotify</a>
        </Button>
        <div id='lottie-hero' className='float-end'>
        <Lottie id='lottie-hero-img' animationData={animationData2} loop={true}/>
        </div>
        <div className='float-start'>
        <Lottie id='lottie-hero-img-2'  animationData={animationData} />
        </div>
        </div>
       
    </div>
  )
}

export default HeroSection