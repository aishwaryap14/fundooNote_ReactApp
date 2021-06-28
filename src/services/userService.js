import axios from 'axios';
import UserApiConstatnts from '../apiConstants/UserApiConstatnts'

export function signUp (signupData) {
    try {
        console.log("signUp data: ", signupData);
        const response = axios.post(process.env.REACT_APP_BASE_URL + UserApiConstatnts.signUp, signupData);
        console.log("user service response: ", response);
        return response;
    } catch (error) {
        return error;
    }
}

export function login (loginData) {
    try {
        console.log("Login data: ", loginData);
        console.log("uRL: ", process.env.REACT_APP_BASE_URL + UserApiConstatnts.login);
        const response = axios.post(process.env.REACT_APP_BASE_URL + UserApiConstatnts.login, loginData);
        
        return response;
    } catch (error) {
        return error;
    }
}

export function forgotPwd(emailId) {
    try {
        console.log("forgotPwd data: ", emailId);
        const response = axios.post(process.env.REACT_APP_BASE_URL + UserApiConstatnts.forgotPassword , emailId);
        return response;
    } catch (error) {
        return error;
    }
}

export function resetPassword(resetPwdData) {
    try {
        console.log("Login data: ", resetPwdData);
        const response = axios.post(process.env.REACT_APP_BASE_URL + UserApiConstatnts.resetPassword , resetPwdData,
        {
            
            headers: {
                Authorization: localStorage.getItem('token')
                
            }
        });
        console.log("reset pwd: ", response);
        return response;
    } catch (error) {
        return error;
    }
}