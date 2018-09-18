import React from 'react';
import {StyleSheet, StatusBar,View} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import { SearchBar } from 'react-native-elements'


import HomeScreen from './components/HomeScreen';
import ProfileScreen from './components/ProfileScreen';
import DetailScreen from './components/DetailScreen'
import InfoScreen from './components/InfoScreen'

StatusBar.setHidden(true);

// stack navigator
const Nav1= createStackNavigator({
  Home:{ 
    screen: HomeScreen,  //nome da dare come titolo alla classe/componente
    
  },
  Details:{
    screen: DetailScreen
  },
  
},
)

//tab navigation
const RootStack= createBottomTabNavigator({
  Home:{
    screen:Nav1
  },
  Profile:{
    screen: ProfileScreen
  }
})

export default class App extends React.Component{
  render(){
    return( 
              <RootStack />
            )
  }
}
