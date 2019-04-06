import React from 'react'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField'
import Clok from './Clok'

const Timer = inject('TimerStore')(observer(({ TimerStore }) => {
  return (
    <TextField
      disabled
      id="outlined-disabled"
      label="Temps passé"
      value={Clok({ time: TimerStore.time })}
      margin="normal"
      variant="outlined"
    />
  )
}))

export default Timer

