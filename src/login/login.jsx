import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { loginRequest } from '../authConfig';
import {
    AuthenticatedTemplate,
    UnauthenticatedTemplate,
    useMsal,
    useIsAuthenticated,
} from '@azure/msal-react';
import ABILogo from '../ab inbev.png'
import { Button } from 'react-bootstrap';


const Login = () => {
    const history = useHistory();

    const { instance } = useMsal();

    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        console.log(`AUTH LOG = ${isAuthenticated}`);
        if (isAuthenticated) history.push('/home');
    }, [isAuthenticated]);

    return (
        !isAuthenticated && (
            <div className="login-page">
                <div className="container">
                    <div className="row">
                        <div className="col col-login mx-auto">
                            <div className="text-center mb-6">
                                <img
                                    src={ABILogo}
                                    className="h-3"
                                    alt="AB InBev Logo"
                                    style={{ paddingRight: '0px' }}
                                />
                                
                            </div>

                            <form className="card" style={{textAlign:'center'}}>
                                <div className="card-body p-6">
                                    <div className="card-title text-center">
                                        <h4>APAC 60KMT</h4>
                                    </div>

                                    {/* <div className="form-footer"> */}
                                        <Button
                                            className="btn btn-abi-custom btn-block"
                                            onClick={() => instance.loginRedirect(loginRequest)}
                                        >
                                            Login
                                        </Button>
                                    </div>
                                {/* </div> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Login;