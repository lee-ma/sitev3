import React from 'react'

import LandingImage from './LandingImage'
import About from './About'

const Card = () => (
  <div className="card slide-in-from-bottom">
    <About class="about"/>
    <div class="image">
      <LandingImage />
    </div>
  </div>
)

export default Card