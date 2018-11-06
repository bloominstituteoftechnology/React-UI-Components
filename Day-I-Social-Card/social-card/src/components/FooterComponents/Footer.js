import React from 'react';
import './Footer.css';

const FooterAction = ({ iconClass, number, liked, retweeted, onClick }) => {
  const className =
    'Footer__action' +
    (liked
      ? ' Footer__icon--liked'
      : retweeted
        ? ' Footer__icon--retweeted'
        : '');
  return (
    <div className={className} onClick={onClick}>
      <span className="Footer__icon">
        <i className={iconClass} />
      </span>
      {number ? (
        <span className="Footer__number">
          {liked || retweeted ? number + 1 : number}
        </span>
      ) : (
        ''
      )}
    </div>
  );
};

class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      liked: false,
      retweeted: false
    };
  }

  handleClick(type) {
    return () =>
      this.setState({
        [type]: !this.state[type]
      });
  }

  render() {
    return (
      <div className="Footer py-1">
        <FooterAction iconClass="far fa-comment" />
        <FooterAction
          iconClass="fas fa-sync"
          number={6}
          retweeted={this.state.retweeted}
          onClick={this.handleClick('retweeted')}
        />
        <FooterAction
          iconClass="far fa-heart"
          number={4}
          liked={this.state.liked}
          onClick={this.handleClick('liked')}
        />
        <FooterAction iconClass="far fa-envelope" />
      </div>
    );
  }
}

export default Footer;
