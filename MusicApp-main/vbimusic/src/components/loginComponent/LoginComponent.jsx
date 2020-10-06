import React, { Component } from 'react';
import AuthenticationService from '../musicApp/AuthenticationService.js'



class LoginComponent extends Component {
    
    constructor(){
        super();
        this.state={
            userName:'',
            password:''
        }
        this.handleChange= this.handleChange.bind(this)  
        this.loginClick = this.loginClick.bind(this) 
    }
    loginClick(event){
        if(this.state.userName==='test'){
            AuthenticationService.registerSuccessfulLogin(this.state.userName,this.state.password);
        this.props.history.push(`/welcome/${this.state.userName}`)
        }
    }
    handleChange(event){
        this.setState(
            {
                [event.target.id]: event.target.value
            })
    }

    

    render(){
        
        return (
            
            <div className="card col-9 col-lg-4 login-card mt-2 hv-center">
                <nav className="navbar justify-content-center navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white">
            <span className="h3">Login</span>
            </div>
        </nav>
            <form><br/>
                <div className="form-group text-left">
              <b>  User Name: </b>
                <input type="text" 
                       className="form-control" 
                       id="userName" 
                       aria-describedby="userName" 
                       placeholder="Enter User Name"
                       value={this.state.userName}
                       onChange={this.handleChange}
                />
               </div>
                <div className="form-group text-left">
                   <b>Password:</b>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                
                <button 
                className="btn btn-primary"
                    onClick={this.loginClick}>
                    Login
                </button><br/><br/>
            </form>
        </div>
        
        );

    
        }
}

export default LoginComponent;