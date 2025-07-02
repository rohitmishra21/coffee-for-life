import React from 'react'
import Nav from './components/Nav'
import Menu from './components/Menu'
import Home from './components/Home'

import Paragraph from './components/Paragraph'
import { coffeeMachines, consumables } from './utils/data'
import ProductList from './components/ProductList'
import WhyCoffee from './components/WhyCoffee'
import Rateing from './components/Rateing'
import Customer from './components/Customer'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav />
      <Menu />
      <Home />
      <ProductList title="Coffee Machines" products={coffeeMachines} />
      <Paragraph />
      <ProductList title="Consumables & Accessories" products={consumables} />
      <WhyCoffee />
      <Rateing />
      <Customer />
      <Footer/>
    </div>
  )
}

export default App
