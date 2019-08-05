import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './config/routes';
import { ComponentLoader } from './utils/render-fragment';

export const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.path} {...route} render={() => React.createElement(ComponentLoader, route)} />
    ))}
  </Switch>
);
