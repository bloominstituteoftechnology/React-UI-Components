import React from 'react';
import './Footer.css';


const Footer = () => {
	return (
		<div className='Footer'><div className="icon1"></div>
		<div className="icon2"></div><div className="icon3"></div><div className="icon4"></div></div>
        
	)
};
let icon_1 = document.querySelector(".icon1");
/* icon1.addEventListener("click" , icon1Handler); */
console.log("valueof icon_1 is:" + icon_1);
function icon1Handler() {


}
export default Footer;
