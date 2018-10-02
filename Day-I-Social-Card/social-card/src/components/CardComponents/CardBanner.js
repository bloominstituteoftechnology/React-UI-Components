import React from 'react'
import './Card.css'

const CardBanner = (props) => {
  console.log('in cardbanner')
  return (
    <div className='CardBanner'>
      <a href='https://reactjs.org'>
        <img
          src={'https://ibin.co/3wnC6SgIOJud.png'}
          alt='banner logo'
          className='img-fluid'
          onClick={props.handleClick}
        />
      </a>
    </div>
  )
}
export default CardBanner
