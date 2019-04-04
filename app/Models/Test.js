'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Test extends Model {
  level () {
    return this.belongsTo('App/Models/Level')
  }

  static get computed () {
    return ['arguments', 'expectedResult']
  }

  static get hidden () {
    return ['rawArguments', 'rawExpectedResult']
  }

  getArguments ({ rawArguments }) {
    return JSON.parse(rawArguments)
  }

  getExpectedResult ({ rawExpectedResult }) {
    return JSON.parse(rawExpectedResult)
  }
}

module.exports = Test
