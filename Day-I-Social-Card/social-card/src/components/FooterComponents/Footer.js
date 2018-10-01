import React from 'react';
import './Footer.css';





const FooterContainer = (props) => {
  const currentIcons = ["far fa-comment", "fas fa-sync-alt", "fas fa-heart", "fas fa-envelope"];

  const iconList = currentIcons.map(items => {
    return (
      <i className={items}></i>
    )
  })

  return (
    <div className="footerContainer">
      {iconList}
    </div >
  )
}

export default FooterContainer;