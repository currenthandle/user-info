var mongoose = require('mongoose')

module.exports = function() {
	var db = mongoose.connect('mongodb://localhost/explore-mean')
	
	require('../app/models/user')
	
	return db
}
