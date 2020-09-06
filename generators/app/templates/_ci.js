const { info, fail, pass } = require('sugar-chalk')
const shell = require('shelljs')

info('Running ci script')

function promise (cmd, msg) {
  return (new Promise((resolve) => {
    shell.exec(cmd, { silent: true }, (code) => resolve(code))
  })).then((code) => {
    if (code) {
      fail(msg)
    } else {
      pass(msg)
    }
  })
}

Promise.all([
  promise('yarn lint', 'Linting'),
  promise('yarn test', 'Tests')
]).then((values) => {
  shell.exit(values.reduce((acc, cur) => acc + cur))
})
