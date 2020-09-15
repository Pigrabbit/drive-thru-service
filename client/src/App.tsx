import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/category/:id" component={CategoryPage}/>
          <Route path="/" component={MainPage}/>
        </Switch>
      </Router>
    </div>
  )
}
