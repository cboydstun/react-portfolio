import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from '../../pages/Bio/Bio';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Bio} />
    <Route path="/Skills" component={Skills} />
    <Route path="/Projects" component={Projects} />
  </Switch>
);

export default Routes;