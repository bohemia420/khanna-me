import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Link, HashRouter as Router } from 'react-router-dom';
import Home from './components/Home/Home';
import { Blog, Interests, Misc, Presence, Projects, Resume } from './components/Routes';
import { Navbar } from './utilities/Navbar';
import './App.css';
import { Form, FormControl, Button, Nav, Navbar as NavBar } from 'react-bootstrap';

class App extends React.Component  {
  render(){
  return (
    <div>
      <Navbar/>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={Projects} />
          <Route path="/interests" component={Interests} />
          <Route path="/presence" component={Presence} />
          <Route path="/misc" component={Misc} />
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
