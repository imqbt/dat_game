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
    return ['raw_arguments', 'raw_expected_result']
  }

  getArguments ({ raw_arguments }) {
    return raw_arguments
  }

  getExpectedResult ({ raw_expected_result }) {
    return raw_expected_result
  }
}

module.exports = Test
