import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Router from './Router'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Task">
        <Router/>
    </BrowserRouter>
  </StrictMode>,
)
