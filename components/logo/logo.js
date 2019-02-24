import React, { Component } from 'react';
import {
  Image
} from 'react-native';

export default class Logo extends Component {
    // Mesmo no componente é necessário escrever um render
  
    render() {
      return (
        <Image source={require('../../src/img/logo.png')} style={{
          width: parseInt(this.props.largura),
          height: parseInt(this.props.altura)
        }}></Image>
      );
    }
  }