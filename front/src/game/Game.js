import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import { observer, inject } from 'mobx-react'
import { Redirect } from 'react-router'

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
        <h1>{this.props.LevelStore.currentLevel.name}</h1>
        <Editor
          value={this.props.LevelStore.currentLevel.code || ''}
          onValueChange={code => this.props.LevelStore.currentLevel.code = code}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => this.execute()}
        >
          Tester {this.props.TimerStore.currentTime}
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
