const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const feature = 'license'
const testPath = path.join(__dirname, 'tmp-' + feature)
const packageJSON = path.join(testPath, 'package.json')
const config = require('../generators/app/features/' + feature)
const files = config.files.map((cur) => cur.target)
const prompts = require('../__mocks__/prompts')
const { silent } = require('sugar-chalk')

describe('Tests license functionality', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': true
      })
      .withPrompts(Object.assign({
        license: true
      }, prompts))

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  test('checks if license file is present', () => {
    assert.file(files)
  })

  test('checks if license in package is correct', () => {
    assert.jsonFileContent(packageJSON, config.settings())
  })

  test('checks if license has author name', () => {
    assert.fileContent(files[0], prompts.author)
  })

  test('checks if license has author email', () => {
    console.log('here', prompts.email)
    assert.fileContent(files[0], prompts.email)
  })
})
