import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Work from './Work'
import Contact from './Contact'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /work
// and /contact routes will match any pathname that starts
// with /work or /contact. The /route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/work' component={Work}/>
      <Route path='/contact' component={Contact}/>
    </Switch>
  </main>
)

export default Main
