import React, {useState} from 'react'

import './collections.css'
import arabica from '../../images/arabica-box.jpg'
import robusta from '../../images/robusta-box.jpg'
import liberica from '../../images/liberica-box.jpg'

const source1 = arabica;
const source2 = liberica;
const source3 = robusta;

const Collections = () => {
  const [money, setMoney] = useState("49.99");
  const [active, setActive] = useState('first')
  const clickHandler =(choosed, index) => {
    setMoney(choosed);
    let array = ['first','second','third'];
    setActive(array[index]);
  }

  return (
    <div id='collections'>
      <div className='carousel'>
        <div className="container">
          <input type="radio" name="slider" id="item-1" checked/>
          <input type="radio" name="slider" id="item-2"/>
          <input type="radio" name="slider" id="item-3"/>
          <div class="cards">
            <label className="card" for="item-1" id="song-1">
              <img src={source1} alt="song"/>
            </label>
            <label className="card" for="item-2" id="song-2">
              <img src={source2} alt="song"/>
            </label>
            <label className="card" for="item-3" id="song-3">
              <img src={source3} alt="song"/>
            </label>
          </div>
        </div>
      </div>
      <div className='col-info'>
        <div className='col-info-container'>

        <h1 className='col-info-header'>ARABICA</h1>
        <p className='col-info-p'>To enjoy its delicate floavour,buy the wole roasted beans and grind them yourself.</p>
        <p className='col-info-p money'>$ {money}</p>
        <div className='col-bttn-wraper'>
          <button className={`col-bttn ${active==='first' ? "col-active-bttn" : ""}`} onClick={()=> clickHandler('49.99', 0)}>0.5 kg</button>
          <button className={`col-bttn ${active==='second' ? "col-active-bttn" : ""}`} onClick={()=> clickHandler('89.99',1)}>1 kg</button>
          <button className={`col-bttn ${active==='third' ? "col-active-bttn" : ""}`} onClick={()=> clickHandler('119.99',2)}>1.5kg</button>
        </div>
        <button className='col-buy'>BUY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Collections