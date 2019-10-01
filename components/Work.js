import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FullPortfolio from './FullPortfolio';
import Project from './Project/Project';
import {AnimatedSwitch, spring} from "react-router-transition";

// The Work component matches one of two different routes
// depending on the full pathname
function mapStyles(styles) {
    return {
        opacity: styles.opacity,
        // transform: `scale(${styles.scale})`,
    };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
    return spring(val, {
        stiffness: 50,
        damping: 10,
    });
}

// child matches will...
const bounceTransition = {
    // start in a transparent, upscaled state
    atEnter: {
        opacity: 0,
        // scale: 1.2,
    },
    // leave in a transparent, downscaled state
    atLeave: {
        opacity: bounce(0),
        // scale: bounce(0.8),
    },
    // and rest at an opaque, normally-scaled state
    atActive: {
        opacity: bounce(1),
        // scale: bounce(1),
    },
};


const Work = () => (
    <AnimatedSwitch
        atEnter={bounceTransition.atEnter}
        atLeave={bounceTransition.atLeave}
        atActive={bounceTransition.atActive}
        mapStyles={mapStyles}
        className="switch-wrapper"
    >
    <Route exact path='/work' component={FullPortfolio}/>
    <Route path='/work/:project' component={Project}/>
  </AnimatedSwitch>
)


export default Work
