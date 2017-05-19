import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  
} from 'react-native';


import ArtisListParty from './ArtisListParty'

import {getOferts} from './api-client'

export default class HomeViewRumba extends Component {
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
      <ArtisListParty offerss={offerss}/>       
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

