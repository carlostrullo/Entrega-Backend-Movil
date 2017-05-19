import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  
} from 'react-native';


import ArtistListFood from './ArtistListFood'

import {getOferts} from './api-client'

export default class HomeViewComida extends Component {
   state ={
      offerss: []
  }
  
   
   
   componentDidMount(){
       getOferts()
               .then(data => this.setState({offerss: data}))
   }
        
 render() {
       
        const offerss= this.state.offerss
        
       
       
    return (
       <View style={styles.container}>     
      <ArtistListFood offerss={offerss}/>       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    paddingTop: 10,
  }    
  
});

