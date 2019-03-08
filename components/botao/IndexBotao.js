import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import styles from './stylesBotao';

export default class Botao extends Component {
 
  constructor(props) {
    super(props);
    this.state = {};
  
  }

  render() {
    return (
      <TouchableOpacity style={styles.botao} onPress={this.props.onPress}>
      <View style={styles.botaoArea}>
        <Text style={styles.botaoTexto}>{this.props.titulo}</Text>
      </View>
    </TouchableOpacity>      
    );
  }
}