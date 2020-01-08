import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from '../Bio/Bio.js';
import Skills from '../Skills/Skills.js';
import Projects from '../Projects/Projects.js';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Bio} />
    <Route path="/Skills" component={Skills} />
    <Route path="/Projects" component={Projects} />
  </Switch>
);

export default Routes;