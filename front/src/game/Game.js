import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router'
import Toastr from './Toastr'
import Timer from './Timer'
import Editor from './Editor'
import Logs from './Logs'

class Game extends Component {
  componentDidMount() {
    this.props.LevelStore.loadLevels()
    this.props.TimerStore.startTimer()
    document.addEventListener('keydown', this.keydownHandler)
  }

  keydownHandler = e => {
    if (e.keyCode === 13 && e.ctrlKey) {
      this.props.LevelStore.runTests()
    }
  }

  render() {
    if (!this.props.LevelStore.currentLevel) {
      return <Redirect to="/endgame" push={true} />
    }

    return (
      <div className="Level">
        <Toastr />
        <Grid container spacing={24}>
          <Grid item xs={8}>
            <h1>{this.props.LevelStore.currentLevel.name}</h1>
            <span>{this.props.LevelStore.currentLevel.description}</span>
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
            <Button
              variant="contained"
              color="primary"
              onClick={this.props.LevelStore.runTests}
            >
              Tester votre code
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Logs />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default inject('TimerStore', 'LevelStore')(observer(Game))
