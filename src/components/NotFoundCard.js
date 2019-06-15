import React from 'react'

import NotFoundImage from './NotFoundImage'
import About from './About'

const Card = () => (
  <div style={{display: "inline-block", paddingTop: "5%", textAlign: "center"}} className="card slide-in-from-bottom">
    <NotFoundImage />
    <h1 style={{marginBottom: "2%"}}>404! Where are you going, JR?</h1>
    <a href="/">&lt; Take me back</a>
  </div>
)

export default Card