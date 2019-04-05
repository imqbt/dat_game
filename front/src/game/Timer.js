import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField'
import Clok from './Clok'

class Timer extends Component {
  render() {
    return (
      <TextField
        disabled
        id="outlined-disabled"
        label="Temps passé"
        value={Clok({ time: this.props.TimerStore.time })}
        margin="normal"
        variant="outlined"
      />
    )
  }
}

export default inject('TimerStore')(observer(Timer))
