const slugify = require('@sindresorhus/slugify')

module.exports = {
  default: true,
  files: [],
  dependencies: [],
  devDependencies: [],
  scripts: {},
  settings (data) {
    return {
      name: slugify(data.name),
      version: '0.1.0',
      description: '',
      keywords: [],
      homepage: '',
      bugs: '',
      repository: {
        type: '',
        url: ''
      },
      author: [data.author, ' <', data.email, '>'].join('')
    }
  },
  prompt (gen) {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: gen.appname
      }, {
        type: 'input',
        name: 'author',
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
