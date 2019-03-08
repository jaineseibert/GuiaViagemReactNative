import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './stylesFooter';

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Jaíne Seibert</Text>
      </View>
    );
  }
}