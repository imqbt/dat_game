import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="Home" elevation={1}>
      <h1>Bienvenue sur Dat Game!!!</h1>
      <h2>Saurez-vous relever le défi?</h2>
      <Link to="/game">
        <Button variant="contained" color="primary">
          Commencer
        </Button>
      </Link>
    </div>
  )
}

export default Home
