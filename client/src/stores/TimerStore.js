import { observable, computed, action, decorate } from "mobx"

class TimerStore {
  time = 0

  incrementTime = () => {
    this.time = this.time + 1
  }

  get currentTime() {
    const minutes = Math.floor(this.time / 60)
    const seconds = this.time - minutes * 60
    return `${this.pad(minutes)}:${this.pad(seconds)}`
  }

  pad = num => {
    return ("0"+num).slice(-2);
  }

}

decorate(TimerStore, {
  time: observable,
  incrementTime: action,
  currentTime: computed
})

export default new TimerStore()
