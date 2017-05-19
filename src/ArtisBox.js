import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';


const UrlRandom='https://api.unsplash.com/photos/random/?client_id=2375ff235149ecf6bac99a1ec7928ba40ec3e92e340997ac38c1a08bdc39e36d'
import Unsplash from 'unsplash-js/native';
export default class artisBox extends Component {
           
    
   constructor(props){
    super(props);
    
    this.getlink();
    
    this.state = {
      company: null
    };

    
  }
   
    
    getlink(){
    fetch(UrlRandom)
      .then((response) => response.json())
      .then((data)=>{
          this.setState({company: data.urls.small})
    });
  }
    
     render() {   
    const { idCategoria, titulo, precio} = this.props.offers
    
    const image= this.state.company
    
        return (
       <View style={styles.artisBox}> 
       <Image style={styles.images} source={{uri: image}}/>
       <View style={styles.info}>
       <Text style={styles.name}>{titulo}</Text>
       <Text style={styles.name}>{precio}</Text>
     
            </View>
            </View>
    
    );
         
  }
}

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



