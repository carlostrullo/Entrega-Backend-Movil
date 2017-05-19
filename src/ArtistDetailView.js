import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  
} from 'react-native';

import ArtisBox from './ArtisBox'
export default class ArtistDetailView extends Component {
       
 render() {
      
    const offers= this.props.offers
    const {descripcion,letraChica}= this.props.offers
    
       
    return (
       <View style={styles.container}>     
      <ArtisBox offers={offers}/>
      <View style={styles.artisBox}>
      <Text style={styles.name}> {descripcion}</Text>
      <Text style={styles.letraChica}> {letraChica}</Text>
      
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    
    letraChica: {
      
      fontSize: 10,
      marginTop: 10,
            
    },
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 10,
  },
  
  artisBox: {
      margin: 5,
      backgroundColor: 'white',
      flexDirection: 'row',
      elevation: 2,
      flexDirection: 'column',
      alignItems: 'center'
      
  },
  name: {
      fontSize: 20,
      marginTop: 20,
  }
  
  
});