import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Button from './Button'
import Input from './Input'
import Header from './Header'
import {connect} from 'react-redux'
import {DataUpdate,Login} from '../action/AuthAction'
import {Actions} from 'react-native-router-flux'

class LoginForm extends Component {
    onLinkPress(){
        Actions.forget()
    }

    onLink2Press(){
        Actions.Register_Screen()
    }

    onButtonPress(){

        const {email,password} = this.props
        this.props.Login({email,password});
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
                    <Header headername="LOGIN"/>
                </View>
                <View>
                    <Text style={{textAlign:'center',fontSize:14,color:'red',fontWeight:'bold'}}>{this.rendermessage()}</Text>
                </View>
                <Input name="Enter Email" iconname="user"
                value={this.props.confirm_password}
                onChangeText={value=>this.props.DataUpdate({props:'email',value})}
                />
                <Input name="Enter Password " iconname="lock"
                value={this.props.confirm_password}
                onChangeText={value=>this.props.DataUpdate({props:'password',value})}
                />
                <Button onPress={this.onButtonPress.bind(this)}>
                    <Text>LOGIN</Text>
                </Button>
                <View style={{alignItems:'center'}}>
                    <View>
                        <Text style={styles.txt} onPress={this.onLinkPress.bind(this)}>Forget Password</Text>
                    </View>
                    <View>
                        <Text style={styles.txt} onPress={this.onLink2Press.bind(this)}>Click Here to Register</Text>
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
    marginTop:10,
    color:'#1e90ff',
    fontWeight:'bold'
  }
});

const mapStateToProps=(state)=>{
    const {email,password,error} = state.Auth
    return{
        email,password,error
    }
}



export default connect(mapStateToProps,{DataUpdate,Login})(LoginForm);