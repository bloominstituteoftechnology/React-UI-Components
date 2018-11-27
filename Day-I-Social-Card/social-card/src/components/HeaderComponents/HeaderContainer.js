import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail.js';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';

class HeaderContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Lambda School',
      handle: '@LambdaSchool',
      avatar: 'https://ibin.co/3whrpKSBbZ81.png',
      content: "Let's learn React by building simple interfaces with components.  Don't try to overthink it, just keep it simple and have fun.  Once you feel comfortable using components you are well on your way to mastering React!",
    };
  }
  render(){
    return (
      <div className='header-container'>
        <ImageThumbnail url={this.state.avatar}/>
        <div className='header-material'>
          <HeaderTitle name={this.state.name}
            handle={this.state.handle}
          />
          <HeaderContent content={this.state.content}/>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;