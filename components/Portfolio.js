import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FullPortfolio from './FullPortfolio'
import Project from './Project'

// The Portfolio component matches one of two different routes
// depending on the full pathname
const Portfolio = () => (
  <Switch>
    <Route exact path='/portfolio' component={FullPortfolio}/>
    <Route path='/portfolio/:project' component={Project}/>
  </Switch>
)


export default Portfolio
