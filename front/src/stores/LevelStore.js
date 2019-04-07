import { runInAction, observable, action, decorate } from 'mobx'
import TimerStore from './TimerStore'
import WebWorker from '../common/WebWorker'
import testWorker from '../game/testWorker'

class LevelStore {
  constructor() {
    this.worker = new WebWorker(testWorker)

    this.worker.addEventListener('message', event => {
      if (event.data.type === 'result') {
        this.validate(event.data.content)
      }
      if (event.data.type === 'error') {
        this.onError(event.data.content)
      }
    })
  }

  worker

  currentLevel = {}

  currentLevelId = 0

  levels = []

  currentTest = {}

  currentTestId = 0

  showNextLevelAlert = false

  test = []

  logs = []

  validate = result => {
    const expectedResult = this.currentTest.expectedResult.data
    this.logs.push('--------------------')
    this.logs.push(`>> Votre résultat: ${result}`)
    this.logs.push(`>> Résultat attendu: ${expectedResult}`)
    if (result === expectedResult) {
      this.logs.push('>> OK, test valider')
      this.nextTest()
      this.runTests()
    } else {
      this.logs.push('>> KO, test non valider')
    }
  }

  onError = error => {
    this.logs.push('--------------------')
    this.logs.push(`>> Erreur: ${error}`)
  }

  toogleShowNextLevelAlert = () => {
    runInAction(() => {
      this.showNextLevelAlert = true
    })
    setTimeout(() => {
      this.showNextLevelAlert = false
    }, 2000)
  }

  loadLevels = async () => {
    const response = await fetch('/levels')
    const levels = await response.json()
    runInAction(() => {
      this.levels = levels
      this.currentLevelId = 0
      this.currentLevel = this.levels[this.currentLevelId]
      this.loadTests(this.currentLevel.uuid)
    })
  }

  loadTests = async uuid => {
    const response = await fetch(`/levels/${uuid}/tests`)
    const tests = await response.json()
    runInAction(() => {
      this.tests = tests
      this.currentTestId = 0
      this.currentTest = this.tests[this.currentTestId]
    })
  }

  runTests = code => {
    if (!this.currentTest) {
      return this.nextLevel()
    }
    const fn = `${this.currentLevel.code}; ${this.currentLevel.functionName}('${
      this.currentTest.arguments.data
    }')`
    this.worker.postMessage(fn)
  }

  nextLevel = () => {
    this.toogleShowNextLevelAlert()
    this.currentLevelId = this.currentLevelId + 1
    TimerStore.saveTime(this.currentLevelId)
    this.logs = []
    this.currentLevel =
      this.currentLevelId >= this.levels.length
      ? false
      : this.levels[this.currentLevelId]
    if (this.currentLevel !== false) {
      this.loadTests(this.currentLevel.uuid)
    }
  }

  nextTest = () => {
    this.currentTestId = this.currentTestId + 1
    this.currentTest =
      this.currentTestId >= this.tests.length
      ? false
      : this.tests[this.currentTestId]
  }
}

decorate(LevelStore, {
  currentLevel: observable,
  levels: observable,
  nextLevel: action,
  currentTest: observable,
  tests: observable,
  logs: observable,
  nextTest: action,
  showNextLevelAlert: observable,
})

export default new LevelStore()
