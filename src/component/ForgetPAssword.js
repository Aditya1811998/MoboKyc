import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Button2 from './Button2'
import Input from './Input'
import Header from './Header'
import {Actions} from 'react-native-router-flux'

export default class ForgetPAssword extends Component {
    onLinkPress(){
        Actions.login()
    }
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Header headername="Change Password"/>
                </View>
                <Input name="Enter Code" iconname="user"/>
                <Input name="Enter New Password" iconname="lock"/>
                <Input name="Enter New Password Again" iconname="lock"/>
                <Button2>
                    <Text>Update</Text>
                </Button2>
                <View style={{alignItems:'center'}}>
                    <View>
                        <Text style={styles.txt} onPress={this.onLinkPress.bind(this)}>Click to Login</Text>
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