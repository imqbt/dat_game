import React from 'react'
import Button from '@material-ui/core/Button'
import { observer, inject } from 'mobx-react'
import TextField from '@material-ui/core/TextField'

const ScoreForm = inject('TimerStore', 'LevelStore', 'ScoreStore')(
  observer(({ TimerStore, LevelStore, ScoreStore }) => {
    return (
      <div>
        <h2>Souhaitez vous enregistrer votre score?</h2>
        <div>
          <TextField
            id="outlined-name"
            label="Votre pseudo"
            value={ScoreStore.nickname}
            onChange={ScoreStore.changeNickname}
            margin="normal"
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={ScoreStore.saveScore}
        >
          Enregistrer
        </Button>
      </div>
    )
  })
)

export default ScoreForm
