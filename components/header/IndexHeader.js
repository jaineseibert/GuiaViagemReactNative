import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './StylesHeader';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Text>TESTE</Text>
      </View>
    );
  }
}