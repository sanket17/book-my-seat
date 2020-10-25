import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect';
import store from 'store';

import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/scss/bootstrap.scss';
import './theme/css/style.scss';

store.set('users', []);
store.set('loginUser', {});
store.set('reserved', {});

const app = (
  <HttpsRedirect>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HttpsRedirect>
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
