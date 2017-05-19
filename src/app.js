/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
  
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux'
import HomePrincipal from './HomePrincipal'
import LoginView from './LoginView'
import ArtistDetailView from './ArtistDetailView'


class caliPlanner extends React.Component {
  render() {
    return <Router>
      <Scene key="login" component={LoginView} hideNavBar/>
      <Scene key="root">
        <Scene key="home" component={HomePrincipal} hideNavBar/>
        <Scene key="artistDetail" component={ArtistDetailView}/>
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('caliPlanner', () => caliPlanner);
