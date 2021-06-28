import React,{Component} from 'react';
import {withRouter}  from 'react-router-dom';
import {Card, createMuiTheme,Link, TextField, Snackbar} from '@material-ui/core';
import {resetPassword} from '../../services/userService';
class ResetPassword extends Component {
    constructor() {
        super();
        this.state={
            ConPassword:'',
            ConPwdErr:'',
            newPassword:'',
            PwdErr:'',
            resetPwdErr:'',
            resetPwd:'',
            snackBarOpen: false,
            snackBarMessage:'',
            token:''
        }
       }

    handleConPwd=(event)=> {
        console.log("event",event.target.value);
        if(((event.target.value).match(/^[a-zA-Z0-9!@#\$%\^&]{8,}$/)) || (event.target.value)=="") {
            this.setState( {
                ConPassword:event.target.value,
                ConPwdErr:""
            })
            console.log("password is valid");
        }else {
            console.log("password not valid");
            this.setState( {
                ConPwdErr:"Invalid password"
            })
            
        }
    }

    handlepwd=(event)=> {
        console.log("event",event.target.value);
        if(((event.target.value).match(/^[a-zA-Z0-9!@#\$%\^&]{8,}$/)) || (event.target.value)=="") {
            this.setState( {
                newPassword:event.target.value,
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

    handleResetpwd = async () => {
        console.log("in reset pwd : ", this.state.fields);
        let resetPwdData= {
            // ConPassword: this.state.ConPassword,
            newPassword: this.state.newPassword
        }
        if( this.state.newPassword !== undefined) {
            await resetPassword(resetPwdData).then((res) => {
                console.log("response: ", res);
                this.setState({
                    snackBarOpen: true,
                    snackBarMessage: "Password reset success"
                    // snackBarMessage: res.data.message
                })
            })
        } else {
            this.setState({
                snackBarOpen: true,
                snackBarMessage: "Password reset Failed"
            })
        }
    }

    render() {
        return(
            <div className="loginContainer">
                <Card className="LoginCardContainer">
                    <div>
                        <header>
                            <h2>Reset Password</h2>
                        </header>
                    </div>
                    <div className="pwdContainer">
                        <TextField className="newPassword" placeholder="password" id="newPassword" 
                        variant="outlined" onChange={this.handlepwd}
                        error={this.state.PwdErr} helperText={this.state.PwdErr}/>    
                    </div>
                    <div className="confirmPwdContainer">
                        <TextField className="ConPassword" placeholder="Confirm password" id="ConPassword" 
                        variant="outlined" onChange={this.handleConPwd}
                        error={this.state.ConPwdErr} helperText={this.state.ConPwdErr}/>    
                    </div>
                    <div className="resetPwdContainer">
                        <button className="resetPwd"  id="resetPwd" value="resetPwd"
                        variant="outlined" onClick={this.handleResetpwd}
                        error={this.state.resetPwdErr} helperText={this.state.resetPwdErr}>Change Password</button>    
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
                {/* <div className="LinkText">
                        <span>Don't have Account </span>
                        <Link to="/signUp">Sign Up</Link>
                    </div> */}
            </div>
        )
    }
}

export default withRouter(ResetPassword) ;