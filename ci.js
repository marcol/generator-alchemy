const ora = require('ora')
const shell = require('shelljs')

const oraLint = ora('linting project').start()
const oraUnit = ora('running tests').start()

function promise (cmd, log) {
  return (new Promise((resolve) => {
    shell.exec(cmd, { silent: true }, (code) => resolve(code))
  })).then((code) => {
    log[code ? 'fail' : 'succeed']()
  })
}

Promise.all([
  promise('yarn lint', oraLint),
  promise('yarn test', oraUnit)
]).then((values) => {
  shell.exit(values.reduce((acc, cur) => acc + cur))
})
