import React from 'react'; //Needed for React
import './Header.css';  //Needed for CSS
import HeaderContent from './HeaderContent'; //Bringing in the content
import ImageThumbnail from './ImageThumbnail'; //Bringing in the image
import HeaderTitle from './HeaderTitle'; //Bringing in the Title

//how to include className in to this syntax? This is the Syntax...

const HeaderContainer = props => 
     (
      <header>

        <div className= "container">
          
                  
<ImageThumbnail/>

<div className="title-content">

<HeaderTitle/>

        <HeaderContent/>


</div>


        </div>




      </header>
      
      
      
      
      
      );
  


export default HeaderContainer;