import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Counter } from './EjeUseState'
import { ItemList } from './EjeUseEffect'
import { App } from './EjeUseContext'
import { CounterReducer } from './EjeUseReducer'
import { FocusInput } from './EjeUseRef'

createRoot(document.getElementById('root')).render(
  <>
    <Counter />
    <ItemList />
    <App />
    <CounterReducer />
    <FocusInput />
  </>,
)
