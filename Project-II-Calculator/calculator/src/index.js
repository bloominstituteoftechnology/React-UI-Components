import React from 'react';
import ReactDOM from 'react-dom';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas, faDivide, faTimes, faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';


import './index.css';
import App from './App';
library.add(fas, faDivide, faTimes, faPlus, faMinus);

ReactDOM.render(<App />, document.getElementById('root'));
