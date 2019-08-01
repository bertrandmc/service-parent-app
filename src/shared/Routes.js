import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { routes } from './config/routes';

export const Routes = () => (
  <Switch>
    {routes.map(route => (
      <Route key={route.path} {...route} render={() => React.createElement(window[route.componentName])} />
    ))}
  </Switch>
);
