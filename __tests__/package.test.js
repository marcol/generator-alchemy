const assert = require('yeoman-assert')
const helpers = require('yeoman-test')
const path = require('path')
const rimraf = require('rimraf')
const slugify = require('@sindresorhus/slugify')
const feature = 'package'
const testPath = path.join(__dirname, 'tmp-' + feature)
const packageJSON = path.join(testPath, 'package.json')
const prompts = require('../__mocks__/prompts')
const { silent } = require('sugar-chalk')

describe('Tests package.json', function () {
  beforeAll(async (done) => {
    silent(true)

    await helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(testPath)
      .withOptions({
        'skip-install': true
      })
      .withPrompts(prompts)

    silent(false)
    done()
  }, 1200000)

  afterAll(() => {
    rimraf.sync(testPath)
  })

  test('checks if inserted information is correct', () => {
    assert.jsonFileContent(packageJSON, {
      name: slugify(prompts.name),
      author: prompts.author + ' <' + prompts.email + '>'
    })
  })
})
