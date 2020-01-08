import {ADDINFO,VALIDATE_FORM,SEND_OTP} from '../action/type'

const INITIAL_STATE = {
   name:"",
   email:"",
   password:"",
   confirm_password:"",
   mobile:"",
   aadhar:"",
   otp:"",
   verified_otp:"",
   error:"",
   success:""
}


const AuthReducer=(state=INITIAL_STATE,action)=>{
    console.log(action)
    switch(action.type)
    {
        case ADDINFO:
            return{...state, [action.payload.props]: action.payload.value}
        case VALIDATE_FORM:
            return{...state, error: action.payload.error, success: action.payload.success, verified_otp: action.payload.verified_otp}
        case 'Send_OTP':
            return{...state, error: action.payload.error, success: action.payload.success,verified_otp: action.payload.verified_otp}
        case 'Verify_OTP':
            return{...state,error: action.payload.error, success: action.payload.success, otp: action.payload.otp}
            default:
            return state
    }
}

export default AuthReducer;