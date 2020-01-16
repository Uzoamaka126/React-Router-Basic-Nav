import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom'
import './App.css';
import { Home, About, Contact, Navigation } from './components';

const App = () => (
  <StyledApp>
    <Navigation />
    <Route exact path="/" component={Home} />
    <Route exact path="/contact" component={Contact} />

  </StyledApp>
);

export default App;

