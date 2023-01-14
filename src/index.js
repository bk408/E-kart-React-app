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
root.render(
  <Auth0Provider
    domain="dev-283bsq5kkozknldw.us.auth0.com"
    clientId="Gu3GybEcHYfpyAecMwaaclZkgBTSWhvh"
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
