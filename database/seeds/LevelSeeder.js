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
    const levelTemplate = {
      name: 'Double an integer',
      description: 'i will be an integer. Double it and return it.',
      functionName: 'doubleInteger',
      code: `function doubleInteger(i) {



}
`
    }
    const level = await Factory.model('App/Models/Level').create({...levelTemplate})

    const testTemplates = {
      rawArguments: JSON.stringify({data: 2}),
      rawExpectedResult: JSON.stringify({data: 4})
    }

    const test1 = await Factory.model('App/Models/Test').make({...testTemplates})
    const test2 = await Factory.model('App/Models/Test').make({...testTemplates})

    await level.tests().saveMany([test1, test2])
  }
}

module.exports = LevelSeeder
