import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WhiplePlaceholder from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WhiplePlaceholder />
  </StrictMode>,
)
