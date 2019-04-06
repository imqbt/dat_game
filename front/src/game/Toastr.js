import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { observer, inject } from 'mobx-react'

const Toastr = inject('LevelStore')(observer(({ LevelStore }) => {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={LevelStore.showNextLevelAlert}
      autoHideDuration={3000}
      message={
        <span id="message-id">Bravo, vous passez au niveau suivant</span>
      }
    />
  )
}))

export default Toastr
