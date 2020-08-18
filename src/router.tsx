import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Home = () => <div>hahah</div>

export default function () {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home} />
      </Switch>
    </Router>
  )
}
