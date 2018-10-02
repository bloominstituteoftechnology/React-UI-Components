import React from "react";
import "./Footer.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fab)

const Footer = () => {
  return (
    <div className= "icons">
    <img src="https://cdn2.iconfinder.com/data/icons/asic/50/.svg-7-20.png" alt="comment"/>
    <img src="https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/refresh-20.png" alt="refresh"/>
    <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-20.png" alt="likes"/>
    <img src="https://cdn3.iconfinder.com/data/icons/lexter-flat-outline-apps/45/envelope_outline-20.png" alt="mail"/>

</div>

)};

export default Footer;
