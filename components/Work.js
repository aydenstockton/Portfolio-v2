import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullPortfolio from './FullPortfolio';
import Project from './Project/Project';

const Work = () => {
    document.getElementsByTagName("BODY")[0].setAttribute("theme", "universe");

    return (
        <Switch>
            <Route exact path='/work' component={FullPortfolio} type='All'/>
            <Route path='/work/:projectID' component={Project}/>
        </Switch>
    )
}

export default Work
