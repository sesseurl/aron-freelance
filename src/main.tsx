import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const gsap = (window as unknown as { gsap: unknown }).gsap as undefined
const ScrollTrigger = (window as unknown as { ScrollTrigger: unknown }).ScrollTrigger as undefined

if (gsap) {
  gsap.registerPlugin(ScrollTrigger)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
