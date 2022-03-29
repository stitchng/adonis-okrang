/*
 * adonis-okrang
 *
 * (c) Harminder Virk <virk@adonisjs.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
*/

const test = require('japa')
const { Config, Logger } = require('@adonisjs/sink')
const { ioc } = require('@adonisjs/fold')

const OkraProvider = require('../providers/OkraProvider.js')
const OkraNg = require('../src/OkraNg/index.js')

test.group('AdonisJS OkraNg Test(s)', (group) => {
  group.before(() => {
    ioc.singleton('Adonis/Src/Config', () => {
      let config = new Config()
      config.set('okrang.liveAPiKey', 'xxxxxx')
      config.set('okrang.testApiKey', 'yyyyyy')
      return config
    })

    ioc.singleton('Logger', () => {
      return new Logger()
    })
  })

  test('okrang provider instance registers instance(s) as expected', async (assert) => {
    let provider = new OkraProvider(ioc)
    provider.register()

    // assert.isInstanceOf(OkraNg)
  })
})
