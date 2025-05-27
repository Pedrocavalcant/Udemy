import React, { Component } from 'react'
import './estilo.css'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = ['Frase 1', 'Frase 2', 'Frase 3', 'Frase 4', 'Frase 5', 'Frase 6']
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase ='"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);
  }

  render() {
    return (
      <div className='container'>
        <img src={require('./assets/biscoito.png')} className='img'/>
        <Botao nome = 'Abrir biscoito' acaoBtn = {this.quebraBiscoito}/>
        <h3 className='texto'>{this.state.textoFrase}</h3>
      </div>
    )
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn }>{this.props.nome}</button>
      </div>
    )
  }
}

export default App;