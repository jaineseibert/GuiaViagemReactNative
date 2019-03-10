import React, { Component } from 'react';
import {
  View
} from 'react-native';
import Header from './components/header/IndexHeader';
import Lista from './components/lista/IndexLista';
import Footer from './components/footer/IndexFooter';
import styles from './components/styles';

export default class App extends Component {

  render() {

    return (


      <View style={styles.container}>

        <Header></Header>

        <Lista></Lista>

        <Footer></Footer>

      </View>

    );

  }

}
