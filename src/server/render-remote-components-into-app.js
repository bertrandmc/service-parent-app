import { remoteComponentPlaceholder } from '../shared/utils/remote-component-placeholder';

export const renderComponentsIntoApp = ({ renderedApp, renderedComponentsList }) => {
  let appHtml = renderedApp;
  renderedComponentsList.forEach(({componentName, html, styles, data}) => {
    appHtml = appHtml.replace(
      remoteComponentPlaceholder(componentName),
      `
        ${styles}
        ${html}
        <script>window.${componentName}Data = ${JSON.stringify(data)};</script>
      `
    )
  });
  return appHtml;
};
