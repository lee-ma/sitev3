import React from 'react'
import { auto } from 'eol';

import SpotifyTrack from './SpotifyTrack'

const About = () => (
  <div className="about">
    <h1>Software Developer,</h1>
    <h1>Hot Sauce Enthusiast,</h1>
    <h1>Ski Slope Dominator</h1>
    <h1 className="show-mobile">Software Developer, Hot Sauce Enthusiast, Ski Slope Dominator</h1>
    <p className="text hide-mobile">
      Hi, my name is Lee, I'm a Computer Engineering student at the University of Waterloo.
      At school, I am a member of the <a href="https://entsoc.ca">Entrepreneurship Society</a>,&nbsp;
      and I was the sole developer of the 2019 <a href="http://enghack.com">EngHack website</a>.
      Outside of school I love any outdoor activity in the mountains, learning to cook new recipes, and going to Costco for soft serve.
    </p>
    <p className="text">
      Learn more about my <a rel="noopener noreferrer" href="https://drive.google.com/file/d/15Mkc4YgmGP5u7kNrnHz_Lgep9JInJxL2/view?usp=sharing" target="_blank">Experience</a> or find me on <a href="https://www.github.com/lee-ma">Github</a>,&nbsp;
      <a href="https://www.linkedin.com/lma321">LinkedIn</a>.
    </p>
    <SpotifyTrack />
  </div>
)

export default About