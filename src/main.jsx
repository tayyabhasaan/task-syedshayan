import { createRoot } from 'react-dom/client'
import './styles/base.css'
import './styles/tailwind.css'
import './styles/overrides.css'
import App from './App.jsx'
import './styles/late-overrides.css'

// StrictMode is off on purpose: the ported scripts attach listeners once.
createRoot(document.getElementById('root')).render(<App />)
