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

const seeeeed = [
  {
    name: 'Double an integer',
    description: 'i will be an integer. Double it and return it.',
    functionName: 'doubleInteger',
    code: `function doubleInteger(i) {
    
    
    
}
`,
    tests: [
      {
        rawArguments: JSON.stringify({data: 2}),
        rawExpectedResult: JSON.stringify({data: 4})
      },
      {
        rawArguments: JSON.stringify({data: 50}),
        rawExpectedResult: JSON.stringify({data: 100})
      }
    ]
  },
  {
    name: 'Is number even',
    description: "i will be an integer. Return true if it's even, and false if it isn't.",
    functionName: 'isNumberEven',
    code: `function isNumberEven(i) {
    
    
    
}
`,
    tests: [
      {
        rawArguments: JSON.stringify({data: 2}),
        rawExpectedResult: JSON.stringify({data: true})
      },
      {
        rawArguments: JSON.stringify({data: 100}),
        rawExpectedResult: JSON.stringify({data: true})
      }
    ]
  },
]

class LevelSeeder {
  async run () {
    const levels = await Factory.model('App/Models/Level').createMany(2, seeeeed)
    const getTests = async () => {
      return await Promise.all(
        levels.map((level, i) => {
          return Factory.model('App/Models/Test').makeMany(2, seeeeed[i].tests)
        })
      )
    }
    const tests = await getTests()
    const blabla = async () => {
      return await Promise.all(
        tests.map((testsLevel, i) => {
          return levels[i].tests().saveMany(testsLevel)
        })
      )
    }
    const levelWithTests = await blabla()
  }
}

module.exports = LevelSeeder
