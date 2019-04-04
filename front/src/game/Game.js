import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router'
import Snackbar from '@material-ui/core/Snackbar';
import Timer from './Timer'
import Editor from './Editor'

class Game extends Component {

  componentDidMount() {
    this.props.LevelStore.loadLevels()
    this.props.TimerStore.startTimer()
  }

  render() {
    if (!this.props.LevelStore.currentLevel) {
      return <Redirect to="/endgame" push={true} />
    }

    const logs = this.props.LevelStore.logs.join('\n')

    return (
      <div className="Level">
        <Snackbar
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={this.props.LevelStore.showNextLevelAlert}
          autoHideDuration={3000}
          message={<span id="message-id">Bravo, vous passez au niveau suivant</span>}
        />
        <h1>{this.props.LevelStore.currentLevel.name}</h1>
        <Timer />
        <Editor />
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.execute()}
        >
          Tester
        </Button>
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
      </div>
    )
  }

  execute = () => {
    this.props.LevelStore.runTests()
  }
}

export default inject('TimerStore', 'LevelStore')(observer(Game))
