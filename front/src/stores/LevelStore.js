import {
  runInAction,
  observable,
  action,
  decorate,
} from 'mobx'
import TimerStore from './TimerStore'

console.log(TimerStore)
class LevelStore {
  currentLevel = {}

  currentLevelId = 0

  levels = []

  currentTest = {}

  currentTestId = 0

  test = []

  loadLevels = async () => {
    const response = await fetch('/levels')
    const levels = await response.json()
    runInAction(() => {
      this.levels = levels
      this.currentLevel = this.levels[this.currentLevelId]
      this.loadTests(this.currentLevel.uuid)
    })
  }

  loadTests = async uuid => {
    const response = await fetch(`/levels/${uuid}/tests`)
    const tests = await response.json()
    runInAction(() => {
      this.tests = tests
      this.currentTest = this.tests[this.currentTestId]
    })
  }

  nextLevel = () => {
    this.currentLevelId = this.currentLevelId + 1
    TimerStore.saveTime(this.currentLevelId)
    this.currentLevel =
      this.currentLevelId >= this.levels.length
        ? false
        : this.levels[this.currentLevelId]
  }
}

decorate(LevelStore, {
  currentLevel: observable,
  levels: observable,
  nextLevel: action,
  currentTest: observable,
  tests: observable,
  nextTest: action,
})

export default new LevelStore()
