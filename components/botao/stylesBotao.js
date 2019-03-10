import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  botao: {
    width: 190,
    height: 40,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 25
  },

  botaoArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  botaoTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red'
  }

});

export default styles;