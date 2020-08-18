import React from 'react'
import Router from 'router'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import store from './store'

function App() {
  return (
    <ThemeProvider theme={{}}>
      <Provider store={store}>
        <Router></Router>
      </Provider>
    </ThemeProvider>
  )
}

export default App
