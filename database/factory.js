'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')

// Factory.blueprint('App/Models/User', (faker) => {
//   return {
//     username: faker.username()
//   }
// })

const Factory = use('Factory')

Factory.blueprint('App/Models/Level', async (faker, i, data) => {
  return {
    uuid: faker.guid(),
    name: data[i].name || faker.string(),
    description: data[i].description || faker.sentence(),
    code: data[i].code || faker.sentence(),
    functionName: data[i].functionName || faker.sentence()
  }
})

Factory.blueprint('App/Models/Test', async (faker, i, data) => {
  return {
    rawArguments: data[i].rawArguments || faker.string(),
    rawExpectedResult: data[i].rawExpectedResult || faker.string(),
  }
})
