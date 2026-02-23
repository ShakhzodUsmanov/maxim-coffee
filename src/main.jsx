import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import SpeedInsightsLoader from './components/SpeedInsightsLoader.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <SpeedInsightsLoader />
  </StrictMode>,
)
