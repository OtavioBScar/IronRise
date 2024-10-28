import { useState } from 'react'

import './App.css'
import ProjetoModal from './modals/ProjetoModal';

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
        Iniciar projeto
        <button onClick={() => setShow(!show)}>Botão</button>
        <ProjetoModal show={show} setShow={setShow}/>
    </>
  )
}

export default App
