import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Button2 from './Button2'
import Input from './Input'
import Header from './Header'
import {connect} from 'react-redux'
import {DataUpdate,Email_Verify} from '../action/AuthAction'
 
class Mobile extends Component {

    onVerifyPress(){
        const verified_otp = this.props.verified_otp
        const otp = this.props.otp
        this.props.Email_Verify({verified_otp,otp})
    }
    rendermessage(){
        if(this.props.error!=''){
            return(
                <Text style={{textAlign:'center',fontSize:14,color:'red',fontWeight:'bold'}}>{this.props.error}</Text>
            )
        }
        else{
            return(
                <Text style={{textAlign:'center',fontSize:14,color:'green',fontWeight:'bold'}}>{this.props.success}</Text>
            )
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Header headername="MOBOKYC"/>
                </View>
                <View>
                    <Text style={{textAlign:'center',fontSize:14,color:'red',fontWeight:'bold'}}>{this.rendermessage()}</Text>
                </View>
                <Input name="Enter OTP " iconname="comments" 
                value={this.props.otp}
                onChangeText={value=>this.props.DataUpdate({props:'otp',value})}
                />
                <Button2 onPress={this.onVerifyPress.bind(this)}>
                    <Text>Verify</Text>
                </Button2>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#fff'
      },
      txt:{
          fontSize:23,
          color:'#000',
          fontWeight:'bold'
      }
});


const mapStateToProps=(state)=>{
    const {mobile,error,otp,success,verified_otp} = state.Auth
    return{
        mobile,
        error,
        otp,
        success,
        verified_otp
    }
}



export default connect(mapStateToProps,{DataUpdate,Email_Verify})(Mobile);