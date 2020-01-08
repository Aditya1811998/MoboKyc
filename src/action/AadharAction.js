import {Actions} from 'react-native-router-flux'

export const AadharAction=(aadhar)=>{
    return(dispatch) =>{
    verified_otp = Math.floor(100000 + Math.random() * 900000)
    if(aadhar==''){
        error = '*Fill all the details*'
        success = ''
        dispatch({
            type:'Send_OTP',
            payload:{error,success,verified_otp}
        })
    }
        else{
            if(aadhar.length!=16){
                error='Enter a valid Mobile Number'
                success=''
                dispatch({
                    type:'Send_OTP',
                    payload:{error,success,verified_otp}
                })
            }
            else{
                fetch('http://192.168.43.247:80/mobokyc/Aadhar.php', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                aadhar: aadhar,
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
                    payload:{error:'',success:'OTP Successfully Send',verified_otp}
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
            Actions.Register_Screen()
        }
    }

}