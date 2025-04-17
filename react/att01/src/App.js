import react from 'react'

const BemVindo = (props) => {
  return(
    <div>
      <h2>Bem-vindo(a) {props.nome}</h2>
      <h3>Tenho {props.idade} Anos</h3>
    </div>
  )
}

function App() {
  return(
    <div>
      Ola mundo!
      <BemVindo nome="Pedro" idade = "20"/>
      <BemVindo nome="Mateus" idade = "17"/>
      <h1>Curso React</h1>
    </div>
  )
}

export default App