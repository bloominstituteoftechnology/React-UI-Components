import React from 'react';
import './Footer.css'


const e = React.createElement;

const countUp = (function () {
  let count = 0;
  let counterObj = {
    innerCount: count,
    increment: function() {
      return ++this.innerCount;      // using implicit binding
    }
  };
  return counterObj;

})();

countUp.increment();






class CountLikes extends React.Component{
  constructor(props){
    super(props);
    let likeCounter = root.querySelector('.heartCount');
    likeCounter.innerHTML = countUp.increment();
  }

}





const Footer = () => {
  return(
    <div className = 'footer-container'>

      <img className = 'commentIMG' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Comment_alt_font_awesome.svg/2000px-Comment_alt_font_awesome.svg.png' width=  '50px' height = '50px' />

      <div className = 'recycle-container'>
        <img className = 'recycleIMG' src = 'https://images.vexels.com/media/users/3/136995/isolated/preview/799cbe2494ac10761303868f937c68d0-tiny-recycle-arrow-by-vexels.png'  />
        <p className = 'recycleCount'> 10 </p>
      </div>


      <div className = 'heart-container'>
        <img className = 'heartIMG' src = 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Ei-heart.svg'/>
        <p className = 'heartCount'> 0 </p>
      </div>

      <div className = 'envelope-container'>
        <img className = 'envelopeIMG' src = 'https://images.vexels.com/media/users/3/136342/isolated/preview/521cf76c57318f95eee0ce8653a66c5c-mail-envelope-message-icon-by-vexels.png'  />
      </div>


    </div>

  )
};

export default Footer;