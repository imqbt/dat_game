'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Level extends Model {
  tests () {
    return this.hasMany('App/Models/Test')
  }
}

module.exports = Level
