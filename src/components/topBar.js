import './App.css';
import React from 'react';
import SubDate from './subDate';
import { MsalAuthenticationTemplate,  useAccount } from '@azure/msal-react';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from '../authConfig';


const TopBar = () =>{
    const{instance}=useMsal();
    return(
        <div className="container-fluid row" style={{backgroundColor:'#B11F24',height:'10vh'}}>
        <AuthenticatedTemplate>
          <div className="col">
          <button type="button"  style={{backgroundColor:'#FF8C00',position:'relative',top:5}} class="btn btn-primary btn-lg">Click here to Submit</button>
          </div>
          </AuthenticatedTemplate>
          
          <div className="col" style={{display:'flex',flexDirection:'horizontal'}}>
          <AuthenticatedTemplate>
              <div style={{position:'relative',left:-20}}>
            <SubDate />
            </div>
            </AuthenticatedTemplate>
        <AuthenticatedTemplate>
            <div>
            <button type="button" class="btn btn-warning" style={{position:'relative',top:10}} onClick={() => instance.logout()}>Logout</button>
            </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
            <button type="button" class="btn btn-warning" style={{position:'relative',top:10,height:'40px'}} onClick={() => instance.loginRedirect(loginRequest)}>LogIn</button>
        </UnauthenticatedTemplate>

          </div>
          
        </div>

    )
}

export default TopBar;