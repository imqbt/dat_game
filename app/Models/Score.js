'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Score extends Model {
  static scopeOrdered (query) {
    return query.orderBy('result', 'asc').limit(10)
  }
}

module.exports = Score
