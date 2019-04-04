import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField';

class Timer extends Component {
  render() {
    return (
        <TextField
          disabled
          id="outlined-disabled"
          label="Temps passé"
          value={this.props.TimerStore.currentTime}
          margin="normal"
          variant="outlined"
        />
    )
  }
}

export default inject('TimerStore')(observer(Timer))
