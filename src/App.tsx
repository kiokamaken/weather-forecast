import React from 'react';
import Router from 'router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light } from 'components/Layout/Theme';
import GlobalStyle from 'globalStyles';
import store from './store';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Provider store={store}>
        <Router></Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
