import React from 'react'

import LandingImage from './LandingImage'
import About from './About'
import SpotifyTrack from './SpotifyTrack'

const Landing = () => (
  <div className="slide-in-from-bottom">
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