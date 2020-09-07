class Feature {
  constructor (config) {
    this.cfg = config
  }

  default () {
    return this.cfg.default
  }

  files (...args) {
    return (this.cfg.files) ? this.cfg.files.apply(this, args) : []
  }

  dependencies (...args) {
    return (this.cfg.dependencies) ? this.cfg.dependencies.apply(this, args) : []
  }

  devDependencies (...args) {
    return (this.cfg.devDependencies) ? this.cfg.devDependencies.apply(this, args) : []
  }

  scripts (...args) {
    return (this.cfg.scripts) ? this.cfg.scripts.apply(this, args) : {}
  }

  settings (...args) {
    return (this.cfg.settings) ? this.cfg.settings.apply(this, args) : {}
  }

  prompt (...args) {
    return (this.cfg.prompt) ? this.cfg.prompt.apply(this, args) : []
  }
}

module.exports = Feature
