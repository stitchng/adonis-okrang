'use strict'

/**
 * adonis-okrang
 *
 * @license MIT
 * @copyright Slynova - Romain Lanz <romain.lanz@slynova.ch>
 *
 * @extended Oparand - Ifeora Okechukwu <isocroft@gmail.com>
 */

const path = require('path')

module.exports = async function (cli) {
  try {
    await cli.makeConfig('okrang.js', path.join(__dirname, './config/okrang.js'))
    cli.command.completed('create', 'config/okrang.js')
  } catch (error) {
    // ignore if okrang.js file already exists
  }
}
