import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { Constants } from 'expo';


export default class ProfileScreen extends React.Component{
    render(){
        return( <Text style={styles.paragraph}> Profilo utente </Text>)
    }
}


const styles= StyleSheet.create({
    paragraph:{
        fontSize:30,
    }
})