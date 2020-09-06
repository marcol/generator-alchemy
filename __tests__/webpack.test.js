const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const feature = 'webpack'
const testPath = path.join(__dirname, 'tmp-' + feature)
const packageJSON = path.join(testPath, 'package.json')
const config = require('../generators/app/features/' + feature)
const prompts = require('../__mocks__/prompts')
const { silent } = require('sugar-chalk')

describe('Tests webpack', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': true
      })
      .withPrompts(Object.assign({
        webpack: true
      }, prompts))

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  test('checks if webpack files are present', () => {
    const files = config.files.map((cur) => cur.target)
    assert.file(files)
  })

  test('checks package.json webpack scripts', () => {
    assert.fileContent(packageJSON, new RegExp('build'))
    assert.fileContent(packageJSON, new RegExp('serve'))
    assert.fileContent(packageJSON, new RegExp('start'))
  })

  test('checks package.json webpack dependencies', () => {
    config.dependencies.forEach((cur) => {
      assert.fileContent(packageJSON, new RegExp(cur))
    })
  })
})
