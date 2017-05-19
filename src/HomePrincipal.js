import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import CategoryList from './CategoryList'
import {getCategory} from './api-client'
export default class HomePrincipal extends Component {
         
 render() {
       return ( 
       
       <CategoryList/>
       
         
       
    ); 
      
  }
}



