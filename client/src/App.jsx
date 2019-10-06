import React from 'react'
import { Route, Switch } from 'react-router-dom'

import ToDos from './pages/ToDos'

export default function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/todos" component={ToDos} />
        <Route render={() => <h2>404</h2>} />
      </Switch>
    </div>
  )
}
