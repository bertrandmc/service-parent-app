import React from 'react';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { globalStyles } from 'culturetrip-ui/dist/base/global';
import { StaticRouter } from 'react-router-dom';
import { PageWrapper } from '../shared/PageWrapper';
import { fetchRenderedRemoteComponents } from './fetch-rendered-remote-components';
import { Routes } from '../shared/Routes';
import { RemoteComponentContext, addComponent } from '../shared/utils/remote-component-context';
import { renderComponentsIntoApp } from './render-remote-components-into-app';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

export const renderAppMarkupAndStyles = async ({ location }) => {
  const sheet = new ServerStyleSheet();
  let componentsToFetch = [];
  let renderedApp;
  let styles;
  let scriptUrls = [];
  try {
    renderedApp = renderToString(
      sheet.collectStyles(
        <StaticRouter context={{}} location={location}>
          <GlobalStyle />
          <PageWrapper>
            <RemoteComponentContext.Provider value={{ addComponent: addComponent(componentsToFetch) }}>
              <Routes />
            </RemoteComponentContext.Provider>
          </PageWrapper>
        </StaticRouter>
      )
    );
    styles = sheet.getStyleTags();
    if (componentsToFetch.length) {
      const renderedComponentsList = await fetchRenderedRemoteComponents(componentsToFetch);
      renderedApp = renderComponentsIntoApp({ renderedApp, renderedComponentsList });
      if (!renderedComponentsList.find(component => component.error)) {
        scriptUrls = renderedComponentsList
          .reduce((accumulator, component) => [...accumulator, ...component.scriptUrls], []);
      }
    }
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    sheet.seal()
  }
  return {
    html: renderedApp,
    styles,
    scriptUrls
  }
};
