import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { StateContextProvider } from './context/StateContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
