import React from 'react'

const BemVindo = (props) => {
  return(
    <div>
      <h2>Meu nome é: {props.nome}</h2>
      <h3>Minha idade é: {props.idade}</h3>
      <h3>Sou {props.genero}</h3>
      <h3>Trabalho com: {props.emprego}</h3><br></br><hr></hr>
    </div>
  )
}

function App(){
  return(
    <div>
      Olá, Mundo!
     <BemVindo nome= "Pedro" idade = "20" genero = "Homem" emprego = "Desenvolvedor"/> 
     <BemVindo nome = "Mateus" idade = "17" genero = "Homem" emprego = "Gestor de tráfego"/>
     <BemVindo nome = "Lucas" idade = "20" genero = "Homem" emprego = "Técnico de Sistema"/>
    </div>
  )
}

export default App;