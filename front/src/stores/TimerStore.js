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

  get currentTime() {
    const minutes = Math.floor(this.time / 60)
    const seconds = this.time - minutes * 60
    return `${this.pad(minutes)}:${this.pad(seconds)}`
  }

  saveTime = level => {
    this.times.push({ level: level, time: this.currentTime })
  }

  pad = num => {
    return ('0' + num).slice(-2)
  }
}

decorate(TimerStore, {
  time: observable,
  incrementTime: action,
  saveTime: action,
  currentTime: computed,
})

export default new TimerStore()
