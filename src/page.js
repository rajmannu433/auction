import './App.css';
import React from 'react';
import Header from './components/header'
import BasicInfo from './components/basicInformation'
import ReportingFactors from './components/reportingFactors'
import CategorizationInformation from './components/categorizationInformation'
import Rules from './components/rules'
import AddedValue from './components/addedValue'
import Introduction from './components/instruction'
import SubDate from './components/subDate'
import {  useHistory } from 'react-router-dom';
import Supplier from './components/supplier'

import { MsalAuthenticationTemplate, useMsal, useAccount } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { loginRequest } from './authConfig';
import TopBar from './components/topBar';

import { BrowserRouter as Router, Route, Link, Switch,NavLink ,
  HashRouter } from "react-router-dom";


const Page = (props) => {

    const authRequest = {
        ...loginRequest,
      };
      const{instance}=useMsal();

    const history = useHistory();

  return (
    <MsalAuthenticationTemplate interactionType={InteractionType.Redirect} authenticationRequest={authRequest}>
    <HashRouter>
    <div className="App">

      <header className="header-top">
        <Header />
      </header>

      <form>
        {/* <div className="container-fluid row" style={{backgroundColor:'#B11F24'}}>
          <div className="col">
          <button type="button"  style={{backgroundColor:'#FF8C00',position:'relative',top:5}} class="btn btn-primary btn-lg">Click here to Submit</button>
          </div>
          <div className="col" style={{display:'flex',flexDirection:'horizontal'}}>
              <div style={{position:'relative',left:-20}}>
            <SubDate />
            </div>
            <div>
            <button type="button" class="btn btn-warning" style={{position:'relative',top:10}} onClick={() => instance.logout()}>Logout</button>
            </div>
          </div>
          
        </div> */}
        <TopBar />

        {/* <div className="container">
          
          <div className="row mar-lg">

            <div className="col">
              <div className="container-fluid">
                <BasicInfo />
              </div>

              <br/><br/><br/>
              <div className="container-fluid">
                    <CategorizationInformation />
              </div>

              <br/><br/><br/>
              <div className="container-fluid">
              <AddedValue />
            </div>

            <br/><br/><br/>
            <div className="container-fluid">
              <Introduction />
            </div>

            </div>
            
            <div className="col">
              
              <div className="container-fluid">
                <ReportingFactors />
              </div>

              
              <br/><br/><br/>
              <div className="container-fluid">
                <Rules />
              </div>

            </div>
          </div>

          
          </div> */}


      
      </form>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{backgroundColor:'#B11F24'}}>
      <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page"  to="/">Home</Link>
          
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/rules">Rules</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/supplier">Supplier</Link>
        </li>
       
        
      </ul>
      
      </div>
      </div>
      </nav>

       {/* <Link to="/">Home</Link>
        <Link to="/rules">Rules</Link> */}
        
        
        <Switch>
        <Route path="/supplier"><Supplier/></Route>
        <Route path="/rules"><Rules/></Route>
        <Route path="/" ><Home/></Route> 
        
        </Switch>   
        
        
    
    </div>
    
    </HashRouter>
    </MsalAuthenticationTemplate>
  );
       
}

function Home() {
    return(
    <div className="container">
            
            <div className="row mar-lg">
  
              <div className="col">
                <div className="container-fluid">
                  <BasicInfo />
                </div>
  
                <br/><br/><br/>
                <div className="container-fluid">
                      <CategorizationInformation />
                </div>
  
                <br/><br/><br/> 
                 <div className="container-fluid">
                <AddedValue />
              </div>
             </div>
              
              <div className="col">
                
                <div className="container-fluid">
                  <ReportingFactors />
                </div>
  
                {/* <div className="container">
                  <Rules />
                </div> */}
                <br/><br/><br/>
                <div className="container-fluid">
                <Introduction />
              </div>
              </div>
            </div>
            {/* <button type="button" class="btn btn-success" id='btnd'>Success</button> */}
            
           
            </div>
             
    )
  
  }

  const styles = {
    submitButton: {
      marginLeft:20,
      marginTop:5,
      position:"relative",
      height:50,
      backgroundColor:"#d2691e",
      fontWeight: 1000,
      boxShadow: '4px 2px 2px #888888',
  
    }
  }

  export default Page;