import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { Routes } from './shared/Routes';
import { PageWrapper } from './shared/PageWrapper';

hydrate(
  <BrowserRouter>
    <PageWrapper>
      <Routes />
    </PageWrapper>
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
