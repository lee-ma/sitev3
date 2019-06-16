import React from 'react'

import LandingImage from './LandingImage'
import About from './About'
import SpotifyTrack from './SpotifyTrack'

const Landing = () => (
  <div className="slide-in-from-bottom">
    {/* <h1 style={{textAlign: "left", maxWidth: "fit-content", margin:"auto"}}>Hi, my name is Lee</h1> */}
    <div className="image">
      <LandingImage />
    </div>
    <div style={{textAlign: "left", maxWidth: "90ch", margin:"auto"}}>
      <About className="about"/>
      <SpotifyTrack />
    </div>
  </div>
)

export default Landing