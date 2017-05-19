import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  
} from 'react-native';


import ArtisListCulture from './ArtisListCulture'

import {getOferts} from './api-client'

export default class HomeViewCultura extends Component {
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
      <ArtisListCulture offerss={offerss}/>       
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