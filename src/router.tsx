import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Weather from 'containers/Weather/loadable';

export default function () {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Weather} />
      </Switch>
    </Router>
  )
}
