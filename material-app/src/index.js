import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalesProvider} from './Providers/Context';
import App from './App';


ReactDOM.render(
  <GlobalesProvider>
    <App />
  </GlobalesProvider>,
  document.getElementById('root')
);


