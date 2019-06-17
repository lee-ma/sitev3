import React from 'react'

import NotFoundImage from './NotFoundImage'
import About from './About'

const Card = () => (
  <div className="not-found slide-in-from-bottom">
    <div style={{width: "100%"}}>
      <NotFoundImage />
    </div>
    <h2 style={{marginBottom: "10%", marginTop: "10%"}}>404! Where are you going, JR?</h2>
    <a className="back" href="/">&lt; Take me back</a>
  </div>
)

export default Card