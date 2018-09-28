import React from 'react'; //Needed for React
import './Header.css';  //Needed for CSS
import HeaderContent from './HeaderContent'; //Bringing in the content
import ImageThumbnail from './ImageThumbnail';

//how to include className in to this syntax? This is the Syntax...

const HeaderContainer = props => 
     (
      <header>

<HeaderContent/>

<ImageThumbnail/>


      </header>
      
      
      
      
      
      );
  


export default HeaderContainer;