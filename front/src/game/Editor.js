import React from 'react'
import { observer, inject } from 'mobx-react'
import InputEditor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

const Editor = inject('LevelStore')(
  observer(({ LevelStore }) => {
    return (
      <InputEditor
        value={LevelStore.currentLevel.code || ''}
        onValueChange={code => (LevelStore.currentLevel.code = code)}
        highlight={code => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 12,
        }}
      />
    )
  })
)

export default Editor
