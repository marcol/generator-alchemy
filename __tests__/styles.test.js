const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const feature = 'styles'
const testPath = path.join(__dirname, 'tmp-' + feature)
const config = require('../generators/app/features/' + feature)
const prompts = require('../__mocks__/prompts')
const { silent } = require('sugar-chalk')

describe('Tests styles', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': true
      })
      .withPrompts(Object.assign({
        styles: true
      }, prompts))

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  test('checks if styling files are present', () => {
    const files = config.files.map((cur) => cur.target)
    assert.file(files)
  })
})
