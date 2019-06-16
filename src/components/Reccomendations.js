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
      <h1>Recommendations in areas I've lived or been to a lot</h1>
      <a style={{marginTop: "1%"}} className={this.state.expandClass} href="javascript:void(0)" onClick={this.showRecommendations}>Expand</a>
      <div className={this.state.recommendationsClass} style={{marginTop: "1.5%"}}>
        <h3>Calgary/Alberta</h3>
        <h4>Food & Drink</h4>
        <ul>
          <li>Village Ice Cream</li>
          <li>My Favourite Ice Cream Shoppe</li>
          <li>Custard Shake @ Clive Burger</li>
          <li>Analog Coffee on 17th</li>
          <li>Cakeface Craft Beer @ Cold Garden Beverage Co.</li>
          <li>Peter's Drive-in</li>
          <li>Pampa Brazilian Steakhouse</li>
          <li>Native Tongues Tacqueria</li>
          <li>Korean Village</li>
          <li>Lorenzo's Pizza</li>
        </ul>
        <h4>Clubs & Bars</h4>
        <ul>
          <li>National on 8th</li>
          <li>Commonwealth Bar & Stage</li>
          <li>Joyce on 4th</li>
          <li>WURST</li>
          <li>Cowboys tent during Stampede</li>
          <li>Ducky's Pub</li>
        </ul>
        <h4>Activities in the city</h4>
        <ul>
          <li>Rafting down the Bow river</li>
          <li>Devonian Gardens @ The Core</li>
          <li>Watching fireworks on Canada Day <a href="https://goo.gl/maps/JMZnpqnJxAoq49KU6">here</a></li>
          <li>Prince's Island Park</li>
          <li>Biking around Glenmore Resevoir trail</li>
          <li>Skating at Olympic Plaza during winter</li>
        </ul>
        <h4>Activities outside the city</h4>
        <ul>
          <li>Morraine Lake in Banff</li>
          <li>Johnston Canyon or Grotto Canyon during the winter to walk on the ice</li>
          <li>Skiing @ Sunshine Village</li>
          <li>Lake Louise</li>
          <li>Honestly can't go wrong by picking any mountain around Banff/Kananaskis and skiing/hiking it</li>
        </ul>
        <h4>Places that have a special place in my heart</h4>
        <ul>
          <li>14th St and 17th Ave McDonald's</li>
          <li>Westbrook McDonald's and Wendy's</li>
          <li>Demascus Mediterranean Food</li>
          <li>Lorenzo's Pizza</li>
          <li>Buffalo Wild Wings on Macleod</li>
          <li>Pho Huong Viet</li>
        </ul>
        <h3>Kitchener-Waterloo</h3>
        <h4>Food & Drink</h4>
        <ul>
          <li>Scoop Du Jour</li>
          <li>FourAll Ice Cream</li>
          <li>Kinkaku Izakaya</li>
          <li>Gol's Lan Zhou Noodles</li>
          <li>Beertown Public House</li>
          <li>Stark & Perri on wing night</li>
          <li>Settlement Coffee Roasters (Kitchener location)</li>
          <li>Death Valley's Little Brother</li>
          <li>Mark's Caribbean Kitchen</li>
          <li>Bao Sandwich Bar</li>
          <li>Graffiti Market</li>
          <li>The Crazy Canuck</li>
        </ul>
        <h4>Activities</h4>
        <ul>
          <li>Apollo Cinema</li>
          <li>Ribs & Craft Beer Festival</li>
          <li>Throwing frisbee in Waterloo park</li>
        </ul>
        <h3>San Francisco Bay Area</h3>
        <h4>Food & Drink</h4>
        <ul>
          <li>Burger @ In n' Out, fries are ok</li>
          <li>Uji Time Dessert</li>
          <li>Hot Fudge Sundae @ Ghiardelli Square</li>
          <li>Boba Guys</li>
          <li>Bonchon Korean Fried Chicken</li>
          <li>Franciscan Crab</li>
          <li>Cha Cha Cha</li>
        </ul>
        <h4>Activities</h4>
        <ul>
          <li>Not walking down Turk St from Market St</li>
          <li>Golden Gate Park</li>
          <li>Crissy Field</li>
          <li>Wine tasting @ MJA Vineyards in Santa Cruz</li>
          <li>Touring the Googleplex in Mountain View</li>
          <li>Plenty of hiking trails to choose from (not as good as the Rockies though)</li>
        </ul>
        <h3>Toronto</h3>
        <h4>Food & Drink</h4>
        <ul>
          <li>Khao San Road</li>
          <li>RUDY Burger</li>
        </ul>
        <h4>Activities</h4>
        <ul>
          <li>Raptor's game at Scotiabank Arena</li>
          <li>Looking at records and knick knacks @ Sonic Boom</li>
          <li>Graffiti Alley</li>
        </ul>
        <a href="javascript:void(0)" onClick={this.hideRecommendations}>Hide</a>
      </div>
    </div>
    )
  }
}

export default Recommendations