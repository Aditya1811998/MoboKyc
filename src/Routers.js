import React, { Component } from 'react'
import {Router,Scene} from 'react-native-router-flux'
import Splash from './component/Splash'
import Mobile from './component/Mobile'
import Aadhar from './component/Aadhar'
import Register from './component/RegistrationForm'
import Login from './component/LoginForm'
import Forget_Password from './component/ForgetPAssword'
import Dashboard from './component/Dashboard'
import VerifyEmail from './component/VerifyEmail'

const Routers=()=>{
    return(
        <Router>
            <Scene key="root">
                <Scene key="Splash_Screen" hideNavBar={true} initial>
                    <Scene key="splash" component={Splash} hideNavBar={true}/>
                </Scene>
                <Scene key="Mobile_Screen" hideNavBar={true}>
                    <Scene key="mobile" component={Mobile} hideNavBar={true}/>
                </Scene>
                <Scene key="Aadhar_Screen" hideNavBar={true}>
                    <Scene key="aadhar" component={Aadhar} hideNavBar={true}/>
                </Scene>
                <Scene key="Register_Screen" hideNavBar={true}>
                    <Scene key="register" component={Register} hideNavBar={true}/>
                </Scene>
                <Scene key="Login_Screen" hideNavBar={true}>
                    <Scene key="login" component={Login} hideNavBar={true}/>
                    <Scene key="forget" component={Forget_Password} hideNavBar={true}/>
                </Scene>
                <Scene key="Dashboard_Screen" hideNavBar={true}>
                    <Scene key="dashboard" component={Dashboard} hideNavBar={true}/>
                </Scene>
                <Scene key="Verify_Screen" hideNavBar={true}>
                    <Scene key="email" component={VerifyEmail} hideNavBar={true}/>
                </Scene>
            </Scene>
        </Router>
    )
}


export default Routers