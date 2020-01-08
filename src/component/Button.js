import React from 'react';

import {TouchableOpacity,Text,StyleSheet} from 'react-native';


const Button=(props)=>{
    const {btn,btnInput}=styles
    return(
        <TouchableOpacity onPress={props.onPress} style={btn} >
           <Text style={btnInput}>{props.children}</Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = StyleSheet.create({
    btn:{
        marginTop:10,
        marginHorizontal:'35%',
        padding:4,
        height:35,
        backgroundColor:'#2e86de',
        borderRadius:4,
    },

    btnInput:{
        justifyContent:'center',
        textAlign:'center', 
        color:'#fff',
        fontWeight:'bold',
        fontSize:15
    },

})