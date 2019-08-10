import React from 'react';
import { RemoteComponentLoader } from './RemoteComponentLoader';

export class Main extends React.Component {
render() {
  return React.createElement(RemoteComponentLoader, { componentName: 'Overview' })}
}
