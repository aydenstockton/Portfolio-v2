import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Work from './Work'
// import { spring, AnimatedSwitch } from 'react-router-transition';
import AboutPage from './AboutPage/AboutPage';
import posed, { PoseGroup } from 'react-pose';
// import FullPortfolio from './FullPortfolio'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /work
// and /contact routes will match any pathname that starts
// with /work or /contact. The /route will only match
// when the pathname is exactly the string "/"
// function mapStyles(styles) {
//     return {
//         opacity: styles.opacity,
//         // transform: `scale(${styles.scale})`,
//     };
// }
//
// // wrap the `spring` helper to use a bouncy config
// function bounce(val) {
//     return spring(val, {
//         stiffness: 330,
//         damping: 22,
//     });
// }
//
// // child matches will...
// const bounceTransition = {
//     // start in a transparent, upscaled state
//     atEnter: {
//         opacity: 0,
//         // scale: 1.2,
//     },
//     // leave in a transparent, downscaled state
//     atLeave: {
//         opacity: bounce(0),
//         // scale: bounce(0.8),
//     },
//     // and rest at an opaque, normally-scaled state
//     atActive: {
//         opacity: bounce(1),
//         // scale: bounce(1),
//     },
// };

const RouteContainer = posed.div({
    enter: { opacity: 1, delay: 300, beforeChildren: true },
    exit: { opacity: 0 }
});

const Main = () => (
    <Route
        render={({ location }) => (
          <div id="main">
              <PoseGroup>
                  <RouteContainer key={location.pathname}>
                      <Switch location={location}>
                          <Route exact path='/' component={Home} key="home"/>
                          <Route path='/work' component={Work} key="work"/>
                          <Route path='/about' component={AboutPage} key="about"/>
                      </Switch>
                  </RouteContainer>
              </PoseGroup>
          </div>
        )}
    />
)

export default Main
