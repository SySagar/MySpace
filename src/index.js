import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain='dev-372pvjooyemy32ou.us.auth0.com'
    clientId='K4HmWJO3fN0R1DimA6dK8kUD4e0oFXc8'
    onRedirectCallback={window.location.origin}>
    <App />
    </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);


