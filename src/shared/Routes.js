import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from './Main';
import { RemoteComponentLoader } from './RemoteComponentLoader';

export const Routes = () => (
  <Switch>
    <Route path='/overview' component={Main} />
    <Route path='/places-to-stay' render={() => React.createElement(RemoteComponentLoader, { componentName: 'PlacesToStay' })} />
  </Switch>
);
