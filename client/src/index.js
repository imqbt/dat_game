import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Home from './level/Home'
import Level from './level/Level'
import NotFound from './common/NotFound'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react';
import {  } from 'mobx-react';
import TimerStore from  './stores/TimerStore'

const providerAndRouting = (
  <Provider TimerStore = {TimerStore} >
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/level" component={Level} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </Provider>
)
ReactDOM.render(providerAndRouting, document.getElementById('root'))

serviceWorker.unregister();
