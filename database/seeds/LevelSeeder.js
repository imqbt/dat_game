'use strict'

/*
|--------------------------------------------------------------------------
| LevelSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class LevelSeeder {
  async run () {
    const level = await Factory.model('App/Models/Level').create()
    const tests = await Factory.model('App/Models/Test').makeMany(5)

    await level.tests().saveMany(tests)
  }
}

module.exports = LevelSeeder
