const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const testPath = path.join(__dirname, 'tmp-dependencies')
const packageJSON = path.join(testPath, 'package.json')
const features = require('../generators/app/features')
const prompts = require('../__mocks__/prompts')
const { silent } = require('sugar-chalk')
const options = prompts
let dependencies = []
let devDependencies = []

features.forEach((cur) => {
  const feat = require('../generators/app/features/' + cur)
  options[cur] = true
  dependencies = dependencies.concat(feat.dependencies)
  devDependencies = devDependencies.concat(feat.devDependencies)
})

describe('Tests eslint', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': false
      })
      .withPrompts(options)

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  test('checks if dev dependencies were installed', () => {
    dependencies.forEach((cur) => {
      assert.fileContent(packageJSON, new RegExp(cur))
    })
  })

  test('checks if dependencies were installed', () => {
    devDependencies.forEach((cur) => {
      assert.fileContent(packageJSON, new RegExp(cur))
    })
  })
})
