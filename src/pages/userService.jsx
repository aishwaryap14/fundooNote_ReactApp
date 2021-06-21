import axios from 'axios';

export function signUp (signupData) {
    try {
        console.log("signUp data: ", signupData);
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp', signupData);
        console.log("user service response: ", response);
        return response;
    } catch (error) {
        return error;
    }
}

export function login (loginData) {
    try {
        console.log("Login data: ", loginData);
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/login', loginData);
        return response;
    } catch (error) {
        return error;
    }
}

export function forgotPwd(emailId) {
    try {
        console.log("forgotPwd data: ", emailId);
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset', emailId);
        return response;
    } catch (error) {
        return error;
    }
}

export function resetPassword(resetPwdData) {
    try {
        console.log("Login data: ", resetPwdData);
        const response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/user/reset-password', resetPwdData,
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