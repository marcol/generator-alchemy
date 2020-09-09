const fs = require('fs')
const path = require('path')

module.exports = {
  dotfiles: fs.readdirSync(path.join(__dirname, '../generators/app/features/dotfiles'))
}
