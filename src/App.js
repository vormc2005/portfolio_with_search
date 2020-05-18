import React from 'react';
import './App.css';
// import PortfolioCards from './components/layout/portfolio/PortfolioCards'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/portfolio";
import 'bootstrap/dist/css/bootstrap.min.css';

import Contact from "./pages/contact";


function App() {
  return (


    <Router>
    <div>        
      <Switch>
        <Route exact path="/">
          <HomePage />
        
        </Route>
        <Route exact path="/portfolio" component={Portfolio}>
         
        </Route>
        <Route exact path="/contact">
          < Contact/>
        </Route>          
      </Switch>
    </div>
  </Router>
  );
}

export default App;
