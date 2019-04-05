import React, { Component } from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { observer, inject } from 'mobx-react'

class Toastr extends Component {
  render() {
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={this.props.LevelStore.showNextLevelAlert}
        autoHideDuration={3000}
        message={
          <span id="message-id">Bravo, vous passez au niveau suivant</span>
        }
      />
    )
  }
}

export default inject('LevelStore')(observer(Toastr))
