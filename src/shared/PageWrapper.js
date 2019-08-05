import React from 'react';
import { Header } from 'culturetrip-ui/dist/components/Header';
import { Footer } from 'culturetrip-ui/dist/components/Footer';
import styled from "styled-components";
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 70%;
  margin: 50px 15%;
`;

const NavBar = styled.div`
  margin: 20px 0;
`;

export const PageWrapper = ({children}) => (
  <React.Fragment>
    <Header searchItems={[]}/>
    <Wrapper>
      <NavBar>
        <Link to='/overview'>Overview</Link> | <Link to='/places-to-stay'>Places to stay</Link>
      </NavBar>
      { children }
    </Wrapper>
    <Footer />
  </React.Fragment>
);
