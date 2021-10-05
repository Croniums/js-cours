const fs = require('fs')
function duplicate(name = '') {
 const readable = fs.createReadStream(name)
 const Writeable = fs.createWriteStream(name + '2')
 readable.pipe(Writeable)
    
}

module.exports = {
    duplicate,
  }