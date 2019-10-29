import React from "react";
import "./src/style/index.pcss";

import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ScrollToTop from 'react-router-scroll-top';
import {ParallaxProvider} from "react-scroll-parallax/cjs";

ReactDOM.render((
    <ParallaxProvider>
      <BrowserRouter>
          <ScrollToTop>
            <App />
          </ScrollToTop>
      </BrowserRouter>
    </ParallaxProvider>
), document.getElementById('root'));
