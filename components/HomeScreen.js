import React from 'react';
import {StyleSheet, Text, FlatList, Button, View, Alert} from 'react-native';
import { Constants } from 'expo';

import ListRow from './ListRow'

export default class HomeScreen extends React.Component{
     static navigationOptions={
        headerTitle:'Homepage',
        headerRight:(
            <Button title='Favorite' onPress={()=>{Alert.alert('pressed')}} />
        )
   
    }

    //setto un default per lo state
    state={dataSource:[]}

    //fetching
    componentDidMount(){
        return fetch('http://www.dmi.unict.it/~calanducci/LAP2/events.json')
        .then((response)=> response.json())
        .then((responseJson)=> {
            this.setState({dataSource:responseJson.data})
        })
    }

    //metodo renderItem flatlist
    renderRow=({item})=>{
        return (
        <ListRow data={item} navigation={this.props.navigation}/>
    )
    }

    render(){
        return( 
          <View style={styles.container}>
            <FlatList 
            data={this.state.dataSource}
            renderItem={this.renderRow}
            keyExtractor={item => item.id}/>
          </View>
        )
    }
}


//CSS
const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    paragraph:{
        margin: 24,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
  
    }
})
