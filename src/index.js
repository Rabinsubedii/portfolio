import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap';
import '../node_modules/react-bootstrap/dist/react-bootstrap.js';
ReactDOM.render(
  <React.StrictMode>

    <App />

   
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
