import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from '../../pages/Bio/Bio';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';
import Users from '../../pages/Users/UserList';
import Articles from '../../pages/Articles/ArticlesPage';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Bio} />
    <Route path="/Skills" component={Skills} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Users" component={Users} />
    <Route path="/Articles" component={Articles} />
  </Switch>
);

export default Routes;