import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view'
import MaskTabBar  from 'react-native-scrollable-tab-view-mask-bar'
import HomeViewCultura from './HomeViewCultura'
import HomeViewDeporte from './HomeViewDeporte'
import HomeViewComida from './HomeViewComida'
import HomeViewRumba from './HomeViewRumba'

export default class HomePrincipal extends Component {
              
 render() {
     
    
       return (
       <ScrollableTabView renderTabBar={() => <MaskTabBar someProp={'here'} showMask={true} maskMode='light' />}> 
       
        <HomeViewDeporte tabLabel='Deporte'/>
        <HomeViewComida tabLabel='Comida'/>
        <HomeViewCultura tabLabel='Cultura'/>
        <HomeViewRumba tabLabel='Rumba'/>
       
        </ScrollableTabView>
                   
      
    ); 
      
  }
}