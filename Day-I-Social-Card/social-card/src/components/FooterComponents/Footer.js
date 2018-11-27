import React from 'react';
import './Footer.css';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      icons: [
        {name: 'convo', url: 'https://i.imgur.com/bDi6wmh.png', alt: 'Reply icon'},
        {name: 'retweet', url: 'https://i.imgur.com/qNI4CTC.png', alt: 'Retweet icon', count: 6},
        {name: 'fave', url: 'https://i.imgur.com/CWkoyIk.png', alt: 'Favorite icon', count: 4},
        {name: 'msg', url: 'https://i.imgur.com/g45H4kZ.png', alt: 'Msg icon'},
      ],
    };
  }

  render(){
    return (
      <footer>
        {this.state.icons.map(x => {
          return (
            <div className='footer-item'>
              <img src={x.url} alt={x.alt} />
              {x.count ? <span>{x.count}</span> : null}
            </div>
          )
        })}
      </footer>
    );
  }
}

export default Footer;