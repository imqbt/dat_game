import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import InputEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

class Editor extends Component {
  render() {
    return (
      <InputEditor
        value={this.props.LevelStore.currentLevel.code || ''}
        onValueChange={code => this.props.LevelStore.currentLevel.code = code}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    )
  }
}

export default inject('LevelStore')(observer(Editor))
