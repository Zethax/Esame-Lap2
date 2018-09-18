import React from 'react';
import {  View,  Text,  StyleSheet,  TouchableHighlight,  Image,} from 'react-native';


export default class ListRow extends React.Component{
    render(){
        return(
          <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Details',{currentItem:this.props.data})}}>

            <View style={styles.containerLista}>
            <Image source={{uri:this.props.data.img}} style={styles.imgLista}/>
              
              <View style={styles.textContainer}>
                <Text style={styles.testoTitoloLista}> {this.props.data.name}</Text>
                <Text style={styles.location}> {this.props.data.location} </Text>

                <Text style={styles.dat}> inizio : {this.props.data.startDate} e fine : {this.props.data.endDate}</Text>
                
                <Text style={styles.prezzo}> {this.props.data.prize} </Text>

                <Text style={styles.tag}> {this.props.data.tags} </Text>

            </View>
  
          </View>
          </TouchableHighlight>
        )
    }
}

//CSS
  const styles= StyleSheet.create({
   
    containerLista:{
      padding:5,
      borderBottomWidth:1,
      flexDirection:'row',
      height: 150,
      justifyContent: 'flex-start',
      alignItems: 'center',

    },

    imgLista:{
      width: 100,
      height: 100,
      borderRadius:100,
      borderWidth:1,
      borderColor:'black',
      marginRight:10,
      
    },
    

    textContainer:{
      flexDirection:'column',
      justifyContent:'flex-start',
            //marginRight :10,
     // height: 140,
     // marginLeft: 10,
     // marginRight : 10,
     // padding: 10,

      

    },
    testoTitoloLista:{
      
      fontWeight:'bold',
      fontSize: 20,
    },
    tag:{
        color: 'gray',

    },
    location:{
      fontWeight:'bold',

    },
    dat:{
      color:'#008080',
     // fontWeight:'bold',
    },
    prezzo:{
      fontWeight:'bold',
      color:'red',
    }
  });