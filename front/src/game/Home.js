import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Link to="/game">
          <Button variant="contained" color="primary">
            Commencer
          </Button>
        </Link>
      </div>
    )
  }
}

export default Home
