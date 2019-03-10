import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,

} from 'react-native';
import styles from './StylesLista';
import Botao from '../botao/IndexBotao';


export default class Lista extends Component {

  constructor(props) {

    super(props)
    this.state = {
      text: "",
      itens: []
    }
    this.inserirItem = this.inserirItem.bind(this)
    this.limpar = this.limpar.bind(this)
  }

  renderItem(obj) {

    return (
      <Text>{obj.item.desc}</Text>
    );

  }

  inserirItem() {
    if (this.state.text != '') {
      let newItem = {
        key: this.state.itens.length.toString(),
        desc: this.state.text,
        done: false
      }

      let itens = this.state.itens;
      itens.push(newItem)
      this.setState({ itens })

      let text = ""
      this.setState({ text })
    } else {
      alert('Informe o destino que deseja cadastrar.')
    }
  }

  limpar() {
    let state = this.state;

    state = {
      text: "",
      itens: []
    }

    this.setState(state);

  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.itens} renderItem={this.renderItem} extraData={this.state} />
        <View style={styles.container}>
          <TextInput style={styles.texto} onChangeText={(text) => { this.setState({ text }) }} value={this.state.text} />
          <View style={styles.containerBotoes}>
            <Botao titulo='Inserir' onPress={this.inserirItem}></Botao>
            <Botao titulo='Limpar' onPress={this.limpar}></Botao>
          </View>
        </View>
      </View>
    );
  }
}