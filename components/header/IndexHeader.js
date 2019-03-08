import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './StylesHeader';
import Logo from '../logo/logo';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container} >
        <Logo altura='64' largura='64' />
        <Text style={styles.titulo}>Lista de viagens</Text>
      </View>
    );
  }
}