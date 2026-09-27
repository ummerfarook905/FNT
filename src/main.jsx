import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Must match the `base` in vite.config.js and the redirect key in index.html.
const REDIRECT_KEY = 'fnt:redirect'

// Restore the route parked by the 404.html bootstrap before the router mounts.
const parked = sessionStorage.getItem(REDIRECT_KEY)

if (parked) {
  sessionStorage.removeItem(REDIRECT_KEY)

  window.history.replaceState(
    null,
    '',
    `${import.meta.env.BASE_URL.replace(/\/$/, '')}${parked}`,
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
