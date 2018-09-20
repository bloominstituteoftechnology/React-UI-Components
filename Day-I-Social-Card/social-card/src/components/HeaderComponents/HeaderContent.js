import React from 'react';
import './Header.css';



const HeaderContent = (props) => {
  return (
    <div className="header-content">
        <img src="./favicon.ico" alt="React icon"/>
        <h3>Get started with React</h3>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
        <p><span>reactjs.org</span></p>
    </div>
  )
}

export default HeaderContent

