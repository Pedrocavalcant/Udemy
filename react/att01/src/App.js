import react from 'react'

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade}/>
      <Social github={props.github} linkedin={props.linkedin}/>
    </div>
  )
}

const Sobre = (props) => {
  return(
    <div>
      <h2>Ola sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} anos</h3>
    </div>
  )
}

const Social = (props) => {
  return(
    <div>
      <a href={props.github}>Github </a>
      <a href={props.linkedin}>Linkedin </a>
      <a>Youtube </a>
    </div>
  )
}


function App() {
  return(
    <div>
      <h1>Conheca nossa equipe</h1>
      <Equipe nome="Pedro" cargo="Web Developer" idade="20" github="https://github.com/Pedrocavalcant" linkedin="https://www.linkedin.com/in/pedro-lucas-cavalcante/"/>  <hr/>
      <Equipe nome="Mateus" cargo="Video Maker" idade="17" />  <hr/>
      <Equipe nome="Lucas" cargo="Programador" idade="19" />

    </div>
  )
}

export default App