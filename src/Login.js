import  React from 'react';
import { View,StyleSheet, TextInput, Button } from 'react-native/types';

export default function Login({onLogin,username,setUsername}){
    return (
    <View style={style.container}>
    <TextInput
    
    style={StyleSheet.input}
    onChangeText={setUsername}
    value={username}
    />
    <Button title={'Login'} onPress ={onLogin}/>
        </View>
      );
}

const style = StyleSheet.create({
   container: {
       backgroundColor:'#000000'
   },

});