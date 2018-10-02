import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faComment,
  faSync,
  faHeart,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

// import styling
import './Footer.css'

library.add(faComment, faSync, faHeart, faEnvelope)

const Footer = () => (
  <div className="footer-container">
    <FontAwesomeIcon icon={faComment} />
    <FontAwesomeIcon icon={faSync} />
    <FontAwesomeIcon icon={{prefix: "far", iconName: "fa-heart"}} />
    <FontAwesomeIcon icon={faHeart} />
    <FontAwesomeIcon icon={faEnvelope} />
  </div>
)

export default Footer
