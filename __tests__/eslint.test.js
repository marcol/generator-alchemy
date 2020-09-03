const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const testPath = path.join(__dirname, 'tmp-eslint/')
const packageJSON = path.join(testPath, 'package.json')
const config = require('../generators/app/features/eslint')
const prompts = require('../__mocks__/prompts')
const { silent } = require('sugar-chalk')

describe('Tests eslint', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': false
      })
      .withPrompts(Object.assign({
        eslint: true
      }), prompts)

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  it('checks if eslint files are present', () => {
    assert.file(config.files)
  })

  it('checks package.json eslint script', () => {
    assert.fileContent(packageJSON, new RegExp('lint:js'))
  })

  it('checks package.json eslint dependencies', () => {
    config.dependencies.forEach((cur) => {
      assert.fileContent(packageJSON, new RegExp(cur))
    })
  })

  it('checks package.json eslint dev dependencies', () => {
    config.devDependencies.forEach((cur) => {
      assert.fileContent(packageJSON, new RegExp(cur))
    })
  })
})
