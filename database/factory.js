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

Factory.blueprint('App/Models/Level', async (faker) => {
  return {
    uuid: faker.guid(),
    name: faker.string(),
    description: faker.sentence()
  }
})

Factory.blueprint('App/Models/Test', async (faker) => {
  return {
    raw_arguments: faker.string(),
    raw_expected_result: faker.string(),
  }
})
