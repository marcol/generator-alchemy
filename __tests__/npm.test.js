const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const testPath = path.join(__dirname, 'tmp-npm/')
const config = require('../generators/app/features/npm')
const prompts = require('../__mocks__/prompts')
const { silent } = require('sugar-chalk')

describe('Tests npm functionality', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': true
      })
      .withPrompts(Object.assign({
        npm: true
      }, prompts))

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  test('checks if npm file are present', () => {
    const files = config.files.map((cur) => cur.target)
    assert.file(files)
  })
})
