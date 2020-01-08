import React from 'react';
import {View,TextInput,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Input=(props)=>{
    const {container,txtinput,icon} = styles;
    return(
        <View style={container}>
        <Icon style={icon} name={props.iconname} size={22} color="#8395a7"/>
        <TextInput
            style={txtinput}
            placeholder={props.name}
            onChangeText={props.onChangeText}
            value={props.value}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:'10%',
        flexDirection: 'row',
        marginLeft:10
    },
    icon: {
        marginTop:10,
        padding: 10,
    },
    txtinput: {
        flex: 1,
        marginRight:'10%',
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 0,
        fontSize:16,
        fontWeight:'bold',
        color: '#8395a7',
        borderBottomColor:'#636e72',
        borderBottomWidth:0.5
    },
})
export default Input;
