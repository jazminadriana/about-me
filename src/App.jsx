import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Section from './components/Section'


function App() {
  const [sections, setSections] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get('http://localhost:3001/sections')
      .then(response => {
        setSections(response.data)
        setLoading(false)
      })
      .catch(error => {
        console.error("Hubo un error al pedir las secciones:", error)
        setLoading(false)
      })
  }, []) 

  return (
    <div className='App'>

      <header>
        <h1 className='app-title'>Jazmín | Web Developer Jr</h1>
        <span className="tagline">Turning discipline into functional code.</span>
      </header>

      <main>
      {loading ? (
        <p>Cargando experiencia...</p>
      ) : sections.length > 0 ? (
        sections.map(section => (
          <Section key={section.id} {...section} />
        ))
      ) : (
        <p>No se encontró contenido. Revisa tu conexión al servidor.</p>
      )}
      </main>
    </div>
  )
}

export default App
