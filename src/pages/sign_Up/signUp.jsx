import {Card, createMuiTheme, Link, TextField, Snackbar} from '@material-ui/core';
import React,{Component} from 'react';
import {signUp} from '../../services/userService';
import './signUp.scss';
const theme = createMuiTheme( {
    overrides: {
        
        MuiFormControl: {
           
                height: "30px",
                padding: "10px"
            
        },
       
    },
});

class SignUp extends Component {
    constructor() {
        super();
        this.state={
            firstName:'',
            fName:'',
            firstNameErr:'',
            error: {},
            LastNameErr:'',
            lastName:'',
            email:'',
            EmailErr:'',
            PwdErr:'',
            password:'',
            ConPwdErr:'',
            ConPwd:'',
            signupData:{},
            snackBarOpen: false,
            snackBarMessage:''
        }
    }

    handleFirstName=(event)=> {
        console.log("event",event.target.value);
        if(((event.target.value).match(/^[a-zA-Z\\s]{2,}$/)) || (event.target.value)=="") {
            this.setState( {
                firstName:event.target.value,
                firstNameErr:""
            })
            console.log("First name is valid");
        }else {
            console.log("First name not valid");
            this.setState( {
                firstNameErr:"Invalid name"
            })
            
        }
    }

    handleLastName=(event)=> {
        console.log("event",event.target.value);
        if(((event.target.value).match(/^[a-zA-Z\\s]{2,}$/)) || (event.target.value)=="") {
            this.setState( {
                lastName:event.target.value,
                LastNameErr:""
            })
            console.log("Last name is valid");
        }else {
            console.log("Last name not valid");
            this.setState( {
                LastNameErr:"Invalid Last Name"
            })
            
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
    handleConPwd=(event)=> {
        console.log("event",event.target.value);
        if((event.target.value) == (this.state.password) || (event.target.value)=="") {
            this.setState( {
                conPwd:event.target.value,
                ConPwdErr:""
            })
            console.log("confirm pwd is valid");
        
            
        }
    }

    handleSignUp = async() => {
        console.log("in Sign Up: ", this.state.fields);
        let signupData= {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            service: "advance"
        };
        if( this.state.email !== undefined || 
             this.state.firstName !== undefined ||
             this.state.lastName !== undefined ||
             this.state.password !== undefined) 
            {
                console.log("in if block before await",this.state.email);
            await signUp(signupData).then((res) => {
                console.log("in if block");
                console.log("response: ", res);
                this.setState({
                    snackBarOpen: true,
                    snackBarMessage: "sign up success"
                    // snackBarMessage: res.data.message
                })
            })
        } 
        else {
            console.log("in else block");
            this.setState({
                snackBarOpen: true,
                snackBarMessage: "Sign Up Failed"
            })
        }
    }

    render() {
        return(
            <div className="SignUpContainer">
                <Card className="cardContainer">
                    <div>
                        <header>
                            <h2>Sign Up</h2>
                        </header>
                    </div>
                    <div className="nameContainer">
                        <TextField className="firstname" placeholder="firstName" id="firstname" 
                        variant="outlined" onChange={this.handleFirstName}
                        error={this.state.firstNameErr} helperText={this.state.firstNameErr}/>
                        
                        <TextField className="lastname" placeholder="lastname" id="lastname" 
                        variant="outlined" onChange={this.handleLastName}
                        error={this.state.LastNameErr} helperText={this.state.LastNameErr}/>
                    </div>
                    <div className="emailContainer">
                        <TextField className="email" placeholder="email" id="email" 
                        variant="outlined" onChange={this.handleEmail}
                        error={this.state.EmailErr} helperText={this.state.EmailErr}/>    
                    </div>
                    <div className="pwdContainer">
                        <TextField className="password" placeholder="password" id="password" 
                        variant="outlined" onChange={this.handlepwd}
                        error={this.state.PwdErr} helperText={this.state.PwdErr}/>    
                    </div>
                    <div className="confirmPwdContainer">
                        <TextField className="conPwd" placeholder="Confirm Password" id="conPwd" 
                        variant="outlined" onChange={this.handleConPwd}
                        error={this.state.ConPwdErr} helperText={this.state.ConPwdErr}/>    
                    </div>
                    <div className="signUpButtonContainer">
                        <button className="signup"  id="signup" value="Sign Up"
                        variant="outlined" onClick={this.handleSignUp}
                        error={this.state.SignUpErr} helperText={this.state.SignUpErr}>Sign Up</button>    
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
                        <span>Already have an Account </span>
                        <Link to="/login">Login</Link>
                    </div>
            </div>
        )
    }
}

export default SignUp;