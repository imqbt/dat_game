import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import { observer, inject } from 'mobx-react'

const code = `function add() {
  console.log("asv")
}
`

class Game extends Component {
  state = { code }

  componentDidMount() {
    this.props.LevelStore.loadLevels()
    setInterval(this.props.TimerStore.incrementTime, 1000)
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
    // eslint-disable-next-line
    eval(this.state.code + ' add()')

    this.props.LevelStore.nextLevel()
  }
}

export default inject('TimerStore', 'LevelStore')(observer(Game))
