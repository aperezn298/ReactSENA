import React from 'react'
import ReactDOM from 'react-dom/client'

import { Products } from './fetchPromesa/Products'
import { Users } from './fetchAsincronismo/Users'
import { Categoria } from './componentBootUI/Category'

import { Header } from './generalComponents/Cabecera'
import { Footer } from './generalComponents/PiePag'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
      <Header />
      <Products />
      <Users />
      <Categoria />
      <Footer />
    </>
)