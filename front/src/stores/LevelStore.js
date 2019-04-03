import {
  runInAction,
  observable,
  action,
  decorate,
} from 'mobx'

class LevelStore {
  currentLevel = {}

  currentLevelId = 0

  levels = []

  loadLevels = async () => {
    const response = await fetch('/levels')
    const levels = await response.json()
    runInAction(() => {
      this.levels = levels
      this.currentLevel = this.levels[this.currentLevelId]
    })
  }

  nextLevel = () => {
    this.currentLevelId = this.currentLevelId + 1
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
})

export default new LevelStore()
