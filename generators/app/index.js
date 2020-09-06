const Generator = require('yeoman-generator')

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
    this.answers = await this.prompt(prompts)
  }

  /**
   * Saving configurations and configure the project
   * @return void
   */
  async configuring () {
    await require('./actions/config')(this)
  }

  /**
   * Write the generator specific files
   * @return void
   */
  async writing () {
    await require('./actions/write')(this)
  }

  /**
   * Install (npm...)
   * @return void
   */
  async install () {
    await require('./actions/install')(this)
  }

  /**
   *  Called last, cleanup, say good bye, etc
   * @return void
   */
  end () {
    require('./actions/end')(this)
  }
}
