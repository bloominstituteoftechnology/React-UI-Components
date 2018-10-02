import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faHeart, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';
 
library.add(faEnvelope, faHeart, faComment, faRetweet);

ReactDOM.render(<App />, document.getElementById('root'));
