import React,{Component} from 'react';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme,Link, TextField, Snackbar} from '@material-ui/core';
import signUp from '../sign_Up/signUp.jsx';
import {login} from '../userService';
import './login.scss';

class Login extends Component {
    constructor() {
        super();
        this.state={
            email:'',
            EmailErr:'',
            password:'',
            PwdErr:'',
            login:'',
            loginErr:'',
            snackBarOpen: false,
            snackBarMessage:''
        }
       }

     handleEmail=(event)=> {
        console.log("event",event.target.value);
        if(((event.target.value).match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) || (event.target.value)=="") {
            this.setState( {
                email:event.target.value,
                EmailErr:""
            })
            console.log("Email is valid");
        }else {
            console.log("Email not valid");
            this.setState( {
                EmailErr:"Invalid Email"
            })
            
        }
    }

    handlepwd=(event)=> {
        console.log("event",event.target.value);
        if(((event.target.value).match(/^[a-zA-Z0-9!@#\$%\^&]{8,}$/)) || (event.target.value)=="") {
            this.setState( {
                password:event.target.value,
                PwdErr:""
            })
            console.log("Password is valid");
        }else {
            console.log("Password not valid");
            this.setState( {
                PwdErr:"Password must contained Minimum 8 characters, at least 1 letter, 1 number and 1 special character"
            })
            
        }
    }

    handleLogin = async () => {
        console.log("in login: ", this.state.fields);
        let loginData= {
            email: this.state.email,
            password: this.state.password
        }
        if(this.state.password !== undefined || this.state.email !== undefined) {
            await login(loginData).then((res) => {
                console.log("response: ", res);
                this.setState({
                    snackBarOpen: true,
                    snackBarMessage: "Login successfull"
                    // snackBarMessage: res.data.message
                })
            })
        } else {
            this.setState({
                snackBarOpen: true,
                snackBarMessage: "Login Failed"
            })
        }
    }

    render() {
        return(
            <div className="loginContainer">
                <Card className="LoginCardContainer">
                    <div>
                        <header>
                            <h2>Login</h2>
                        </header>
                    </div>
                    <div className="emailContainer">
                        <TextField className="email" placeholder="email" id="email" 
                        variant="outlined" onChange={this.handleEmail}
                        error={this.state.EmailErr} helperText={this.state.EmailErr}/>    
                    </div>
                    <div className="pwdContainer">
                        <TextField className="password" type="password" placeholder="password" id="password" 
                        variant="outlined" onChange={this.handlepwd}
                        error={this.state.PwdErr} helperText={this.state.PwdErr}/>    
                    </div>
                    <div className="loginButtonContainer">
                        <button className="login"  id="login" value="Login"
                        variant="outlined" onClick={this.handleLogin}
                        error={this.state.loginErr} helperText={this.state.loginErr}>Login</button>    
                    </div>

                    <div className="LinkText">
                        <Link to="../sign_Up/signUp">Forgot Password?</Link>
                    </div>
                    
                </Card>
                <Snackbar anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open = {this.state.snackBarOpen}
                autoHideDuration={5}
                message={this.state.snackBarMessage}>
                </Snackbar>
                <div className="LinkText">
                        <span>Don't have Account </span>
                        <Link to="/signUp">Sign Up</Link>
                    </div>
            </div>
        )
    }
}

export default withRouter(Login) ;