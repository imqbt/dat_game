import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import Home from './game/Home'
import Game from './game/Game'
import EndGame from './game/EndGame'
import NotFound from './common/NotFound'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import {} from 'mobx-react'
import TimerStore from './stores/TimerStore'
import LevelStore from './stores/LevelStore'

const providerAndRouting = (
  <Provider LevelStore={LevelStore} TimerStore={TimerStore}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/game" component={Game} />
        <Route path="/endgame" component={EndGame} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)
ReactDOM.render(providerAndRouting, document.getElementById('root'))

serviceWorker.unregister()
