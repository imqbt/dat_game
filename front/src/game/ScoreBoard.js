import React from 'react'
import { observer, inject } from 'mobx-react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Clok from './Clok'

const ScoreBoard = inject('ScoreStore')(
  observer(({ ScoreStore }) => {
    return (
      <div>
        <h2>Top 10 résultats:</h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Classement</TableCell>
              <TableCell>Joueur</TableCell>
              <TableCell align="right">Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ScoreStore.scores.map((score, i) => (
              <TableRow key={i}>
                <TableCell>{i + 1}</TableCell>
                <TableCell align="left">{score.nickname}</TableCell>
                <TableCell align="right">
                  <Clok time={score.result} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  })
)

export default ScoreBoard
