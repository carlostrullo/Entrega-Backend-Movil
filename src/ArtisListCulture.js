import React, { Component } from 'react';
import {
  StyleSheet,
  ListView,
  TouchableOpacity,
} from 'react-native';


import ArtisBoxCulture from './ArtisBoxCulture'
import { Actions } from 'react-native-router-flux'

export default class ArtisListCulture extends Component {
  constructor(props) {
      super(props);
      const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     
       this.state = {
      dataSource: ds,
      
      
    
    };
  }
  
   componentWillReceiveProps(newProps){
      if(newProps.offerss !== this.props.offerss){
          this.setState({
              dataSource: this.state.dataSource.cloneWithRows(newProps.offerss),
              
              
          })
      }
  }
  
  
     
  
  
  
  handlePress(offers,cultures){
      Actions.artistDetail({offers: offers})
  }
  
  
        render() {
            
            
            
    return (
            
         <ListView
          enableEmptySection={true}
          dataSource={this.state.dataSource}
          
          renderRow={(offers,cultures)=>{
                
                return( <TouchableOpacity onPress={() => this.handlePress(offers)}>
                  <ArtisBoxCulture offers={offers}/>
              
                </TouchableOpacity>
               )
            }}
                />
                  
      
    );
  }
}
