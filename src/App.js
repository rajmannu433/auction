import './App.css';
import React from 'react';

import Page from './page';
import Login from './login/login';

import { MsalProvider } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from './authConfig';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Page} />
     
      
    </Switch>
  );
};

export default function App() {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <MsalProvider instance={msalInstance}>
            {navigator.onLine && <Pages />}
            {/* {!navigator.onLine && <NoInternet />} */}
          </MsalProvider>
        </Router>
      </div>
      </div>
  );
  }






