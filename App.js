import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
         textofrase : '',
         img : require('./src/biscoito.png')
    };

    this.QuebraBiscoito = this.QuebraBiscoito.bind(this);

    this.frases = [
     
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.',
      'Defeitos e virtudes são apenas dois lados da mesma moeda.',
      'A maior de todas as torres começa no solo.',
      'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.',
      'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.',
      'Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida',
      'O riso é a menor distância entre duas pessoas.',
      'Todas as coisas são difíceis antes de se tornarem fáceis.',
      'Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais.',
      'Realize o óbvio, pense no improvável e conquiste o impossível.',
      'A inspiração vem dos outros. A motivação vem de dentro de nós.'


    ];
  }

  QuebraBiscoito(){
   
     let numAleatorio = Math.floor(Math.random() * this.frases.length);

     this.setState({
      textofrase: '" ' + this.frases[numAleatorio] + ' "' ,

      img: require('./src/biscoitoAberto.png')
     })
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img}
          source={this.state.img}
        />

        <Text style={styles.TextoFrase}>{this.state.textofrase}</Text>

        <TouchableOpacity style={styles.btn} onPress={this.QuebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.textbtn}>Quebrar o biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingStart: 10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  img: {
    width: 250,
    height: 250
  },

   TextoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },

  btn:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25

  },

  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'

  },

  textbtn:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',


  }

});



export default App;