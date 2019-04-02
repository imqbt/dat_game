'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TestsSchema extends Schema {
  up () {
    this.create('tests', (table) => {
      table.increments()

      table.text('raw_arguments')
      table.text('raw_expected_result')
      table.integer('level_id').unsigned().references('id').inTable('levels')

      table.timestamps()
    })
  }

  down () {
    this.drop('tests')
  }
}

module.exports = TestsSchema
