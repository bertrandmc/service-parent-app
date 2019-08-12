import React from 'react';
import { RemoteComponentLoader } from './RemoteComponentLoader';

export class Main extends React.Component {
  render () {
    return <RemoteComponentLoader componentName='Overview' />
  }
}
