import React from 'react'
import { auto } from 'eol';

import SpotifyTrack from './SpotifyTrack'

const About = () => (
  <div className="about">
    <h1>Hi, I'm Lee 👋</h1>
    <p className="text">
      I'm a Computer Engineering student at the University of Waterloo, originally from Calgary, Alberta.
      I will be a SWE Intern at Facebook (Instagram) this Fall.
      At UW, I was an executive member of the <a href="https://entsoc.ca">Entrepreneurship Society</a>, 
      a Project Developer with <a href="https://uwblueprint.org"> UW Blueprint</a>,
      and the developer of the 2019 <a href="http://enghack.com">EngHack website</a>, a MLH hackathon that received 600+ applications.
      Outside of school I love any outdoor activity in the mountains, spicy food, and going to Costco for soft serve.
    </p>
    <p>
      Check out my <a rel="noopener noreferrer" href="resume.pdf" target="_blank">Resume</a> and find me on 
      <a href="https://www.github.com/lee-ma"> Github</a> or <a href="https://www.linkedin.com/in/lma321">LinkedIn</a>.
    </p>
  </div>
)

export default About