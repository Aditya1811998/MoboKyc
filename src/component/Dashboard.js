import React, { Component } from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Header from './Header'

export default class LoginForm extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Header headername="Dashboard"/>
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
});