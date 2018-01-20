import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Splash from './Splash';
import Index from './src/components/Index';
import Login from './src/components/Login';
import Register from './src/components/Register';

export default class App extends React.Component {
  render() {
    return (
      <Login />
    );
  }
}