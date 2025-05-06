import React from 'react'

const Equipe = (props) => {
  return (
  <div>
    <Sobre nome = {props.nome} cargo = {props.cargo} idade = {props.idade}/>
    <Social git = {props.git} insta = {props.insta} linke = {props.linke}/> <hr/> <br/>
  </div> 
)
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} Anos</h3>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href={props.git}>Github </a>
      <a href={props.linke}>Linkedin </a>
      <a href={props.insta}>Instagram </a>
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Pedro" cargo="Dev front-end" idade="20"    git = "https://github.com/Pedrocavalcant" linke='https://www.linkedin.com/in/pedro-lucas-cavalcante/' insta = 'https://www.instagram.com/pl_cavalcante_?igsh=MWVwM2lvdDE2MG9iMQ== '/>
      <Equipe nome="Lucas" cargo = "técnico de sistema" idade = "20" git = "pedrinho" linke="pedrinho" insta="pedrocalva"/>
      <Equipe nome = "Mateus" cargo = "Social Média" idade = "17" git="Mateuzinho" linke="Rayan123" insta="matheuslight"/>
    </div>
  )
}

export default App;