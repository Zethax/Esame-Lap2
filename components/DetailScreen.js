import React from 'react';
import {StyleSheet, StatusBar,View,Text, Image, Button,TouchableHighlight,Alert,Linking,ScrollView} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';



export default class DetailScreen extends React.Component{

    static navigationOptions={
        headerTitle:'details',
        
   
    }
   constructor(props){
        super(props)
        const tempItem = this.props.navigation.getParam('currentItem')
        //console.log(tempItem)
        this.state={item:tempItem, cont:0}
        console.log(this.state.cont)

    }

    _moveOn(){
      Linking.openURL(''+this.state.item.url)
     //this.props.navigation.navigate('Info',{it:this.state.item.url})
    }

    _onCall(){
     null
    }

    render(){

    
        return(
              <View>
                <Image style={styles.img} source={{uri: this.state.item.img}} />
                <Text style={styles.textTitle}> {this.state.item.name} </Text>
               
                <View style={styles.textContainer}>
                <Text style={{fontWeight:'bold',fontSize:15}}> {this.state.item.location} </Text>

                <Text>  Inizio : {this.state.item.startDate} Fine : {this.state.item.endDate}</Text>

                <Text style={{color:'red'}}> {this.state.item.prize} </Text>

          <TouchableHighlight onPress={()=>{this._onCall()}}>
                <Text> {this.state.item.tel} </Text>
           </TouchableHighlight>

              <TouchableHighlight onPress={()=>{this._moveOn()}}>
                <Text style={{color:'blue'}}> {this.state.item.url} </Text>
              </TouchableHighlight>

                <Text> {this.state.item.info} </Text>

                <Text>  {this.state.item.fullAddress}</Text>

                <Text style={{color:'gray'}}> {this.state.item.tags} </Text>


                </View>

             

            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
   //  flex: 1,
   //  justifyContent: 'flex-start',
   flexDirection:'column',
   //  alignItems: 'stretch',
    //backgroundColor: "yellow",
     padding: 20,
    },
    img:{
        width: '100%',
        height: '50%',

    },
    textContainer:{
            height : 20,
            width : "100%",
            flexDirection : "column"
    },
    textTitle:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    tag:{
        flexDirection:'row',
        justifyContent:'flex-end',
       alignItems:'center',
       
    },
    loc:{
      fontWeight:15
    }
})