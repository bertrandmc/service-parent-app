import { remoteComponentsList } from '../config/remote-components-list';
import fetch from 'node-fetch';

export const fetchRemoteComponent = componentName => {
  const { host } = remoteComponentsList[componentName];
  return fetch(`${host}/${componentName}`)
    .then(data => data.json())
    .catch(err => console.error(err));
};
