import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer'
import Footer from './components/FooterComponents/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faSyncAlt,faHeart, faEnvelope,faComments} from '@fortawesome/free-solid-svg-icons'

library.add(faComment, faSyncAlt, faHeart, faEnvelope,faComments)

const App = () => {
  return (
    <div className='appContainer'>
   <HeaderContainer/>
   <CardContainer/>
   <Footer/>
   </div>
  );
};

export default App;
