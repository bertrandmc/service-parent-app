import { remoteComponentsList } from '../config/remote-components-list';

export const fetchRemoteComponent = componentName => {
  const { host } = remoteComponentsList[componentName];
  return fetch(`${host}/${componentName}`)
    .then(data => {
      return data.json();
    })
    .catch(err => console.error(err));
};
