import React, { Component } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import WelcomePage from '../welcomePage/WelcomePage'
import LoginComponent from '../loginComponent/LoginComponent'
import HeaderComponent from '../header/HeaderComponent'
import LogoutComponent from '../logoutComponent/LogoutComponent'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'



class MusicApp extends Component{
    render(){
        return(
            <Router>
                <HeaderComponent/>
                <Switch>
                    <Route path = "/login" component = {LoginComponent}/>
                    <Route path = "/" exact component = {LoginComponent}/>
                    <AuthenticatedRoute path = "/welcome" component = {WelcomePage}/>
                    <Route path = "/logout" component = {LogoutComponent}/>
                    <Route  component = {ErrorComponent}/>
                </Switch>
             </Router>
        );
    }
}






function ErrorComponent(){
    
        return(
            <h1>An Error Occured. Please contact support.</h1>
        );
    
}





export default MusicApp;