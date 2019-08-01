import React from 'react';
import { Header } from 'culturetrip-ui/dist/components/Header';
import { Footer } from 'culturetrip-ui/dist/components/Footer';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 70%;
  margin: 50px 15%;
`;

export const PageWrapper = ({children}) => (
  <React.Fragment>
    <Header searchItems={[]}/>
    <Wrapper>
      { children }
    </Wrapper>
    <Footer />
  </React.Fragment>
);
