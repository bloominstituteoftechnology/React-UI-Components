import React, { Component } from 'react';

class Retweet extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    const { count } = this.state;

    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: '#808080',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          width: '15%'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#808080"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="17 1 21 5 17 9" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <polyline points="7 23 3 19 7 15" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
        <div>{count}</div>
      </div>
    );
  }
}

export default Retweet;
