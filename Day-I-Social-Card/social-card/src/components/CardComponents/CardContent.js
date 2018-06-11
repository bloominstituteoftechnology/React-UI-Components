import React from 'react'
import './Card.css'

const CardContent = () => {
  return (
    <div className='CardContent'>
      <div className='Text-Content'>
        <span>
          {' '}
          <strong>Get started with React</strong>
        </span>
        <p>
          React makes it painless to create interactive Uls. Design simple views
          for each state in your application.
        </p>
        <a href='reactjs.org'>reactjs.org</a>
      </div>
    </div>
  )
}

export default CardContent
