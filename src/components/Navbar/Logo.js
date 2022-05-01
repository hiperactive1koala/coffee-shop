import React from 'react'
import coffee from '../../images/coffee 1.png';

const Logo = () => {
  return (
    <div>
        <img className='img' src={coffee} height={"60px"} alt="logo" />
    </div>
  )
}

export default Logo