import React from 'react';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';
import { renderToString } from 'react-dom/server';
import { globalStyles } from 'culturetrip-ui/dist/base/global';
import { StaticRouter } from 'react-router-dom';
import { PageWrapper } from '../shared/PageWrapper';
import { fetchMarkup } from './fetch-markup';
import { getMatchedRoute } from './get-matched-route';

const GlobalStyle = createGlobalStyle`${globalStyles}`;

export const renderAppMarkupAndStyles = ({ location }) => {
  const sheet = new ServerStyleSheet();
  let markup;
  let styleTags;

  const { htmlUrl, scriptUrl } = getMatchedRoute(location);
  return fetchMarkup(htmlUrl).then(appHtml => {
    try {
      markup = renderToString(sheet.collectStyles(
        <StaticRouter context={{}} location={location}>
          <GlobalStyle />
          <PageWrapper>
            [[app]]
          </PageWrapper>
        </StaticRouter>
      )).replace('[[app]]', appHtml);
      styleTags = sheet.getStyleTags();
    } catch (error) {
      console.error(error)
      throw error;
    } finally {
      sheet.seal()
    }
    return {
      markup,
      styleTags,
      scriptUrl
    }
  });
};
