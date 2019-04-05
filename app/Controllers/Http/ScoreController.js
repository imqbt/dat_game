'use strict'

const Score = use('App/Models/Score')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with scores
 */
class ScoreController {
  /**
   * Show a list of all scores.
   * GET scores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async index ({ request, response}) {
    return Score.query().ordered().fetch()
  }

  /**
   * Create/save a new score.
   * POST scores
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
    return await Score.create(request.only(['nickname', 'result']))
  }
}

module.exports = ScoreController
