import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from "./serviceWorker";

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
  
root.render(<div className='header'>Hello</div>);

serviceWorker.register();