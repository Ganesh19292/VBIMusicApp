import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Link} from 'react-router-dom'
import AuthenticationService from '../musicApp/AuthenticationService';

class HeaderComponent extends Component{
    
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log(isUserLoggedIn)
        return(
            <header>
            <nav className="navbar navbar-dark bg-dark">
            <ul className = "navbar-nav">
                
                </ul>
            <div className = "navbar-brand"><b>VBI Music App</b> </div>
            <ul className = "navbar-nav">
                
                {isUserLoggedIn && <li className = "navbar-nav-link"><Link to="/logout" onClick={AuthenticationService.logOut}>Logout</Link></li>}
                {!isUserLoggedIn && <li className = "navbar-nav-link"><Link to="/login" onClick={AuthenticationService.isUserLoggedIn}>Login</Link></li>}
                    
            </ul>
            </nav>
            </header> 
        );
    }
}

export default withRouter(HeaderComponent);