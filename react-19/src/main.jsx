import React from 'react'
import ReactDOM from 'react-dom/client'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

console.log(renderToString(<App />));