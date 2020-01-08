import Send_OTP from './type';
import { Actions } from 'react-native-router-flux'

export const SendOTP=(mobile)=>{
    return(dispatch) =>{
    verified_otp = Math.floor(100000 + Math.random() * 900000)
    if(mobile==''){
        error = '*Fill all the details*'
        success = ''
        dispatch({
            type:'Send_OTP',
            payload:{error,success,verified_otp}
        })
    }
        else{
            if(mobile.length!=10){
                error='Enter a valid Mobile Number'
                success=''
                dispatch({
                    type:'Send_OTP',
                    payload:{error,success,verified_otp}
                })
            }
            else{
                fetch('http://192.168.43.247:80/mobokyc/sendsms.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                mobile: mobile,
                verified_otp: verified_otp
            })
 
            }).then((response) => response.json())
            .then((responseJson) => { 
                   console.log(responseJson)
            
                }).catch((error) => {
                    console.log(error)
                });
                dispatch({
                    type:'Send_OTP',
                    payload:{error:'',success:'OTP Send Successfully',verified_otp}
                })
            }
        }
    }
}


export const Verify=({verified_otp,otp})=>{

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
            Actions.Aadhar_Screen()
        }
    }

}