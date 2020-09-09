const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const { silent } = require('sugar-chalk')
const feature = 'dotfiles'
const testPath = path.join(__dirname, 'tmp-' + feature)
const packageJSON = path.join(testPath, 'package.json')
const config = require('../generators/app/features/' + feature)
const options = {
  ...require('../__mocks__/dotfiles'),
  ...require('../__mocks__/prompts')
}

describe('Tests configuration files', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': true
      })
      .withPrompts(options)

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  test('checks if configuration files are present', () => {
    const files = config.files({ answers: options }).map((cur) => cur.target)
    assert.file(files)
  })

  test('checks package.json configuration settings', () => {
    assert.jsonFileContent(packageJSON, config.settings({ answers: options }))
  })

  test('checks package.json scripts', () => {
    assert.fileContent(packageJSON, new RegExp('lint:css'))
    assert.fileContent(packageJSON, new RegExp('lint:js'))
    assert.fileContent(packageJSON, new RegExp('lint:html'))
    assert.fileContent(packageJSON, new RegExp('lint:md'))
  })
})
