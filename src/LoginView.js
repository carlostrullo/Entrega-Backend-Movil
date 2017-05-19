import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import {Actions} from 'react-native-router-flux'
import Counter from 'react-native-counter'





export default class LoginView extends Component {
   
   
  componentDidMount(){
         
         this.timeoutHandle = setTimeout(()=>{
              Actions.root();
         }, 2000);
    }
   
   
   componentWillUnmount(){
       
         clearTimeout(this.timeoutHandle);
         
    }
   
   
 render() {
       
    return (
       <View style={styles.container}>     
         <Text style={styles.welcome}> Bienvenidos a cali-Planner </Text>
 
       </View>
     
            
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center'
  },
  
  welcome: {
      fontSize: 24,
      fontWeight: '600',
  }
  
});



