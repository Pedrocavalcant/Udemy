import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nome: 'Pedro',
      contador: 0
    }

    this.aumentar = this.aumentar.bind(this)
    this.diminuir = this.diminuir.bind(this)
  }

  aumentar() {
    let state = this.state
    state.contador += 1;
    state.nome = 'Lucas'
    this.setState(state);
  }

  diminuir() {
    let state = this.state
    if (state.contador === 0) {
      alert('Opa, chegou a zero!');
      return;
    }
    state.contador -= 1;
    state.nome = 'Pedro'
    this.setState(state);
  }

  render() {
    return (
      <div>
        <h1>contador</h1>
        {this.state.nome}
        <h3><button onClick={this.diminuir}>-</button>{this.state.contador}<button onClick={this.aumentar}>+</button></h3>
      </div>
    )
  }
}

export default App;