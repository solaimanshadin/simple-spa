import React from 'react';
import { BrowserRouter as Router, Route, Switch , Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Works from './components/Works/Works';
import WorkDetail from './components/WorkDetail/WorkDetail';
import Blog from './components/Blog/Blog';

function App() {

  return (
    <Router>
        <Header/>

        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>

          <Route path="/about">
              <About/>
          </Route>

          <Route path="/works">
              <Works/>
          </Route>
          <Route path="/blog/:id">
              <Blog/>
          </Route>
          <Route path="/work/:id/:name">
              <WorkDetail></WorkDetail>
              <Blog/>
          </Route>

          <Route path="/contact">
              <Contact/>
          </Route>

          <Route path="*">
              404 - Nothing found
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
