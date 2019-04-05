'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ScoresSchema extends Schema {
  up () {
    this.create('scores', (table) => {
      table.increments()

      table.string('nickname')
      table.integer('result')

      table.timestamps()
    })
  }

  down () {
    this.drop('scores')
  }
}

module.exports = ScoresSchema
