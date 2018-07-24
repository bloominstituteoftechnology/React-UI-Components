import React from 'react';
import './Footer.css';

const FooterContainer = () => {
  return(
    <div className="row footer">
      <div className="col-sm-1"></div>
      <div className="col-sm-6 d-flex justify-content-between icon-col">
        <div className="comment">
          <i className="far fa-comment"></i>
          <span></span>
        </div>
        <div className="sync">
          <i className="fas fa-sync-alt"></i>
          <span>6</span>
        </div>
        <div className="heart">
          <i className="far fa-heart"></i>
          <span>4</span>
        </div>
        <div className="env">
          <i className="far fa-envelope"></i>
          <span></span>
        </div>
        
      </div>
      <div className="col-sm-5"></div>
      
    </div>
    
  )
}
export default FooterContainer