require('./styles/app.scss');


import Logo from './components/logo.jsx';

import React from 'react';
import ReacDOM from 'react-dom';

ReacDOM.render(
  <div>
    <Logo/>
  </div>,
    document.getElementById('root')
)
