'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Test extends Model {
  level () {
    return this.belongsTo('App/Models/Level')
  }
}

module.exports = Test
