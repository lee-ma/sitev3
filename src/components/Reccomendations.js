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
      <h1>Things to do in places I've lived or worked</h1>
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
          <li>Calgary Stampede</li>
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
          <li>Simple Simon's Pies</li>
        </ul>
        <h3>Greater Boston Area</h3>
        <h4>Food & Drink</h4>
        <ul>
          <li>Yardhouse Kitchen & Bar</li>
          <li>Citrus & Salt</li>
          <li>The Oyster Club</li>
          <li>Itadaki</li>
          <li>Summer Shack</li>
          <li>Pinnochio's Pizza and Subs</li>
          <li>The original Regina Pizza</li>
          <li>Dirty Water Dough Company</li>
          <li>Boston Sail Loft</li>
          <li>Correanos</li>
          <li>Finnagle a Bagel</li>
        </ul>
        <h4>Activities</h4>
        <ul>
          <li>Any sporting venue in Boston is real nice</li>
          <li>Being on the T when it inevitably breaks down on you</li>
          <li>Complaining about the T :^)</li>
          <li>Top of Prudential Tower has a nice 360 view of everything</li>
          <li>Boston Public Library is a nice place to sit down and read/work</li>
          <li>Newbury Street</li>
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
        </ul>
        <h3>San Francisco Bay Area</h3>
        <h4>Food & Drink</h4>
        <ul>
          <li>Mensho Tokyo SF (Opens at 5, line up starts at 4:30)</li>
          <li>Michael's Grill and Tacqueria in Monterey</li>
          <li>Take out dim sum in Chinatown ($5 will get you quite a bit!)</li>
          <li>In n' Out</li>
          <li>Uji Time Dessert</li>
          <li>Hot Fudge Sundae @ Ghiardelli Square</li>
          <li>Boba Guys (Korean Banana Milk is my favourite)</li>
          <li>Bonchon Korean Fried Chicken</li>
          <li>Franciscan Crab</li>
          <li>Cha Cha Cha</li>
          <li>Super Duper Burgers</li>
          <li>The Counter Custom Burgers</li>
          <li>Chicken Meets Rice in Santa Clara</li>
        </ul>
        <h4>Activities</h4>
        <ul>
          <li>Skydiving at Monterey Bay</li>
          <li>Outside Lands Music Festival</li>
          <li>Checking out live music and art displays at Union Square</li>
          <li>Golden Gate Park</li>
          <li>Palo Alto Annual 4th of July Chili Cook-off</li>
          <li>Fourth of July Fireworks Spectacular with the San Francisco Symphony</li>
          <li>Crissy Field</li>
          <li>Wine tasting @ MJA Vineyards in Santa Cruz</li>
          <li>Touring the Googleplex in Mountain View</li>
          <li>Plenty of hiking trails to choose from</li>
        </ul>
        <h4>Cool places to chill</h4>
        <ul>
          <li>The space behind the Union Square Apple store</li>
          <li>Alamo Square Park</li>
          <li>Anywhere on Stanford campus</li>
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