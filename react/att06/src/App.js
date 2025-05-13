import React, { Component } from 'react'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hora: '00:00:00'
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000)
  } //quando vai consumir uma API extra, vai pegar um webservice

  componentDidUpdate() {
    console.log('Atualizou!')
  } //se teve alguma atualização fazer alguma ação

  /*shouldComponentUpdate(){
  retorna um true ou false
  }*/ 

  render() {
    return (
      <div>
        <h1>Meu projeto {this.state.hora}</h1>
      </div>
    )
  }
}

export default App;