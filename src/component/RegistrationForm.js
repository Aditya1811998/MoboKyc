import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Button from './Button'
import Input from './Input'
import Header from './Header'
import {connect} from 'react-redux'
import {DataUpdate,Valiadate} from '../action/AuthAction'
import {Actions} from 'react-native-router-flux'
class RegistrationForm extends Component {
    onButtonPress(){

        const {name,email,password,confirm_password,aadhar} = this.props
        this.props.Valiadate({name,email,password,confirm_password,aadhar});
    }

    onLinkPress(){
        Actions.Login_Screen()
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
                    <Header headername="REGISTER"/>
                </View>
                <View>
                    <Text style={{textAlign:'center',fontSize:14,color:'red',fontWeight:'bold'}}>{this.rendermessage()}</Text>
                </View>
                <Input name="Enter Name" iconname="user" 
                value={this.props.name}
                onChangeText={value=>this.props.DataUpdate({props:'name',value})}
                />
                <Input name="Enter Email" iconname="envelope"
                value={this.props.email}
                onChangeText={value=>this.props.DataUpdate({props:'email',value})}
                
                />
                <Input name="Enter Password" iconname="lock"
                value={this.props.password}
                onChangeText={value=>this.props.DataUpdate({props:'password',value})}
                
                />
                <Input name="Enter Password Again" iconname="lock"
                value={this.props.confirm_password}
                onChangeText={value=>this.props.DataUpdate({props:'confirm_password',value})}
                />
                <Button onPress={this.onButtonPress.bind(this)}>
                    <Text>REGISTER</Text>
                </Button>
                <View style={{alignItems:'center'}}>
                    <View>
                        <Text style={{marginTop:10,color:'#1e90ff',fontWeight:'bold'}}  onPress={this.onLinkPress.bind(this)}>Click Here to Login</Text>
                    </View>
                </View>
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
    const {name,email,password,confirm_password,error,aadhar,success} = state.Auth
    return{
        name,email,password,confirm_password,error,aadhar,success
    }
}



export default connect(mapStateToProps,{DataUpdate,Valiadate})(RegistrationForm);