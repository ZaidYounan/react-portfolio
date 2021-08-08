import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Index from './components/index/Index';
import Home from './components/home/Home';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/" component={Index}/>
          <div className="App">
          <Navbar/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
