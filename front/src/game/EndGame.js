import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import ScoreBoard from './ScoreBoard'
import MyScore from './MyScore'
import ScoreForm from './ScoreForm'

const hasCheated = (times, levels) => {
  if (times.length === 0) {
    return true
  }
  if (times.length !== levels.length) {
    return true
  }
  return false
}

class EndGame extends Component {
  componentDidMount() {
    this.props.ScoreStore.loadScores()
  }

  render() {
    const scoreForm = this.props.ScoreStore.showScoreForm ? <ScoreForm /> : <div>Votre participation est enregistré</div>
      return (
        <div className="EndGame">
          Bravo, vous avez fini le jeu {this.props.ScoreStore.nickname}
          <h2>Votre score est:</h2>
          {hasCheated(this.props.TimerStore.times, this.props.LevelStore.levels) ? (
            <h1>TRICHEUR!!!</h1>
          ) : (
            <div>
              {scoreForm}
              <MyScore />
            </div>
          )}
          <ScoreBoard />
        </div>
      )
  }
}

export default inject('TimerStore', 'LevelStore', 'ScoreStore')(observer(EndGame))
