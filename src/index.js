import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AlertState from './context/Alert/AlertState';


ReactDOM.render(
  <React.StrictMode>
    <AlertState>
      <App />
    </AlertState>
  </React.StrictMode>,
  document.getElementById('root')
);
