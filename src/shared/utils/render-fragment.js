import React from 'react';
import { loadScript } from './load-script';

export class ComponentLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: Boolean(window[this.props.componentName])
    };
  }
  componentDidMount () {
    const { host, componentName } = this.props;
    if (!this.state.loaded) {
      loadScript({ host, componentName })
        .then(() => this.setState({ loaded: true }))
    }
  }

  render(){
    if (!this.state.loaded) {
      return <div>Loading...</div>
    }
    return React.createElement(window[this.props.componentName][this.props.componentName]);
  }
}
