import React from 'react';
import './Footer.css'

const countUp = (function () {
  let count = 0;
  let counterObj = {
    innerCount: count,
    increment: function() {
      return ++this.innerCount;
    }
  };
  return counterObj;
})();

/* event handler
class CountDat extends React.Component() {
    handleEvent = () => {
      let likeCounter = root.querySelector('.heartCount');
      likeCounter.textContent = countUp.increment();
    };

}
*/

// <p className = 'heartCount'  onclick = {CountDat} > 0 </p>

const Footer = () => {




  return(
    <div className = 'footer-container'>

      <img className = 'commentIMG' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Comment_alt_font_awesome.svg/2000px-Comment_alt_font_awesome.svg.png' width=  '50px' height = '50px' alt = 'comment'/>

      <div className = 'recycle-container'>
        <img className = 'recycleIMG' src = 'https://images.vexels.com/media/users/3/136995/isolated/preview/799cbe2494ac10761303868f937c68d0-tiny-recycle-arrow-by-vexels.png' alt = 'recycle' />
        <p className = 'recycleCount'> 10 </p>
      </div>


      <div className = 'heart-container'>
        <img className = 'heartIMG' src = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg' alt = 'heart'/>
        // <p className = 'heartCount'  > 0 </p>
      </div>

      <div className = 'envelope-container'>
        <img className = 'envelopeIMG' src = 'https://images.vexels.com/media/users/3/136342/isolated/preview/521cf76c57318f95eee0ce8653a66c5c-mail-envelope-message-icon-by-vexels.png' alt = 'envelope' />
      </div>


    </div>

  )
};

export default Footer;
// const rootElement = document.getElementById('root');
// ReactDOM.render(<CountDat/>, rootElement);