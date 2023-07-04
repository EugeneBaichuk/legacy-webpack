import React from 'react';
import ReactDOM from 'react-dom/client';
import * as serviceWorker from "./serviceWorker";
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
  
root.render(<App />);

serviceWorker.register();