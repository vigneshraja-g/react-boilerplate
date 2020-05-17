import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import '@babel/polyfill';
import './styles.css';
import App from './App';
import store from './store';
import DefaultErrorBoundary from './DefaultErrorBoundary';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <DefaultErrorBoundary>
    <BrowserRouter>
      {/* <React.StrictMode> */}
      <Provider store={store}>
        <App />
      </Provider>
      {/* </React.StrictMode> */}
    </BrowserRouter>
  </DefaultErrorBoundary>,
  document.getElementById('root')
);
