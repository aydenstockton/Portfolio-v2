import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import ScrollToTop from 'react-router-scroll-top';
import "./styles.pcss";

ReactDOM.render((
  <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
  </BrowserRouter>
), document.getElementById('root'));
