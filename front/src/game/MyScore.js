import React from 'react'
import { observer, inject } from 'mobx-react'

const MyScore = inject('TimerStore')(observer(({ TimerStore }) => {
  const myScore = TimerStore.times.map((time, i) => {
    return (
      <div key={i}>
        Vous avez fini le niveau {time.level} à <Clok time={time.time} />
      </div>
    )
  })
  return <div>{myScore}</div>
}))

export default MyScore
