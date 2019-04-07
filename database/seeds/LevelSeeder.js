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
    description: 'Code as fast as you can! You need to double the integer and return it. To test your code, click Go or hit Ctrl-Enter.',
    functionName: 'doubleInteger',
    code: `function doubleInteger(i) {
    // i will be an integer. Double it and return it.
    
    
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
    name: 'Square an integer',
    description: 'You need to square the integer and return it.',
    functionName: 'squareInteger',
    code: `function squareInteger(i) {
    // i will be an integer. Square it and return it.
    
    
}
`,
    tests: [
      {
        rawArguments: JSON.stringify({data: 5}),
        rawExpectedResult: JSON.stringify({data: 25})
      },
      {
        rawArguments: JSON.stringify({data: 512}),
        rawExpectedResult: JSON.stringify({data: 262144})
      }
    ]
  },
  {
    name: 'Is number odd',
    description: "Little bit trickier now. The clock's started ticking again. Return true or false depending on whether the number is odd.",
    functionName: 'isNumberOdd',
    code: `function isNumberOdd(i) {
    //i will be an integer. Return true if it's odd, and false if it isn't.
    
    
}
`,
    tests: [
      {
        rawArguments: JSON.stringify({data: 6}),
        rawExpectedResult: JSON.stringify({data: false})
      },
      {
        rawArguments: JSON.stringify({data: 101}),
        rawExpectedResult: JSON.stringify({data: true})
      }
    ]
  },
  {
    name: 'Is number even',
    description: "Little bit trickier now. The clock's started ticking again. Return true or false depending on whether the number is even.",
    functionName: 'isNumberEven',
    code: `function isNumberEven(i) {
    //i will be an integer. Return true if it's even, and false if it isn't.
    
    
}
`,
    tests: [
      {
        rawArguments: JSON.stringify({data: 2}),
        rawExpectedResult: JSON.stringify({data: true})
      },
      {
        rawArguments: JSON.stringify({data: 99}),
        rawExpectedResult: JSON.stringify({data: false})
      }
    ]
  },
  {
    name: 'Get file extension',
    description: "Here we go! Given a filename in a string (like 'test.jpg'), return the file extension (like 'jpg'), OR false if it doesn't have one.",
    functionName: 'getFileExtension',
    code: `function getFileExtension(i) {
    // i will be a string, but it may not have a file extension.
    // return the file extension (with no period) if it has one, otherwise false
    
}
`,
    tests: [
      {
        rawArguments: JSON.stringify({data: 'blatherskite.png'}),
        rawExpectedResult: JSON.stringify({data: 'png'})
      },
      {
        rawArguments: JSON.stringify({data: 'this does not have one'}),
        rawExpectedResult: JSON.stringify({data: false})
      }
    ]
  },
]

class LevelSeeder {
  async run () {
    const levels = await Factory.model('App/Models/Level').createMany(5, seeeeed)
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
