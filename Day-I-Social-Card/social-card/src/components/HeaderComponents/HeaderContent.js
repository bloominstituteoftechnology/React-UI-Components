import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderBody from './HeaderBody';


const HeaderContent = props => {
  return (
    <div className="HeaderContent">
      <HeaderTitle 
        displayName={props.displayName} 
        username={props.username}
        timestamp={props.timestamp}/>
      <HeaderBody body={props.body}/>

    </div>
  )
}

export default HeaderContent;