import React from 'react'
import { auto } from 'eol';
import { hidden } from 'ansi-colors';
import { throws } from 'assert';

class Recommendations extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      recommendationsClass: "hide",
      expandClass: "show"
    }
  }

  showRecommendations = () => {
    this.setState({
      recommendationsClass: "show slide-in-from-bottom",
      expandClass: "hide"
    })
  }

  hideRecommendations = () => {
    this.setState({
      recommendationsClass: "hide fade-out",
      expandClass: "show"
    })
  }

  render() {
    return(
      <div className="recommendations">
      <h1>Things I recommend in places I've been to extensively</h1>
      <a style={{marginLeft: "3.5%", marginTop: "1%"}} className={this.state.expandClass} href="javascript:void(0)" onClick={this.showRecommendations}>Expand</a>
      <div className={this.state.recommendationsClass} style={{marginLeft: "3.5%", marginTop: "1%"}}>
        <h3>Calgary</h3>
        <ul>
          <li>Village Ice Cream</li>
          <li>My Favourite Ice Cream Shoppe</li>
          <li>Rafting down the Bow river</li>
          <li>Custard Shake @ Clive Burger</li>
          <li>Devonian Gardens @ The Core</li>
          <li>Pho Huong Viet</li>
          <li>Analog Coffee on 17th</li>
          <li>National on 8th</li>
          <li>Commonwealth Bar & Stage</li>
          <li>Cakeface Craft Beer @ Cold Garden Beverage Company</li>
          <li>Watching fireworks on Canada Day <a href="https://goo.gl/maps/JMZnpqnJxAoq49KU6">here</a></li>
          <li>Peter's Drive-in</li>
          <li>Pampa Brazilian Steakhouse</li>
          <li>Prince's Island Park</li>
          <li>Native Tongues Tacqueria</li>
          <li>Korean Village Restaurant</li>
          <li>Going to literally any mountain around Banff/Kananaskis and skiing/hiking it</li>
        </ul>
        <h3>Kitchener-Waterloo</h3>
        <ul>
          <li>Scoop Du Jour</li>
          <li>Apollo Cinema</li>
          <li>FourAll Ice Cream</li>
          <li>Kinkaku Izakaya</li>
          <li>Beertown Public House</li>
          <li>Stark & Perri on wing night</li>
          <li>Gol's Noodles</li>
          <li>Settlement Coffee Roasters (Kitchener location)</li>
          <li>Death Valley's Little Brother</li>
          <li>Mark's Caribbean Kitchen</li>
          <li>Bao Sandwich Bar</li>
          <li>Graffiti Market</li>
          <li>Ribs & Craft Beer Festival</li>
          <li>The Crazy Canuck</li>
        </ul>
        <h3>San Francisco Bay Area</h3>
        <ul>
          <li>Not walking down Turk St from Market St</li>
          <li>In n' Out</li>
          <li>Golden Gate Park</li>
          <li>Crissy Field</li>
          <li>Cha Cha Cha</li>
          <li>Uji Time Dessert</li>
          <li>MJA Vineyards in Santa Cruz</li>
          <li>Hot Fudge Sundae at Ghiardelli Square</li>
          <li>Boba Guys</li>
          <li>Bonchon Korean Fried Chicken</li>
          <li>Touring the Googleplex in Mountain View</li>
          <li>Costco because they have more food court options than in Canada</li>
        </ul>
        <h3>Toronto</h3>
        <ul>
          <li>Khao San Road</li>
          <li>RUDY Burger</li>
          <li>Raptor's game at Scotiabank Arena</li>
          <li>Sonic Boom</li>
          <li>Graffiti Alley</li>
        </ul>
        <a href="javascript:void(0)" onClick={this.hideRecommendations}>Hide</a>
      </div>
    </div>
    )
  }
}

export default Recommendations