import { useState } from 'react'
import { version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Seo } from './components/Seo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app__container'>
        
        <Seo title='Novedades de la librería de JS' 
          description='Hola, React' 
        />
        
        <title>{`Hola, React ${version}`}</title>
        <meta name='description' content='Hey React' />
        <link rel='icon' href='/favicon.ico' />

        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        <h1
          style={{ marginBottom: 6 }} 
        >React 19</h1>
        <small style={{
          fontSize: '10px',
          color: 'orange'
        }}>La versión es: {version}</small>
      </div>
    </>
  )
}

function OtroComponente () {

  return (
    <Seo title="Hey, soy el otro" description="Ey, soy la descrip" />
  )

}

export default App
