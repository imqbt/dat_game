'use strict'

const Level = use('App/Models/Level')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with levels
 */
class LevelController {
  /**
   * Show a list of all levels.
   * GET levels
   */
  async index () {
    return await Level.all()
  }

  /**
   * Display a single level.
   * GET levels/:id
   *
   * @param {object} ctx
   */
  async show ({ params }) {
    return await Level.findOrFail(params.id)
  }
}

module.exports = LevelController
