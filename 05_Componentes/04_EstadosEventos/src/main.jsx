import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { CompOnClick } from './BtnClick.jsx'
import { CompOnChange } from './OnChange.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <CompOnClick />
    <CompOnChange /> 
  </>,
)