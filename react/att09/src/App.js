import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false
    };
    this.entrar = this.entrar.bind(this);
    this.sair = this.sair.bind(this)
  }

  entrar() {
    this.setState({ status: true })
  }

  sair() {
    this.setState({ status: false })
  }

  render() {
    return (
      <div>
        {this.state.status ?
          <div>
            <h1>Você conseguiu</h1>
            <button onClick={this.sair}>Saia aqui</button>
          </div> :
          <div>
            <h1>Você tentou</h1>
            <button onClick={this.entrar}>Entre aqui</button>
          </div>
        }
      </div>

    )
  }
}

export default App;