import React from 'react';
import styled from 'styled-components';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, About, Contact, Navigation } from './components';
import { StyledApp } from'./components/StyledApp'
const App = () => (
  <StyledApp>
    <Navigation />

    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />

  </StyledApp>
);

export default App;

