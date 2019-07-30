import React from 'react'
import { auto } from 'eol';

import SpotifyTrack from './SpotifyTrack'

const About = () => (
  <div className="about">
    <h1>Hi, I'm Lee</h1>
    <p className="text">
      I'm a Computer Engineering student at the University of Waterloo, originally from Calgary, Alberta.
      At school, I am an executive member of the <a href="https://entsoc.ca">Entrepreneurship Society</a>,
      and I was the sole developer of the 2019 <a href="http://enghack.com">EngHack website</a>, a MLH hackathon that received 560+ applications.
      Outside of school I love any outdoor activity in the mountains, spicy food, and going to Costco for soft serve.
    </p>
    <p>
      Learn more about my <a rel="noopener noreferrer" href="leemaresume.pdf" target="_blank">experience</a> and find me on 
      <a href="https://www.github.com/lee-ma"> Github</a> or <a href="https://www.linkedin.com/in/lma321">LinkedIn</a>.
    </p>
  </div>
)

export default About