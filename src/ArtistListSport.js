import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';


import ArtisBoxSport from './ArtisBoxSport'
import { Actions } from 'react-native-router-flux'

export default class ArtistListSport extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
 
        this.state = {
      dataSource: ds,
      
    };
  }
  
   componentWillReceiveProps(newProps){
      
      
      
      if(newProps.offerss !== this.props.offers){
          this.setState({
             dataSource: this.state.dataSource.cloneWithRows(newProps.offerss),
          })
      }
  }
  
  
  
  
  handlePress(offers){
      Actions.artistDetail({offers:offers})
  }
  
  
        render() {
    return (
            
         <ListView
          enableEmptySection={true}
          dataSource={this.state.dataSource}
          
          renderRow={(offers)=>{
                
                return( <TouchableOpacity onPress={() => this.handlePress(offers)}>
                  <ArtisBoxSport offers={offers}/>
              
                </TouchableOpacity>
               )
            }}
                />
                  
      
    );
  }
}




