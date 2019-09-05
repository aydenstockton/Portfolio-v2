import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullPortfolio from './FullPortfolio'
import Project from './Project'

// The Work component matches one of two different routes
// depending on the full pathname
const Work = () => (
  <Switch>
    <Route exact path='/work' component={FullPortfolio}/>
    <Route path='/work/:project' component={Project}/>
  </Switch>
)


export default Work
