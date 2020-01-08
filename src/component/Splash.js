import React, { Component } from 'react';
import {Text,Image,View,StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class Splash extends Component {
    componentWillMount(){
        this.renderscreen()
    }


    renderscreen=()=>{
 
        setTimeout(function(){
     
          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
          Actions.Mobile_Screen()
     
        }, 3000); 
     
      }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={styles.maincontainer}>
                    <Image source = {require("../assests/logo2.png")} />
                </View>
                <View style={styles.subcontainer}>
                    <Text style={styles.textstyle}>By</Text>
                    <Text style={styles.textstyle}>T E A M    R E A C T O R S</Text>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    maincontainer:{
        flex:1,
        backgroundColor:'#003153',
        alignItems:'center',
        justifyContent:'center'
    },
    subcontainer:{
        backgroundColor:'#003153',
        alignItems:'center',
    },
    textstyle:{
        color:'#BAE5D4',
        fontWeight:'bold',
        fontSize:15,
        marginBottom:5,
    }
})