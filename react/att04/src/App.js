import React, { Component } from 'react'

class Equipe extends Component {
  render() {
    return (
      <div>
        <Sobre nome = {this.props.nome} cargo = {this.props.cargo} idade = {this.props.idade}/>
        <Social/>
        <hr></hr>
      </div>
    )
  }
}

class Sobre extends Component {
  render() {
    return (
      <div>
        <h2>Olá sou o(a) {this.props.nome}</h2>
        <h3>Atualmente almeço ser um {this.props.cargo}</h3>
        <h3>Minha idade é {this.props.idade} anos</h3>
      </div>
    )
  }
}

const Social = () => {
  return(
    <div>
      <a>Github - </a>
      <a>Linkedin</a>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome='Pedro' cargo='Dev Front-end' idade='20' />
      <Equipe nome = 'Mateus' cargo = 'social média' idade = '17'/>
    </div>
  )
}

export default App;