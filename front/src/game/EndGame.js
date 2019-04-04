import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

class EndGame extends Component {
  render() {
    return (
      <div>
        Bravo, vous avez fini le jeu
        <h2>Votre score est:</h2>
        {this.hasCheated() ? <h1>TRICHEUR!!!</h1> : this.score()}
      </div>
    )
  }

  score = () => {
    return this.props.TimerStore.times.map((time, i) => {
      return (
        <div key={i}>
          Vous avez fini le niveau {time.level} à {time.time}
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

export default inject('TimerStore', 'LevelStore')(observer(EndGame))
