import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

function Footer({ items }) {
  const Items = items.map(item => <li key={item}>{item}</li>);

  return (
    <footer>
      <ul>{Items}</ul>
    </footer>
  );
}

Footer.propTypes = {
  items: PropTypes.array,
};

export default Footer;
