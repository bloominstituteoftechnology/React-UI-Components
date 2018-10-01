import React from 'react'
import './Card.css'

const CardContent = (props) => {
  return (
    <div className='CardContent'>
      <a href='https://www.reactjs.org'>
        <div className='Text-Content'>
          <span>
            {' '}
            <strong>Get started with React</strong>
          </span>
          <p>
            React makes it painless to create interactive Uls. Design simple
            views for each state in your application.
          </p>
          <span>reactjs.org</span>
        </div>
      </a>
    </div>
  )
}

export default CardContent
