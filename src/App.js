import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  SingleProduct,
  Cart,
  Checkout,
  Error,
  Contact,
  About,
  Products,
  Catering,
  PrivateRoute,
} from './pages'
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
         <Route exact path='/catering'>
          <Catering />
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/products'>
          <Products />
        </Route>
        <Route path='/products/:id' children={<SingleProduct />} />
        <PrivateRoute path='/checkout'>
          <Checkout />
        </PrivateRoute>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App