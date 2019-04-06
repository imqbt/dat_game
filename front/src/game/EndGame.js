import React from 'react'
import { observer, inject } from 'mobx-react'
import ScoreBoard from './ScoreBoard'
import Clok from './Clok'
import MyScore from './MyScore'

const hasCheated = (times, levels) => {
  if (times.length === 0) {
    return true
  }
  if (times.length !== levels.length) {
    return true
  }
  return false
}

const score = times => {
  return times.map((time, i) => {
    return (
      <div key={i}>
        Vous avez fini le niveau {time.level} à <Clok time={time.time} />
      </div>
    )
  })
}

const EndGame = inject('TimerStore', 'LevelStore', 'ScoreStore')(
  observer(({ TimerStore, LevelStore, ScoreStore }) => {
    ScoreStore.loadScores()
    return (
      <div className="EndGame">
        Bravo, vous avez fini le jeu
        <h2>Votre score est:</h2>
        {hasCheated(TimerStore.times, LevelStore.levels) ? (
          <h1>TRICHEUR!!!</h1>
        ) : (
          <MyScore />
        )}
        <ScoreBoard />
      </div>
    )
  })
)

export default EndGame
