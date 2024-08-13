import { useState } from 'react'
import { version } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Seo } from './components/Seo'
import { Form } from './components/Form'
import { preload, preinit, prefetchDNS } from 'react-dom'
import { Logo } from './components/Logo'
import { UseFetchExample } from './clase/useExample'

function App() {
  const [count, setCount] = useState(0)

  const [show, setShow] = useState(false);

  // solo cargan una vez el contenido, lo dejan ya almacenado en la caché
  preload('https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css'
    , {
      as: 'style',
      priority: 'low'
  });
 
  preload('https://react.dev/images/uwu.png'
    , {
    as: 'image'
  });

  return (
    <>
      <div className='app__container'>
        
        <Seo title='Novedades de la librería de JS' 
          description='Hola, React' 
        />
        <h1>React - Novedades</h1>
        
        <title>{`Hola, React ${version}`}</title>
        <meta name='description' content='Hey React' />
        <link rel='icon' href='/favicon.ico' />

        <div>
          <Logo />

          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>

          <h3
            style={{ marginBottom: 6 }}
          >
            Hey React 19
          </h3>
          <small style={{ color: 'yellow', fontSize: '10px' }}>
            La v es {version}
          </small>
        </div>

        <button onClick={() => setShow(!show)}>Toggle</button>

        {show && <Form />}        

        <div>
          <UseFetchExample />
        </div>

      </div>
    </>
  )
}

function Another () {

  return (
    <Seo />
  )

}

export default App
