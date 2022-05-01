import React from 'react'

import {Svg} from '../../images/svgexporter'
import cup from '../../images/cup.png'
import bean from '../../images/bean.png'
import emptybean from '../../images/emptybean.png'
import moneyBag from '../../images/moneyBag.png'
import emptyMoneyBag from '../../images/emptyMoneyBag.png'
import cofeeCup from '../../images/coffeeCup.png'
import emptyCofeeCup from '../../images/emptyCofeeCup.png'
import './types.css'

const Types = () => {
  return (
    <div id='types' className='types'>
      <h3 className='types-header'>Global Coffee Consuption</h3>
      <div className='types-main'>
        <div className='types-images'>
          <Svg/>
          <img src={cup} alt="cofee-cup" />
        </div>
        <div className='type-cards'>
          <div className='type-card arabica'>
            <h1>ARABICA</h1>
            <p className='p'>OVAL-SHAPED, FLAT, DARK AND CREASY</p>
            <div className='line'></div>
            <h3>TASTE:</h3>
            <p className='p' id='explanation'>Delicate, smooth fruity and sweet, sligthly acidic</p>
            <h2>AROMA:</h2>
            <div>
              <img src={bean} alt="filledbean" />
              <img src={bean} alt="filledbean" />
              <img src={bean} alt="filledbean" />
              <img src={bean} alt="filledbean" />
              <img src={emptybean} alt="emptybean" />
            </div>
            <h2>PRICE:</h2>
            <div>
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={emptyMoneyBag} alt="" />
              <img className='pad' src={emptyMoneyBag} alt="" />
            </div>
            <h2>CAFEEINE CONTENT:</h2>
            <div>
              <img className='pad' src={cofeeCup} alt="" />
              <img className='pad' src={cofeeCup} alt="" />
              <img className='pad' src={emptyCofeeCup} alt="" />
              <img className='pad' src={emptyCofeeCup} alt="" />
              <img className='pad' src={emptyCofeeCup} alt="" />
            </div>
          </div>
          <div className='type-card robusta'>
          <h1>ROBUSTA</h1>
            <p className='p'>CIRCULAR-SHAPED,PALE & DRY</p>
            <div className='line'></div>
            <h3>TASTE:</h3>
            <p className='p' id='explanation'>Bitter,earthy,grainy,acidic, with nutty and chocolately notes</p>
            <h2>AROMA:</h2>
            <div>
              <img src={bean} alt="filledbean" />
              <img src={bean} alt="filledbean" />
              <img src={bean} alt="filledbean" />
              <img src={emptybean} alt="emptybean" />
              <img src={emptybean} alt="emptybean" />
            </div>
            <h2>PRICE:</h2>
            <div>
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={emptyMoneyBag} alt="" />
              <img className='pad' src={emptyMoneyBag} alt="" />
              <img className='pad' src={emptyMoneyBag} alt="" />
            </div>
            <h2>CAFEEINE CONTENT:</h2>
            <div>
              <img className='pad' src={cofeeCup} alt="" />
              <img className='pad' src={cofeeCup} alt="" />
              <img className='pad' src={cofeeCup} alt="" />
              <img className='pad' src={cofeeCup} alt="" />
              <img className='pad' src={emptyCofeeCup} alt="" />
            </div>
          </div>
          <div className='type-card liberica'>
          <h1>ARABICA</h1>
            <p className='p'>OVAL-SHAPED, FLAT, DARK AND CREASY</p>
            <div className='line'></div>
            <h3>TASTE:</h3>
            <p className='p' id='explanation'>Delicate, smooth fruity and sweet, sligthly acidic</p>
            <h2>AROMA:</h2>
            <div>
              <img src={bean} alt="filledbean" />
              <img src={bean} alt="filledbean" />
              <img src={bean} alt="filledbean" />
              <img src={bean} alt="filledbean" />
              <img src={emptybean} alt="emptybean" />
            </div>
            <h2>PRICE:</h2>
            <div>
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={moneyBag} alt="" />
              <img className='pad' src={moneyBag} alt="" />
            </div>
            <h2>CAFEEINE CONTENT:</h2>
            <div>
              <img className='pad' src={cofeeCup} alt="" />
              <img className='pad' src={cofeeCup} alt="" />
              <img className='pad' src={emptyCofeeCup} alt="" />
              <img className='pad' src={emptyCofeeCup} alt="" />
              <img className='pad' src={emptyCofeeCup} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Types