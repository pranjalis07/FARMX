import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Auth0Provider } from "@auth0/auth0-react";
import FormContext from './components/Registration/farmer/formContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-z52ofxqqckqxvrsl.us.auth0.com"
    clientId="rXKz4rmCiIVf4n7sSjrw6UuV5bNJgMUu"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

    <FormContext>
      <App />
    </FormContext>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
