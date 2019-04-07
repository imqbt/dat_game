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
    const scoreForm = this.props.ScoreStore.showScoreForm ? (
      <ScoreForm />
    ) : (
      <div>
        <br />
        Votre participation est enregistré
      </div>
    )
    return (
      <div className="EndGame">
        <h1>Bravo, vous avez fini le jeu!!!</h1>
        <h2>Votre score est:</h2>
        {hasCheated(
          this.props.TimerStore.times,
          this.props.LevelStore.levels
        ) ? (
          <h1>TRICHEUR!!!</h1>
        ) : (
          <div>
            <MyScore />
            {scoreForm}
          </div>
        )}
        <ScoreBoard />
      </div>
    )
  }
}

export default inject('TimerStore', 'LevelStore', 'ScoreStore')(
  observer(EndGame)
)
