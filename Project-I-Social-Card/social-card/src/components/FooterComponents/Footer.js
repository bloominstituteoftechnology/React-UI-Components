import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        icons: [
          {name: 'comment', url: 'https://i.imgur.com/bDi6wmh.png', alt: 'Reply icon'},
          {name: 'retweet', url: 'https://i.imgur.com/qNI4CTC.png', alt: 'Retweet icon', count: 0, active: false},
          {name: 'fave', url: 'https://i.imgur.com/CWkoyIk.png', alt: 'Favorite icon', count: 0, active: false},
          {name: 'msg', url: 'https://i.imgur.com/g45H4kZ.png', alt: 'Msg icon'},
        ],
      };
    }

    handleCountChange(icon){
      if (icon.hasOwnProperty('count')){
        this.setState((prevState) => {
          prevState.icons.forEach(x => {
            if (x.name === icon.name){
              x.active ? x.count-- : x.count++;
              x.active = !x.active;
            }
          });
        return {
          icons: prevState.icons,
        }
        });
      }
    }
  
    render(){
      return (
        <footer>
          {this.state.icons.map((x, y) => {
            return (
              <div className='footer-item' onClick={() => this.handleCountChange(x)} key={x.name}>
                <img src={x.url} alt={x.alt} />
                {x.count ? <span style={x.active ? {fontWeight: 'bold'} : null}>{x.count}</span> : null}
              </div>
            )
          })}
        </footer>
      );
    }
  }
  
  
  export default Footer; 