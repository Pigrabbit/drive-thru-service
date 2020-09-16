import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import CategoryPage from './pages/CategoryPage'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact={true} path="/category/:id" component={CategoryPage}/>
          <Route exact={true} path="/" component={MainPage}/>
          <Redirect to={{ pathname: "/"}} />
        </Switch>
      </Router>
    </div>
  )
}
