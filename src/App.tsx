import React from 'react';
import Router from 'router';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { light } from 'components/Layout/Theme';
import GlobalStyle from 'globalStyles';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
