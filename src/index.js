import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Auth0Provider } from "@auth0/auth0-react";


import {
  BrowserRouter as Router,
  
} from "react-router-dom";



const root = ReactDOM.createRoot(document.getElementById('root'));

const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientId = process.env.REACT_APP_AUTH_CLIENT_ID;

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
  >
  <Router>
    <Provider store={store} >
    <App />
    </Provider>
  </Router>
  </Auth0Provider>
);


reportWebVitals();
