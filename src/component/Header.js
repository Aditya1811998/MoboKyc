import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

const Header=(props)=>{
    const {headercontainer,headertxt} = styles;
    return(
        <View style={headercontainer}>
            <Text style={headertxt}>{props.headername}</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headercontainer:{
        width:'100%',
        backgroundColor:'#f8f8f8',
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:12,
        shadowColor:'#000',
        shadowOffset:{width:0,height:4},
        shadowOpacity:0.5,
        elevation:2,
        position:'relative'
    },
    headertxt:{
        fontSize:20,
        fontWeight:'bold'
    }
})