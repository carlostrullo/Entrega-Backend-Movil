import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
   ListView,
} from 'react-native';



import {getRandom} from './api-client';


export default class artisBoxSport extends Component {
   
   
         
   render() {
       
    const { idCategoria, titulo, precio} = this.props.offers
    
    if(idCategoria===1){  
     const images='https://images.unsplash.com/photo-1493037875696-1f2eb8d732ed?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&s=19cbc3612fc8eab26dcce0dd7d39b4d9'   
        return (
       <View style={styles.artisBox}> 
       <Image style={styles.images} source={{uri: images}}/>
       <View style={styles.info}>
       <Text style={styles.name}>{titulo}</Text>
       <Text style={styles.name}>{precio}</Text>
     
            </View>
            </View>
            
 );}else{
        return null;
    } }}


const styles = StyleSheet.create({
  images: {
      width: 150,
      height:150,
  },
  artisBox: {
      margin: 5,
      backgroundColor: 'white',
      flexDirection: 'row',
      elevation: 2,
      
  },
  info: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center'
  },
  
  name: {
      fontSize: 20,
      marginTop: 20,
  },
  
  row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: 30,
      marginTop: 15,
  },
  
  iconContainer: {
      flex: 1,
      alignItems: 'center',
  }
  
 
});

