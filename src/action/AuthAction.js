import {ADDINFO,VALIDATE_FORM} from './type'
import {Actions} from 'react-native-router-flux'

export const DataUpdate=({props,value})=>{
    return{
        type:ADDINFO,
        payload:{props,value}
    }
}


export const Valiadate=({name,email,password,confirm_password,aadhar})=>{
    return(dispatch) =>{
    verified_otp = Math.floor(100000 + Math.random() * 900000)
    if(name==''||email==''||password==''||confirm_password==''){
        error = '*Fill all the details*'
        success = ''
        dispatch({
            type:VALIDATE_FORM,
            payload:{error,success,verified_otp}
        })
    }
    else{
        if(password.length<6){
            error = '*Password shoould length of 6*'
            success = ''
            dispatch({
                type:VALIDATE_FORM,
                payload:{error,success,verified_otp}
            })
        }
        else{
            if(password!=confirm_password){
                error = '*Passwords should be equal*'
                success = ''
                dispatch({
                    type:VALIDATE_FORM,
                    payload:{error,success,verified_otp}
                })
        }
            else{
                fetch('http://192.168.43.247:80/mobokyc/login.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                aadhar: aadhar,
                verified_otp:verified_otp
 
            })
 
            }).then((response) => response.json())
            .then((responseJson) => { 
            // Showing response message coming from server after inserting records.
                   console.log(responseJson)
                    if(responseJson=='User Registered Successfully')
                    {
                        success = responseJson
                        dispatch({
                            type:VALIDATE_FORM,
                            payload:{error:'',success,verified_otp}
                        })
                        Actions.Verify_Screen()
                    }
                    else
                    {
                        error = responseJson
                        dispatch({
                            type:VALIDATE_FORM,
                            payload:{error,success:'',verified_otp}
                        })
                    }
                }).catch((errors) => {
                    console.log(errors)
                });
                
        }
    }
}
    
}
}

export const Login=({email,password})=>{
    return(dispatch) =>{
    if(email==''||password==''){
        error = '*Fill all the details*'
        success = ''
        dispatch({
            type:VALIDATE_FORM,
            payload:{error,success,verified_otp:''}
        })
    }
    else{
                fetch('http://192.168.43.247:80/mobokyc/log.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                email: email,
                password: password,
 
            })
 
            }).then((response) => response.json())
            .then((responseJson) => { 
            // Showing response message coming from server after inserting records.
                   console.log(responseJson)
                    if(responseJson=='Login')
                    {
                        success = responseJson
                        dispatch({
                            type:VALIDATE_FORM,
                            payload:{error:'',success,verified_otp:''}
                        })
                        Actions.Dashboard_Screen()
                    }
                    else
                    {
                        error = responseJson
                        dispatch({
                            type:VALIDATE_FORM,
                            payload:{error,success:'',verified_otp:''}
                        })
                    }
                }).catch((errors) => {
                    console.log(errors)
                });
                
}
    
}
}

export const Email_Verify=({verified_otp,otp})=>{

    return(dispatch)=>{
        if(verified_otp!=otp)
        {
            error = '*OTP does not match*'
            success = ''
            dispatch({
                type:'Verify_OTP',
                payload:{error,success,otp}
            })
        }
        else{
            dispatch({
                type:'Verify_OTP',
                payload:{error:'',success:'',otp:''}
            })
            Actions.Login_Screen()
        }
    }

}