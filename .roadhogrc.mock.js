const mock = {}
require('fs').readdirSync(require('path').join(__dirname + '/server')).forEach(function(file) {
	Object.assign(mock, require('./server/' + file))
})
module.exports = mock
