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
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response }) {
    return Level.all()
  }

  /**
   * Display a single level.
   * GET levels/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response }) {
    return Level.findOrFail(params.id)
  }
}

module.exports = LevelController
