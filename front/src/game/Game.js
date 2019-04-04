import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import { observer, inject } from 'mobx-react'
import WebWorker from '../common/WebWorker'
import testWorker from './testWorker'

const code = `function add() {
  console.log("asv")
}
`

class Game extends Component {
  state = { code }
  worker

  componentDidMount() {
    this.props.LevelStore.loadLevels()
    setInterval(this.props.TimerStore.incrementTime, 1000)

    this.worker = new WebWorker(testWorker);
    
    this.worker.addEventListener('message', event => {
      console.log('event in Game', event)
    });
  }

  render() {
    return (
      <div className="Level">
        <h1>{this.props.LevelStore.currentLevel.name}</h1>
        <Editor
          value={this.state.code}
          onValueChange={code => this.setState({ code })}
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
      </div>
    )
  }

  execute = () => {
    this.worker.postMessage(this.state.code + ' add()')
    this.props.LevelStore.nextLevel()
  }
}

export default inject('TimerStore', 'LevelStore')(observer(Game))
