import { observable, computed, action, decorate } from 'mobx'

class TimerStore {
  time = 0

  times = []

  incrementTime = () => {
    this.time = this.time + 1
  }

  startTimer = () => {
    setInterval(this.incrementTime, 1000)
  }

  saveTime = level => {
    this.times.push({ level: level, time: this.time })
  }
}

decorate(TimerStore, {
  time: observable,
  incrementTime: action,
  saveTime: action,
})

export default new TimerStore()
