import React from 'react'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField'

const Logs = inject('LevelStore')(
  observer(({ LevelStore }) => {
    const logs = LevelStore.logs.join('\n')
    return (
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
    )
  })
)

export default Logs
