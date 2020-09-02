const Generator = require('yeoman-generator')
const { info } = require('sugar-chalk')

module.exports = class Alchemy extends Generator {
  /**
   * Initialization methods (checking current project state, getting
   * configs, etc)
   * @return void
   */
  initializing () {
    require('./actions/init')(this)
  }

  /**
   * prompt users for options (where you’d call this.prompt())
   * @return void
   */
  async prompting () {
    const prompts = require('./actions/prompt')(this)
    info('We need some input from you to setup your project')
    this.answers = await this.prompt(prompts)
  }

  /**
   * Saving configurations and configure the project (creating .editorconfig
   * files and other metadata files)
   * @return void
   */
  configuring () {
    require('./actions/config')(this)
  }

  /**
   * Qrite the generator specific files (routes, controllers, etc)
   * @return void
   */
  writing () {
    require('./actions/write')(this)
  }

  /**
   * Install (npm...)
   * @return void
   */
  install () {
    require('./actions/install')(this)
  }

  /**
   *  Called last, cleanup, say good bye, etc
   * @return void
   */
  end () {
    require('./actions/end')(this)
  }
}
