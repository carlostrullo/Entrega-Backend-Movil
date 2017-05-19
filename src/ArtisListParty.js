import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';


import ArtisBoxParty from './ArtisBoxParty'
import { Actions } from 'react-native-router-flux'

export default class ArtisListParty extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
 
        this.state = {
      dataSource: ds
    };
  }
  
   componentWillReceiveProps(newProps){
      if(newProps.offerss !== this.props.offerss){
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(newProps.offerss)
          })
      }
  }
  
  
  
  
  handlePress(offers){
      Actions.artistDetail({offers: offers})
  }
  
  
        render() {
    return (
            
         <ListView
          enableEmptySection={true}
          dataSource={this.state.dataSource}
          renderRow={(offers)=>{
                
                return( <TouchableOpacity onPress={() => this.handlePress(offers)}>
                  <ArtisBoxParty offers={offers}/>
              
                </TouchableOpacity>
               )
            }}
                />
                  
      
    );
  }
}