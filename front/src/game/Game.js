import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import { observer, inject } from 'mobx-react'
import WebWorker from '../common/WebWorker'
import testWorker from './testWorker'

class Game extends Component {

  worker

  componentDidMount() {
    this.props.LevelStore.loadLevels()
    setInterval(this.props.TimerStore.incrementTime, 1000)

    this.worker = new WebWorker(testWorker);
    
    this.worker.addEventListener('message', event => {
      if(event.data.type === 'result') {
        this.validate(event.data.content);
      }
      if(event.data.type === 'error') {
      }   
    });
  }

  validate = result => {
    const isValidated =  this.props.LevelStore.currentTest.expectedResult.data === result
    console.log('is validated ' + isValidated)
  }

  render() {
    console.log(this.props.TimerStore.times)
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
      </div>
    )
  }

  execute = () => {
    const fn = `${this.props.LevelStore.currentLevel.code}; ${this.props.LevelStore.currentLevel.functionName}(${this.props.LevelStore.currentTest.arguments.data})`
    this.worker.postMessage(fn)
    this.props.LevelStore.nextLevel()
  }
}

export default inject('TimerStore', 'LevelStore')(observer(Game))
