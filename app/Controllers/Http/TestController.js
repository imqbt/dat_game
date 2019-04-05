'use strict'

const Test = use('App/Models/Test')
const Level = use('App/Models/Level')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with tests
 */
class TestController {
  /**
   * Show a list of all tests.
   * GET tests
   *
   * @param {Request} ctx.request
   */
  async index ({ request }) {
    const level = await Level.findByOrFail('uuid', request.params.levels_id)
    return await level.tests().fetch()
  }

  /**
   * Display a single test.
   * GET tests/:id
   *
   * @param {object} ctx
   */
  async show ({ params }) {
    return await Test.findOrFail(params.id)
  }
}

module.exports = TestController
