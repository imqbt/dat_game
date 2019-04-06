import { action, runInAction, observable, decorate } from 'mobx'
import TimerStore from './TimerStore'

class ScoreStore {
  scores = []

  nickname = ''

  showScoreForm = true

  changeNickname = e => {
    this.nickname = e.target.value
  }

  saveScore = async () => {
    if (!this.nickname) {
      return
    }

    const form = {
      nickname: this.nickname,
      result: TimerStore.times[TimerStore.times.length - 1].time,
    }

    await fetch('/scores', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(form),
    })

    this.showScoreForm = false
    this.loadScores()
  }

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
  nickname: observable,
  showScoreForm: observable,
  changeNickname: action,
})

export default new ScoreStore()
