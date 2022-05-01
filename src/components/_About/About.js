import React from 'react'

import './about.css'
import cofee from '../../images/coffee-info.png'
const About = () => {
  return (
    <div id='about' className='about'>
      <div className='row'>
        <div className='column'>
          <h1>Exactly What Is Coffee?</h1>
          <p>Coffee beans are sourced from coffee plants, members of the botanical genus Coffea. The beans are found inside the plant’s fruit, which are known as cherries; it takes about a year for a cherry to mature and ripen so its bean can be harvested.</p>
          <p>For that reason they can only be productively grown in temperate areas of the world between the Tropic of Cancer and Tropic of Capricorn; in the Western Hemisphere, that’s between Central Mexico in the north and the Amazon rain forest in the South.</p>
          <p>The plants (which are actually coffee trees trimmed to a smaller size) require mild temperatures, sufficient shade and lots of rain.</p>
          <p>Coffee is slightly acidic and somewhat bitter, it’s known to have health benefits, it acts as a mild stimulant because of its caffeine content, and it’s the second most-popular beverage in the world (right behind tea, and not counting water).</p>
        </div>
        <img className='about-img' src={cofee} alt="info" />
      </div>
    </div>
  )
}

export default About