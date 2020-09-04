const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const testPath = path.join(__dirname, 'tmp-commitlint/')
const packageJSON = path.join(testPath, 'package.json')
const config = require('../generators/app/features/commitlint')
const prompts = require('../__mocks__/prompts')
const { silent } = require('sugar-chalk')

describe('Tests commitlint functionality', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': false
      })
      .withPrompts(Object.assign({
        commitlint: true
      }, prompts))

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  it('checks package.json commitlint settings', () => {
    assert.jsonFileContent(packageJSON, config.settings())
  })

  it('checks package.json commitlint dependencies', () => {
    config.dependencies.forEach((cur) => {
      assert.fileContent(packageJSON, new RegExp(cur))
    })
  })

  it('checks package.json commitlint dev dependencies', () => {
    config.devDependencies.forEach((cur) => {
      assert.fileContent(packageJSON, new RegExp(cur))
    })
  })
})
