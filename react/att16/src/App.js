import React, { useState } from 'react'
import './style.css'

function App() {

  const [contador, setContador] = useState(0)

  return (
    <div className='corpo' >
      <p>voce clicou {contador} vezes</p>
      <div className='container'>
        <button onClick={() => setContador(contador + 1)}>Aumentar</button>
        <button onClick={() => setContador(contador - 1)}>Diminuir</button>
        <button onClick={() => setContador(0)}>Zerar</button>
      </div>
    </div>
  );
}

export default App;
