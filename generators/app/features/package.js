
module.exports = {
  files: [],
  dependencies: [],
  devDependencies: [],
  scripts: {},
  settings: {},
  prompt: (gen) => {
    return [
      {
        type: 'input',
        name: 'project',
        message: 'Your project name',
        default: gen.appname
      }, {
        type: 'input',
        name: 'name',
        message: 'Your name',
        default: gen.user.git.name() || 'John Doe'
      }, {
        type: 'input',
        name: 'email',
        message: 'Your email',
        default: gen.user.git.email() || 'your@email.com'
      }
    ]
  }
}
