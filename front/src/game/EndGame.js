import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ScoreBoard from './ScoreBoard'
import Clok from './Clok'

class EndGame extends Component {
  componentDidMount() {
    this.props.ScoreStore.loadScores()
  }

  render() {
    return (
      <div className="EndGame">
        Bravo, vous avez fini le jeu
        <h2>Votre score est:</h2>
        {this.hasCheated() ? <h1>TRICHEUR!!!</h1> : this.score()}
        <ScoreBoard />
      </div>
    )
  }

  score = () => {
    return this.props.TimerStore.times.map((time, i) => {
      return (
        <div key={i}>
          Vous avez fini le niveau {time.level} à <Clok time={time.time}/>
        </div>
      )
    })
  }

  hasCheated = () => {
    if (this.props.TimerStore.times.length === 0) {
      return true
    }
    if (
      this.props.TimerStore.times.length !== this.props.LevelStore.levels.length
    ) {
      return true
    }
    return false
  }
}

export default inject('TimerStore', 'LevelStore', 'ScoreStore')(observer(EndGame))
