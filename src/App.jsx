import { useState } from 'react'
import './App.css'
import { Form } from './components/Formulario'
import { Registro } from './components/Registro'

function App() {


  return (
    <> 
    <div className="card formulario">
      <div className="card-body">
    <h1>Crea una cuenta</h1>
    <Registro/>
    <h5>O usa tu mail para registrarte</h5>
     <Form />
    <alert/>
     </div>
    </div>
    </>
  )
}

export default App
