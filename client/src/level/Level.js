import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
 
const code = `function add() {
  console.log("asv")
}
`;

class Level extends Component {
  state = { code };

  render() {
    fetch('/levels')
    return (
      <div className="Level">
        <Editor
          value={this.state.code}
          onValueChange={code =>  this.setState({ code })}
          highlight={code => highlight(code, languages.js)}
          padding={10}
          style={{
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 12,
          }}
        />
        <Button variant="contained" color="primary" onClick={() => this.execute()}>
          Tester
        </Button>
      </div>
    );
  }

  execute = () => {
    // eslint-disable-next-line
    eval(this.state.code + ' add()');
  }
}

export default Level;
