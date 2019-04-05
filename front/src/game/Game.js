import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router'
import Toastr from './Toastr'
import Timer from './Timer'
import Editor from './Editor'

class Game extends Component {
  componentDidMount() {
    this.props.LevelStore.loadLevels()
    this.props.TimerStore.startTimer()
    document.addEventListener('keydown', this.keydownHandler)
  }

  keydownHandler = e => {
    if (e.keyCode === 13 && e.ctrlKey) {
      this.execute()
    }
  }

  render() {
    if (!this.props.LevelStore.currentLevel) {
      return <Redirect to="/endgame" push={true} />
    }

    const logs = this.props.LevelStore.logs.join('\n')

    return (
      <div className="Level">
        <Toastr />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <h1>{this.props.LevelStore.currentLevel.name}</h1>
          </Grid>
          <Grid item xs={3}>
            <Timer />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Editor />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <Button variant="contained" color="primary" onClick={this.execute}>
              Tester votre code
            </Button>
          </Grid>
          <Grid item xs={4}>
            <TextField
              disabled
              multiline
              rowsMax="5"
              id="outlined-disabled"
              label="Logs"
              value={logs}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </div>
    )
  }

  execute = () => {
    this.props.LevelStore.runTests()
  }
}

export default inject('TimerStore', 'LevelStore')(observer(Game))
