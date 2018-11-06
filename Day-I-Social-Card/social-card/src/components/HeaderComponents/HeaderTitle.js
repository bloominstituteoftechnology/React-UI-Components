import React from 'react';
import './Header.css';


function HeaderTitle(props){
  return(
    <React.Fragment>
      <h1 className='header'>{props.title}</h1>
      <p className='tags'>{props.tags}</p>
    </React.Fragment>
  );
}

export default HeaderTitle
