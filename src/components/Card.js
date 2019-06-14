import React from 'react'

import LandingImage from './LandingImage'
import About from './About'

const Card = () => (
  <div className="card">
    <About />
    <div style={{ width: `50%`, margin: "auto"}}>
      <LandingImage />
    </div>
  </div>
)

export default Card