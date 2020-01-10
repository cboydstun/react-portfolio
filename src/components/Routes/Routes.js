import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bio from '../../pages/Bio/Bio';
import Skills from '../../pages/Skills/Skills';
import Projects from '../../pages/Projects/Projects';

import Create from '../../pages/CRUD/Create/Create';
import Edit from '../../pages/CRUD/Edit/Edit';
import List from '../../pages/CRUD/List/List';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Bio} />
    <Route path="/Skills" component={Skills} />
    <Route path="/Projects" component={Projects} />
    <Route path="/Create" component={Create} />
    <Route path="/Edit/:id" component={Edit} />
    <Route path="/List" component={List} />
  </Switch>
);

export default Routes;