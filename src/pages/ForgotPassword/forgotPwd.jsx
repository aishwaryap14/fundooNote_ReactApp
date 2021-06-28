import React,{Component} from 'react';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme,Link, TextField, Snackbar} from '@material-ui/core';
import signUp from '../sign_Up/signUp.jsx';
import {forgotPwd} from '../../services/userService';
import './forgotPwd.scss';

class ForgotPassword extends Component {
    constructor() {
        super();
        this.state={
            email:'',
            EmailErr:'',
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


    handleNext = async () => {
        console.log("in frgt pwd async : ", this.state.email);
        let emailId= {
            email: this.state.email
        }
        if(this.state.email !== undefined) {
            await forgotPwd(emailId).then((res) => {
                console.log("response: ", res);
                this.setState({
                    snackBarOpen: true,
                    snackBarMessage: "Mail sent successfully"
                    // snackBarMessage: res.data.message
                })
            })
        } else {
            this.setState({
                snackBarOpen: true,
                snackBarMessage: "Unable to send mail"
            })
        }
    }

    render() {
        return(
            <div className="loginContainer">
                <Card className="LoginCardContainer">
                    <div>
                        <header>
                            <h2>Forget Password</h2>
                        </header>
                    </div>
                    <div className="emailContainer">
                        <TextField className="email" placeholder="email" id="email" 
                        variant="outlined" onChange={this.handleEmail}
                        error={this.state.EmailErr} helperText={this.state.EmailErr}/>    
                    </div>
                    <div className="loginButtonContainer">
                        <button className="login"  id="login" value="Login"
                        variant="outlined" onClick={this.handleNext}
                        error={this.state.loginErr} helperText={this.state.loginErr}>Next</button>    
                    </div>

                    <div className="LinkText">
                        <span>Register Your-self </span>
                        <Link to="../sign_Up/signUp">Sign Up</Link>
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

export default withRouter(ForgotPassword) ;