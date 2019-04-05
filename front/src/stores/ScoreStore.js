import { runInAction, observable, action, decorate } from 'mobx'

class ScoreStore {

  scores = []

  loadScores = async () => {
    const response = await fetch('/scores')
    const scores = await response.json()
    runInAction(() => {
      this.scores = scores
    })
  }
}

decorate(ScoreStore, {
  scores: observable,
})

export default new ScoreStore()
